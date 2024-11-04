# Challenge Épisode 1

## Lister les étudiants d'une promo

Énoncé du débrouillard: Dans la page détails d'une promo, ajouter un lien "voir les étudiants de la promo" et implémenter la fonctionnalité.

### Bonus

L'intégration (répertoire intégration) faite par le stagiaire est ... sommaire. N'hésitez pas à la retravailler !

<details>
<summary>Énoncé détaillé</summary>

- La fonctionnalité concerne une seule promo, donc là encore on a besoin d'une route paramétrée pour cibler un ID. par exemple `/promo/:id/students`
- La méthode associée doit être dans un controller. Soit `promoController`, soit `studentController`, à vous de voir ce qui vous semble le plus logique, du moment que la méthode porte un nom explicite !
- Dans cette méthode il faut :
  - récupérer l'id de la promo ciblée
  - trouver la liste des étudiants de la promo. Importer la liste des étudiants depuis le json, et utiliser une boucle ou un [`.filter`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#syntaxe).
  - "render" la view, sans oublier de lui transmettre les données !
- Contruire la view en listant les étudiants
- Ne pas oublier d'ajouter le lien vers la fonctionnalité dans la page "détails d'une promo".

</details>

## S07E01 - Organisation

---

- <https://en.wikipedia.org/wiki/List_of_HTTP_status_codes>

- [ ] Trouver la commande pour reset à un commit

## Etapes de création d'un serveur express

- [x] `npm init` ou `npm init -y`
- [x] Installer les modules nécessaire au fonctionnement de l'app : `express`, `ejs`, `dotenv`
- [x] Mettre `"type": "module"` dans `package.json`
- [x] Faire un `.gitignore`
- [x] Créer le point d'entrée de l'app (`index.js`)
  - [x] Importer express et créer un serveur http
- [x] Créer les scripts de lancement de l'app
- [x] Créer un routeur
- [x] Créer des dossiers : `src/controllers`, `src/router`, `src/views`, `public`,
- [x] Importer les views
- [x] Importer le middleware `express.static` , ce sont des fichiers que le HTML va demander (css, js front, images etc etc)
- [x] Voir les locals
- [ ] Créer un dossier  `data`

## Plan pour faire une fonction addition

- [ ] trouver un nom de fonction
- [ ] cette fonction accepte deux paramètres (quand on définit une fonction, elle accepter des paramètres, quand on l'exécute, on lui passe des arguments)
- [ ] cette fonction doit valider les paramètres : on veut s'assurer que a et b sont des nombres.
