# 3 – Comptes utilisateurs

## Besoin

> En tant que visiteur, je veux créer un compte et me connecter afin de retrouver ma veille sur n'importe quel appareil, sans que d'autres y accèdent.

| Élément | Valeur |
| --- | --- |
| Issue | #3 |
| Priorité | Haute (proposition) |
| Reformulation validée par | Louison Feuvrais, le |
| Vue d'ensemble | [Vue d'ensemble](../vue-d-ensemble.md) |

## Spécification

### Acteurs et droits

| Action | Visiteur | Utilisateur |
| --- | --- | --- |
| Créer un compte | ✅ | ❌ |
| Se connecter | ✅ | ❌ |
| Se déconnecter | ❌ | ✅ |
| Consulter et gérer ses propres ressources | ❌ | ✅ |
| Consulter les ressources d'un autre utilisateur | ❌ | ❌ |

Le visiteur est une personne non connectée ; une fois connecté, il devient utilisateur.

### Cas d'utilisation

*Insérer ici l'image du diagramme de cas d'utilisation.*

### Règles de gestion

| N° | Règle de gestion | Description |
| --- | --- | --- |
| RG-3-01 | Email unique | Un email ne peut être associé qu'à un seul compte, sans tenir compte de la casse |
| RG-3-02 | Mot de passe robuste | Le mot de passe contient au moins 12 caractères, dont une majuscule, une minuscule et un chiffre *(hypothèse, à confirmer)* |
| RG-3-03 | Mot de passe protégé | Le mot de passe n'est jamais conservé en clair : personne, pas même l'administrateur du serveur, ne peut le relire |
| RG-3-04 | Message d'échec neutre | Un échec de connexion affiche le même message, que l'email soit inconnu ou le mot de passe faux, pour ne pas révéler quels comptes existent |
| RG-3-05 | Cloisonnement des données | Un utilisateur n'accède qu'à ses propres ressources, étiquettes et statistiques |
| RG-3-06 | Durée de connexion | La connexion expire après 7 jours ; l'utilisateur doit alors se reconnecter *(hypothèse, à confirmer)* |
| RG-3-07 | Déconnexion effective | Après la déconnexion, les pages de l'application ne sont plus accessibles sans se reconnecter |
| RG-3-08 | Limitation des tentatives | Après 5 échecs de connexion consécutifs sur un même compte, la connexion à ce compte est bloquée 15 minutes *(hypothèse, à confirmer)* |

### Critères d'acceptation

| N° | RG couvertes | Scénario nominal | Scénario alternatif |
| --- | --- | --- | --- |
| CA-3-01 | RG-3-01 | Le visiteur crée un compte avec un email inutilisé : le compte est créé et il est connecté | L'email `Jean@Mail.fr` est déjà utilisé sous la forme `jean@mail.fr` : la création est refusée avec le message « Cet email est déjà utilisé » |
| CA-3-02 | RG-3-02 | Le mot de passe respecte les règles : la création est acceptée | Le mot de passe fait 8 caractères : la création est refusée et les règles non respectées sont affichées |
| CA-3-03 | RG-3-03 | Un compte est créé : le mot de passe enregistré n'est pas lisible | Deux comptes ont le même mot de passe : leurs empreintes enregistrées sont différentes |
| CA-3-04 | RG-3-04 | L'utilisateur saisit un email et un mot de passe corrects : il arrive sur l'accueil | L'email est inconnu, ou le mot de passe est faux : le même message « Email ou mot de passe incorrect » s'affiche dans les deux cas |
| CA-3-05 | RG-3-05 | L'utilisateur A ouvre une de ses ressources : elle s'affiche | L'utilisateur A ouvre l'adresse d'une ressource de l'utilisateur B : le message « Ressource introuvable » s'affiche, sans indiquer qu'elle existe |
| CA-3-06 | RG-3-06, RG-3-07 | L'utilisateur se déconnecte : il revient à l'écran de connexion, et une page de l'application ouverte ensuite le renvoie vers la connexion | La connexion date de plus de 7 jours : la prochaine action renvoie vers l'écran de connexion |
| CA-3-07 | RG-3-08 | Après 5 échecs consécutifs, une 6ᵉ tentative, même correcte, est refusée avec le message « Trop de tentatives, réessayez dans 15 minutes » | Après 4 échecs, une connexion réussie remet le compteur à zéro |

### Hors périmètre

- La connexion par un compte Google ou GitHub
- La vérification de l'email par un lien envoyé à l'inscription
- Un rôle administrateur et la gestion des comptes des autres utilisateurs
- Le partage de ressources entre utilisateurs

### Questions ouvertes

| Question | Bloquante | Réponse |
| --- | --- | --- |
| L'inscription est-elle ouverte à tous, ou l'application est-elle réservée à toi (inscription désactivée en production) ? | Oui | |
| Faut-il pouvoir réinitialiser un mot de passe oublié ? Cela suppose d'envoyer des emails. | Non | |
| Faut-il pouvoir supprimer son compte et toutes ses données (droit à l'effacement) ? | Non | |

## Conception

*À compléter à l'étape de conception.*

## Endpoints

*À compléter à l'étape de conception.*

## Validation

*À compléter après le merge.*
