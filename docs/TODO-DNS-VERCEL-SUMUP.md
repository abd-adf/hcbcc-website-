# Todo — DNS, liens et redirections (Hors Catégorie Brussels)

Guide pour enchaîner les étapes **sans mélanger** le site principal (Vercel) et la boutique SumUp (`shop.`). Le domaine **`horscategoriebrussels.cc`** ne change pas ; seuls les **cibles DNS** changent.

---

## Comment ça s’articule (vue d’ensemble)

| Élément | Rôle |
|--------|------|
| **`horscategoriebrussels.cc`** (racine / apex) | Site Next.js déployé sur **Vercel** |
| **`shop.horscategoriebrussels.cc`** | Boutique **SumUp** (sous-domaine dédié) |
| **Code du repo** | Liens boutique → `https://shop.horscategoriebrussels.cc` (`src/lib/site.ts`, variable `NEXT_PUBLIC_SHOP_URL` possible sur Vercel) |
| **Redirections dans l’app** | `https://horscategoriebrussels.cc/page/jerseys` → **301** vers l’URL shop (évite les 404 pour les anciens liens) |

Ordre logique recommandé : **1) Vercel + domaine racine** → **2) sous-domaine shop chez SumUp** → **3) vérifications**.

---

## 1. Vercel — projet et domaine racine

- [ ] Projet Vercel relié au repo GitHub (`hcbcc-website`).
- [ ] Dans Vercel → **Settings → Domains** : ajouter **`horscategoriebrussels.cc`** et **`www.horscategoriebrussels.cc`** si tu l’utilises.
- [ ] Noter ce que Vercel demande comme enregistrements DNS (souvent **A** vers une IP Vercel et/ou **CNAME** `www` → `cname.vercel-dns.com` ou équivalent — **suivre l’interface Vercel**, elle est la référence).
- [ ] Variable d’environnement (optionnel) : **`NEXT_PUBLIC_SHOP_URL`** = `https://shop.horscategoriebrussels.cc` si tu veux forcer l’URL en prod sans redéployer après coup.

---

## 2. OVH — DNS du domaine (zone DNS)

À faire dans l’espace client OVH : **Nom de domaine** → **`horscategoriebrussels.cc`** → **Zone DNS**.

### 2.1 Site principal sur Vercel

- [ ] **Retirer ou modifier** les anciens enregistrements qui pointaient le domaine racine vers **SumUp** (sinon le site ne passera jamais sur Vercel).
- [ ] Ajouter / mettre à jour selon **les instructions affichées dans Vercel** pour le domaine racine :
  - souvent un enregistrement **A** sur `@` vers l’IP indiquée par Vercel, **ou**
  - un **CNAME** sur `@` si OVH / Vercel le permet pour ton cas.
- [ ] Pour **`www`** : en général **CNAME** vers la cible indiquée par Vercel (ex. `cname.vercel-dns.com`), sauf consigne différente dans le dashboard.

**Propagation** : compte **quelques minutes à 48 h** ; souvent c’est rapide. Tu peux tester avec `dig horscategoriebrussels.cc` ou un outil en ligne « DNS lookup ».

### 2.2 Sous-domaine boutique : `shop`

- [ ] Dans **SumUp** (paramètres du site / boutique) : chercher **domaine personnalisé** / **custom domain** et ajouter **`shop.horscategoriebrussels.cc`**.
- [ ] SumUp affichera une **cible DNS** (ex. un **CNAME** vers un hôte `*.sumup…` ou similaire — **copier exactement** ce qu’ils indiquent).
- [ ] Dans la zone OVH, créer un enregistrement **CNAME** :
  - **Sous-domaine / nom** : `shop`
  - **Cible** : valeur fournie par SumUp
- [ ] Valider le domaine dans SumUp (parfois **TXT** ou vérification automatique après le CNAME).

**Important** : `shop` ne doit **pas** pointer vers Vercel ; il doit aller **uniquement** vers SumUp, sinon la boutique ne s’affichera pas.

---

## 3. Redirections 301 (déjà dans next.config.ts)

Toutes les URLs indexées de l’ancien site sont couvertes :

| URL ancienne | → Destination | Type |
|---|---|---|
| `/product/:slug` | `shop.horscategoriebrussels.cc/product/:slug` | Shop |
| `/products` | `shop.horscategoriebrussels.cc/products` | Shop |
| `/products/:path*` | `shop.horscategoriebrussels.cc/products/:path*` | Shop |
| `/category/:slug` | `shop.horscategoriebrussels.cc/category/:slug` | Shop |
| `/index.php/product/:slug` | `shop.horscategoriebrussels.cc/product/:slug` | Legacy PHP |
| `/page/jerseys` | `shop.horscategoriebrussels.cc` | Shop |
| `/page/licence` | `horscategoriebrussels.cc/licence` | Institutionnel |
| `/page/hc-ride-etiquette` | `horscategoriebrussels.cc/ride-etiquette` | Institutionnel |

**À valider après bascule** :
- [ ] `https://horscategoriebrussels.cc` → site Next.js s’affiche
- [ ] `https://horscategoriebrussels.cc/product/light-thistle` → 301 vers shop
- [ ] `https://horscategoriebrussels.cc/page/jerseys` → 301 vers shop
- [ ] `https://horscategoriebrussels.cc/page/licence` → 301 vers `/licence`
- [ ] `https://shop.horscategoriebrussels.cc` → boutique SumUp en HTTPS

Outil de test rapide : https://httpstatus.io

---

## 4. Sitemaps après bascule

**Site institutionnel** — `horscategoriebrussels.cc/sitemap.xml` :
- `/` · `/membership` · `/licence` · `/ride-etiquette` · `/faq`
- [ ] Soumettre dans Google Search Console

**Shop** — SumUp génère-t-il un sitemap ? À vérifier.
- Si non : créer manuellement et soumettre dans GSC pour `shop.horscategoriebrussels.cc`

---

## 5. Finitions « propres »

- [ ] **Search Console** (Google) : propriété sur le domaine ou l’URL ; après bascule, surveiller l’indexation et les erreurs.
- [ ] **Liens externes** : bio Instagram, Strava, mails, PDF — remplacer les anciennes URLs boutique (`…/page/jerseys` sur l’ancien hébergement) par **`https://shop.horscategoriebrussels.cc`** quand tu peux (les 301 rattrapent l’existant, mais les liens directs évitent un saut inutile).
- [ ] **Vercel** : une fois le domaine « green » dans le dashboard, retester un **déploiement** pour être sûr que tout build correctement.

---

## 5. En cas de problème

| Symptôme | Piste |
|----------|--------|
| Le domaine racine affiche encore SumUp | DNS OVH encore orienté SumUp ; revoir zone DNS et **attendre la propagation** ; vider le cache DNS local ou tester en navigation privée. |
| `shop.` ne charge pas | CNAME `shop` absent ou faux ; vérifier la **cible exacte** dans SumUp ; SSL peut prendre un peu après validation. |
| `/page/jerseys` en 404 | Vérifier que le déploiement Vercel inclut bien `next.config.ts` (redirections) et que tu testes bien l’URL sur le **nouveau** site. |

---

## Références utiles

- Dashboard **Vercel** → Domaines du projet (état du DNS).
- **OVH** → Zone DNS du nom de domaine.
- **SumUp** → Domaine personnalisé de la boutique.

*Dernière mise à jour : checklist alignée sur le repo (`SHOP_URL`, redirections `/page/jerseys`).*
