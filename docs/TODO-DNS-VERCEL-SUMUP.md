# Déploiement DNS — Guide complet pas à pas

> **Règle d'or** : ne jamais modifier le DNS du domaine principal AVANT que le sous-domaine `shop.` soit validé et fonctionnel. On commence par SumUp, on finit par Vercel.

---

## Vue d'ensemble

```
horscategoriebrussels.cc        → Vercel  (nouveau site institutionnel)
shop.horscategoriebrussels.cc   → SumUp   (boutique, inchangée)
```

Ton registrar DNS est **OVH**. C'est là que tu fais tous les changements DNS.

---

## PHASE 1 — Préparer SumUp (sans rien casser)

> Le site actuel reste en ligne pendant toute cette phase.

### Étape 1 — Trouver le domaine custom dans SumUp

1. Connecte-toi sur [store.sumup.com](https://store.sumup.com)
2. Va dans **Paramètres** (icône engrenage) → **Boutique en ligne** → **Domaine**
3. Tu verras une option "Domaine personnalisé" ou "Custom domain"
4. Entre `shop.horscategoriebrussels.cc`
5. SumUp va t'afficher une valeur CNAME à copier — ça ressemble à :
   `shops.sumup.com` ou `custom.sumup.com` ou similaire
6. **Copie cette valeur exactement**, tu en auras besoin à l'étape suivante

### Étape 2 — Créer le CNAME dans OVH

1. Connecte-toi sur [ovh.com](https://ovh.com) → Espace client
2. Menu gauche : **Noms de domaine** → clique sur `horscategoriebrussels.cc`
3. Onglet **Zone DNS**
4. Clique **Ajouter une entrée**
5. Choisis le type **CNAME**
6. Remplis :
   - **Sous-domaine** : `shop`
   - **Cible** : la valeur copiée depuis SumUp (ex: `shops.sumup.com.` — avec le point final si OVH en demande un)
   - **TTL** : laisser la valeur par défaut
7. **Confirme**

### Étape 3 — Valider dans SumUp

1. Retourne dans SumUp → même écran qu'à l'étape 1
2. Clique **Vérifier** ou **Valider le domaine**
3. SumUp va checker que le CNAME est bien en place
4. ⚠️ La propagation DNS peut prendre **5 à 30 minutes** — si ça ne valide pas tout de suite, attends et réessaie
5. Une fois validé, SumUp génère automatiquement le certificat SSL (cadenas HTTPS)

### ✅ Test de validation Phase 1

Ouvre un onglet privé et va sur :
**https://shop.horscategoriebrussels.cc**

→ Tu dois voir ta boutique SumUp avec le cadenas HTTPS.
→ Si c'est bon : passe à la Phase 2.
→ Si ça ne marche pas : attends encore 15 min et réessaie. Ne passe pas à la suite.

---

## PHASE 2 — Connecter Vercel au domaine principal

> Le site SumUp actuel est encore en ligne sur `horscategoriebrussels.cc` à ce stade. C'est normal.

### Étape 4 — Ajouter le domaine dans Vercel

1. Connecte-toi sur [vercel.com](https://vercel.com)
2. Ouvre le projet **hcbcc-website**
3. Va dans **Settings** → **Domains**
4. Clique **Add Domain**
5. Entre `horscategoriebrussels.cc` → **Add**
6. Vercel va afficher les enregistrements DNS à créer. Note les valeurs exactes affichées — elles ressemblent à :
   ```
   A      @      76.76.21.21
   CNAME  www    cname.vercel-dns.com
   ```
   ⚠️ **Utilise les valeurs affichées par Vercel**, pas celles ci-dessus.

### Étape 5 — Ajouter la variable d'environnement dans Vercel

1. Dans Vercel → **Settings** → **Environment Variables**
2. Clique **Add New**
3. Remplis :
   - **Key** : `NEXT_PUBLIC_SHOP_URL`
   - **Value** : `https://shop.horscategoriebrussels.cc`
   - **Environment** : cocher **Production**, **Preview**, **Development**
4. **Save**

### Étape 6 — Modifier les DNS dans OVH (la bascule)

> C'est le moment critique. Le site va être brièvement inaccessible (quelques minutes à 1h). Fais-le le soir ou un week-end.

1. Retourne dans OVH → **Zone DNS** de `horscategoriebrussels.cc`
2. Tu vas voir des entrées existantes qui pointent vers SumUp. Il faut les **remplacer**.

**Supprimer ou modifier l'enregistrement A existant sur `@`** :
- Clique sur le crayon (modifier) de l'entrée A sur `@`
- Remplace la valeur par l'IP Vercel : `76.76.21.21`
- Confirme

**Supprimer ou modifier le CNAME `www` existant** :
- Clique sur le crayon de l'entrée CNAME sur `www`
- Remplace la cible par `cname.vercel-dns.com`
- Confirme

**Ne touche pas à l'entrée CNAME `shop`** que tu as créé en Phase 1.

3. Confirme toutes les modifications dans OVH

### Étape 7 — Attendre la propagation

- La propagation prend en général **5 à 30 minutes**, parfois jusqu'à 2h
- Pour suivre l'avancement : va sur [dnschecker.org](https://dnschecker.org) et entre `horscategoriebrussels.cc` — tu verras en temps réel quels DNS dans le monde ont basculé
- Pendant ce temps, Vercel génère automatiquement le certificat SSL

---

## PHASE 3 — Vérifications après bascule

> Fais tout en **navigation privée** pour éviter les caches navigateur.

### Étape 8 — Tests à effectuer

Ouvre [httpstatus.io](https://httpstatus.io) et teste une par une ces URLs :

| URL à tester | Résultat attendu |
|---|---|
| `https://horscategoriebrussels.cc` | ✅ Nouveau site, code 200 |
| `https://www.horscategoriebrussels.cc` | ✅ Redirige vers apex, code 301 |
| `https://shop.horscategoriebrussels.cc` | ✅ Boutique SumUp, code 200 |
| `https://horscategoriebrussels.cc/product/light-thistle` | ✅ 301 → shop |
| `https://horscategoriebrussels.cc/products` | ✅ 301 → shop/products |
| `https://horscategoriebrussels.cc/page/jerseys` | ✅ 301 → shop |
| `https://horscategoriebrussels.cc/page/licence` | ✅ 301 → /licence |
| `https://horscategoriebrussels.cc/page/hc-ride-etiquette` | ✅ 301 → /ride-etiquette |
| `https://horscategoriebrussels.cc/membership` | ✅ Page membership, code 200 |

### Étape 9 — Vérifier dans Vercel

1. Dans Vercel → **Settings → Domains**
2. Le domaine `horscategoriebrussels.cc` doit afficher un badge **✓ Valid Configuration**
3. Si tu vois encore "Invalid" : attends encore 10 min, la propagation n'est pas terminée

---

## PHASE 4 — Google Search Console

### Étape 10 — Soumettre le sitemap

1. Va sur [search.google.com/search-console](https://search.google.com/search-console)
2. Sélectionne la propriété `horscategoriebrussels.cc`
3. Menu gauche : **Sitemaps**
4. Dans le champ, entre : `sitemap.xml`
5. Clique **Envoyer**
6. Google va indexer les nouvelles URLs dans les jours qui suivent

### Étape 11 — Mettre à jour les liens externes

Quand tu as le temps (pas urgent, les 301 gèrent l'existant) :
- [ ] Bio Instagram → remplacer par `https://horscategoriebrussels.cc`
- [ ] Bio Strava → idem
- [ ] Tous les liens vers `/page/jerseys` → remplacer par `https://shop.horscategoriebrussels.cc`

---

## En cas de problème

| Ce que tu vois | Ce que tu fais |
|---|---|
| Le nouveau site n'apparaît pas après 1h | Va sur dnschecker.org, vérifie que le A record pointe bien vers `76.76.21.21`. Si non, vérifie OVH. |
| "SSL Error" ou "Not Secure" | Le certificat Vercel n'est pas encore généré. Attends 15 min. |
| La boutique shop. ne marche plus | Vérifie que le CNAME `shop` dans OVH n'a pas été supprimé par erreur. |
| Vercel affiche "Invalid Configuration" | Double-vérifie que le A record dans OVH est bien `76.76.21.21` et pas une autre valeur. |
| Une ancienne URL produit donne 404 | Le redirect 301 n'a pas fonctionné — vérifie que le déploiement Vercel est bien le dernier commit (branch `main`). |

---

## Résumé de l'ordre des opérations

```
1. SumUp → ajouter shop.horscategoriebrussels.cc
2. OVH → créer CNAME shop → [valeur SumUp]
3. Tester https://shop.horscategoriebrussels.cc ✅
4. Vercel → ajouter domaine horscategoriebrussels.cc
5. Vercel → ajouter variable NEXT_PUBLIC_SHOP_URL
6. OVH → modifier A @ → 76.76.21.21 et CNAME www → cname.vercel-dns.com
7. Attendre propagation (15 min à 2h)
8. Tester toutes les URLs
9. Google Search Console → soumettre sitemap
```
