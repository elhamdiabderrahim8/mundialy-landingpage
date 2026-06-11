# Mundialy Landing Page

Landing page statique pour **Mundialy**, organisee en fichiers separes HTML, CSS et JavaScript afin de faciliter la maintenance et le deploiement.

## Structure

```text
.
|-- index.html
|-- css/
|   `-- style.css
|-- js/
|   `-- main.js
|-- .github/
|   `-- workflows/
|       `-- pages.yml
`-- README.md
```

## Technologies

- HTML5
- CSS3
- JavaScript vanilla
- GSAP et ScrollTrigger via CDN
- Google Fonts via CDN
- GitHub Actions
- GitHub Pages

## Lancer en local

Aucune installation n'est necessaire. Ouvrez simplement `index.html` dans un navigateur.

Pour tester avec un petit serveur local :

```bash
python -m http.server 8000
```

Puis ouvrez :

```text
http://localhost:8000
```

## CI/CD

Le workflow GitHub Actions se trouve dans `.github/workflows/pages.yml`.

Il applique cette chaine :

1. Validation de la presence des fichiers statiques essentiels.
2. Preparation de GitHub Pages.
3. Upload de l'artefact statique.
4. Deploiement automatique vers GitHub Pages apres chaque push sur `main`.

Le deploiement peut aussi etre lance manuellement depuis l'onglet **Actions** avec `workflow_dispatch`.

Avant le premier deploiement, GitHub Pages doit etre active une seule fois dans le repository :

1. Aller dans **Settings**.
2. Ouvrir **Pages**.
3. Dans **Build and deployment**, choisir **GitHub Actions** comme source.
4. Relancer le workflow **Deploy static site to GitHub Pages** depuis l'onglet **Actions**, ou pousser un nouveau commit sur `main`.

## Repository

Repository cible :

```text
git@github.com:elhamdiabderrahim8/mundialy-landingpage.git
```

## Notes de maintenance

- Modifier le contenu HTML dans `index.html`.
- Modifier le design dans `css/style.css`.
- Modifier les interactions et animations dans `js/main.js`.
- Garder les chemins relatifs (`css/style.css`, `js/main.js`) pour conserver la compatibilite GitHub Pages.
