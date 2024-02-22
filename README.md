# Guideline de Projet Angular

## 1. Initialisation :
### 1.1 Avant Angular 17
- Créer un nouveau projet Angular en utilisant la commande : `ng new nom-du-projet` pour un projet an module ou `ng new nom-du-projet --standalone` pour le standalone.
### 1.1 Angular 17
- Créer un nouveau projet Angular en utilisant la commande : `ng new nom-du-projet` pour un projet en standalone ou `ng new nom-du-projet --no-standalone` pour les modules.

## 2. Gestion des données :
- Modéliser les données attendues de l'API en créant des classes TypeScript.
- Utiliser ces classes pour typer les données reçues dans les services et les composants.
- 
## 3. Création des services :
- Créer un service Angular pour gérer les appels à l'API en utilisant la commande : `ng generate service service-nom`.
- Dans ce service, utiliser le module HttpClient pour effectuer des requêtes HTTP vers l'API.

## 4. Configuration de HttpClientModule :
- Importer HttpClientModule dans l'application en l'ajoutant dans les imports de `app.module.ts` (si pas en standalone).

## 5. Création d'un interceptor :
- Créer un interceptor qui permettra de joindre le token à chacune des requêtes.

## 6. Utilisation des composants :
- Créer des composants pour afficher les données récupérées depuis l'API ou envoyer des données via un formulaire.
- Dans ces composants, injecter le service créé précédemment pour récupérer les données depuis l'API.

## 7. Affichage des données :
- Utiliser les données récupérées depuis l'API dans les composants Angular pour les afficher dans les vues HTML en utilisant la syntaxe Angular.

## 8. Gestion des erreurs :
- Implémenter la gestion des erreurs dans les services pour gérer les cas où l'appel à l'API échoue.
- Afficher des messages d'erreur ou mettre en œuvre des mécanismes pour garantir une expérience utilisateur fluide.
