# S07 - Organisation

---

## Etapes de création d'un serveur express

- [ ] `npm init` ou `npm init -y`
- [ ] Installer les modules nécessaire au fonctionnement de l'app : `express`, `ejs`
- [ ] Mettre `"type": "module"` dans `package.json`
- [ ] Faire un `.gitignore`
- [ ] Créer des dossiers : `src/controllers`, `src/router`, `src/views`, `public`
- [ ] Créer le point d'entrée de l'app (`index.js`)
  - [ ] Importer express et créer un serveur http
  - [ ] Importer les views
  - [ ] Importer le middleware `express.static` , ce sont des fichiers que le HTML va demander (css, js front, images etc etc)
  - [ ] Voir les locals
- [ ] Créer un rooter
  
## Plan pour faire une fonction addition

- [ ] trouver un nom de fonction
- [ ] cette fonction accepte deux paramètres (quand on défini une fonction, elle accepte des paramètres, quand on l'éxecute on lui passe des arguments)
- [ ] cette fonction doit valider les paramètres : on veut s'assurer que a et b sont des nombres.
  