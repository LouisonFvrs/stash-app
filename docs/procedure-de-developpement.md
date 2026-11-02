# Procédure de développement

## Introduction

Toute feature suit le même chemin : besoin, spécification, conception, développement, revue, validation. Ce document décrit ce chemin pour toute personne qui rejoint le projet.

Deux checklists encadrent chaque feature. La **Definition of Ready** dit quand une feature peut être développée ; la **Definition of Done** dit quand elle est terminée. Elles figurent en annexe.

La spécification et la conception sont documentées dans l'espace de documentation du projet. Le suivi des tâches, le code et les revues se font sur GitHub.

## Outils

| Outil | Usage |
| --- | --- |
| GitHub Issues | Une issue par feature ; son numéro (ex. #12) identifie la feature partout |
| GitHub Projects | Suivi de l'avancement et de la priorité (Haute, Moyenne, Basse) |
| Espace de documentation | Vue d'ensemble du projet et un document par feature (besoin, spécification, conception, endpoints, validation) |
| Figma | Maquettes des interfaces |
| GitHub Actions | Format des commits, build, conventions, tests et couverture sur chaque PR |

Le GitHub Project suit chaque feature à travers six colonnes :

1. **Backlog** : feature identifiée, Definition of Ready incomplète
2. **Prêt** : Definition of Ready complète, développement possible
3. **En cours** : développement sur la branche de feature
4. **En revue** : PR ouverte, revue et pipeline en cours
5. **En recette** : PR mergée, validation en attente
6. **Terminé** : Definition of Done complète, issue fermée

## Organisation de l'espace de documentation

```
docs/
├── Conventions de commits
├── Procédure de développement
├── Vue d'ensemble
└── features/
    ├── 12-<titre-de-la-feature>.md
    └── 15-<titre-de-la-feature>.md
```

- **Vue d'ensemble** : présentation du projet, acteurs, diagramme de classes global, format d'erreur commun de l'API, index des features avec priorité et statut.
- **Document de feature** : besoin, spécification, conception avec ses endpoints, validation. Il est nommé avec le numéro d'issue et contient tout ce qu'il faut pour développer la feature.

## Le workflow pas à pas

### 1. Besoin

1. Après la réunion, rédiger le compte-rendu et en tirer les features, chacune formulée en user story : *« En tant que [acteur], je veux [action] afin de [bénéfice]. »*
2. Envoyer la reformulation au demandeur et obtenir sa validation.
3. Créer l'issue avec le formulaire **Feature** : elle reçoit un numéro et arrive dans **Backlog**.
4. Créer le document de la feature dans `docs/features/`, nommé `<numéro>-<titre>.md`, et lier l'issue et le document dans les deux sens.
5. Ajouter la feature à l'index de la vue d'ensemble et définir sa priorité dans le GitHub Project.

### 2. Spécification

Dans le document de la feature, rédiger dans l'ordre : les acteurs, la matrice des droits, les user stories, le diagramme de cas d'utilisation, le tableau des règles de gestion et le tableau des critères d'acceptation. Noter le hors périmètre et lever toutes les questions bloquantes.

| N° | Règle de gestion | Description |
| --- | --- | --- |
| RG-12-01 | <intitulé> | <description> |

| N° | RG couvertes | Scénario nominal | Scénario alternatif |
| --- | --- | --- | --- |
| CA-12-01 | RG-12-01 | <situation> : <résultat> | <situation> : <résultat> |

Chaque règle de gestion doit être couverte par au moins un critère d'acceptation. Règles et critères sont numérotés avec le numéro d'issue (RG-12-01, CA-12-01) pour être cités sans ambiguïté dans les commits et les PR.

### 3. Conception

1. Réaliser la maquette Figma si la feature a une interface, et la lier à l'issue.
2. Mettre à jour le diagramme de classes si le modèle change.
3. Réaliser un diagramme de séquence si des composants échangent entre eux (authentification, OAuth2, appels à une API tierce).
4. Documenter les endpoints dans la section Endpoints du document de la feature, selon la norme (annexe F).
5. Documenter les choix techniques et leur justification, puis les impacts sur l'existant.
6. Relire et valider l'ensemble, compléter la Definition of Ready dans l'issue, puis la passer dans **Prêt**.

### 4. Développement

1. Créer la branche `feature/<numéro>-<description>` depuis `develop` et passer l'issue **En cours**.
2. Coder selon les conventions (annexe E).
3. Mettre les secrets dans le `.env`, jamais poussé, et ajouter les noms des variables dans le `.env.example`.
4. Écrire les tests à partir des critères d'acceptation, scénarios nominal et alternatif.
5. Committer selon la convention (annexe D), une étape cohérente à la fois.

### 5. Pull request et intégration

1. Vérifier que tous les tests passent en local, pousser la branche et ouvrir la PR vers `develop`.
2. Compléter le modèle de PR avec `Refs #<numéro>` (jamais `Closes`, pour que l'issue reste ouverte jusqu'à la validation). L'issue passe **En revue**.
3. Faire la revue avec la checklist (annexe C) et vérifier que les endpoints correspondent à la documentation.
4. Attendre une pipeline au vert, cocher la partie « avant le merge » de la Definition of Done, puis merger dans `develop` (merge commit).
5. Passer l'issue **En recette**.

### 6. Validation et clôture

1. Sur la version déployée, rejouer les scénarios de chaque critère d'acceptation.
2. Remplir la section Validation du document de la feature et mettre à jour l'index de la vue d'ensemble.
3. Fermer l'issue à la main : elle passe dans **Terminé**.

## Branches et mise en production

| Branche | Alimentée par | Protections |
| --- | --- | --- |
| `feature/<numéro>-<description>` | Commits du développeur | Aucune |
| `release/X.Y.Z` | Mise à jour du changelog pour une version | Aucune |
| `develop` | PR depuis une branche de feature ou de release | Aucune règle active (dépôt privé sans plan payant) : PR obligatoire et pipeline au vert par discipline |
| `main` | PR depuis `develop` uniquement | Idem ; la pipeline vérifie qu'une PR vers `main` vient de `develop` |

Aucune approbation par un relecteur n'est exigée tant que le développeur travaille seul : GitHub n'autorise pas à approuver sa propre PR. La checklist de revue (annexe C) en tient lieu.

Pour une mise en production :

1. Vérifier que toutes les features mergées dans `develop` depuis la dernière version sont validées (issues fermées).
2. Créer l'issue « Release X.Y.Z ».
3. Créer la branche `release/X.Y.Z` depuis `develop`, y mettre à jour le `CHANGELOG.md`, puis ouvrir une PR vers `develop` et la merger.
4. Ouvrir une PR de `develop` vers `main`, intitulée « Release X.Y.Z », attendre une pipeline au vert, puis merger.
5. Poser le tag `vX.Y.Z` sur `main` : il déclenche le déploiement en production.
6. Fermer l'issue de release.

## Annexe A — Definition of Ready

**Besoin**

- [ ] Le besoin est retranscrit dans le document de la feature
- [ ] La feature est exprimée en une phrase (En tant que… je veux… afin de…)
- [ ] Le demandeur a validé la reformulation du besoin
- [ ] La feature a une issue GitHub, et l'issue et le document se référencent mutuellement
- [ ] La priorité est définie (Haute, Moyenne, Basse)

**Spécification**

- [ ] Les acteurs concernés par la feature sont listés
- [ ] La matrice des droits est établie
- [ ] La ou les user stories sont rédigées
- [ ] Le diagramme de cas d'utilisation est réalisé
- [ ] Le tableau des règles de gestion est complet (N°, règle, description)
- [ ] Le tableau des critères d'acceptation est complet (N°, RG couvertes, scénario nominal, scénario alternatif), et chaque règle de gestion est couverte par au moins un critère
- [ ] Les cas limites et cas d'erreur sont traités dans les scénarios alternatifs
- [ ] Ce qui est hors périmètre est noté
- [ ] Il ne reste aucune question ouverte bloquante

**Conception**

- [ ] Si la feature a une interface : la maquette Figma est réalisée et liée à l'issue
- [ ] Le diagramme de classes est réalisé ou mis à jour
- [ ] Si la feature implique des échanges entre composants : le diagramme de séquence est réalisé
- [ ] Les endpoints sont documentés dans le document de la feature selon la norme (annexe F)
- [ ] Les choix techniques sont documentés avec leur justification
- [ ] Les impacts sur l'existant sont identifiés
- [ ] L'ensemble de la conception est relu et validé avant de passer au développement

## Annexe B — Definition of Done

**Code**

- [ ] Le code respecte l'organisation feature-first et les conventions de code
- [ ] Les commits respectent les conventions et référencent l'issue
- [ ] Aucun secret en dur dans le code ; le `.env.example` est à jour si une variable a été ajoutée

**Tests**

- [ ] Le plan de test est établi à partir des critères d'acceptation
- [ ] Chaque critère d'acceptation est couvert par au moins un test (scénario nominal et alternatif)
- [ ] Tous les tests passent en local

**Revue et intégration**

- [ ] La branche de feature est poussée et la PR est ouverte avec `Refs #<numéro>`
- [ ] La revue est faite avec la checklist de revue
- [ ] Les endpoints implémentés correspondent à la documentation
- [ ] La pipeline est au vert
- [ ] Le Dockerfile respecte les conventions, s'il a été modifié
- [ ] La PR est mergée dans `develop`

**Validation et documentation**

- [ ] La feature déployée est validée en rejouant les scénarios des critères d'acceptation
- [ ] La section Validation du document de la feature est remplie et l'index de la vue d'ensemble est à jour
- [ ] L'issue est fermée manuellement et la carte est dans la colonne Terminé

## Annexe C — Checklist de revue

Relire le diff dans l'interface de la PR, si possible après une pause, en deux passes : le fonctionnel d'abord, la forme ensuite.

**Fonctionnel**
- [ ] Chaque critère d'acceptation est implémenté, y compris les scénarios alternatifs
- [ ] Rien n'a été ajouté hors du périmètre de la feature
- [ ] Les endpoints correspondent à la documentation (URL, formats, codes d'erreur)

**Sécurité**
- [ ] Les droits de la matrice sont appliqués côté API, pas seulement masqués côté front
- [ ] Les entrées sont validées sur les DTO de requête
- [ ] Aucun secret dans le code, les logs ou les messages d'erreur ; `.env.example` à jour

**Spring Boot**
- [ ] Structure `controller/`, `dto/`, `entity/`, `repository/`, `service/` respectée ; `common/` ne contient que du partagé
- [ ] Aucune logique métier dans les controllers, aucune entité exposée par l'API
- [ ] Les erreurs passent par le `@RestControllerAdvice`
- [ ] Pas de requêtes inutiles en boucle vers la base ou les API tierces

**Angular**
- [ ] Les appels HTTP passent par les services de la feature
- [ ] Données typées, aucun `any`
- [ ] États de chargement, d'erreur et de liste vide gérés à l'écran

**Base de données**
- [ ] Les évolutions de données passent par une migration nouvelle (aucune migration appliquée n'est modifiée)
- [ ] Les champs sont en camelCase, chaque document a `createdAt` et `updatedAt`
- [ ] Les recherches fréquentes s'appuient sur un index

**Tests**
- [ ] Les tests vérifient réellement un comportement
- [ ] Les cas d'erreur sont testés, notamment l'indisponibilité des services tiers

**Lisibilité**
- [ ] Code en anglais, noms explicites, pas de code mort ni commenté
- [ ] Les commentaires expliquent le pourquoi

## Annexe D — Conventions de commits

Voir le document « Conventions de commits ».

## Annexe E — Conventions de code

**Règles générales**

- Le code est écrit uniquement en anglais ; documentation et commits en français.
- Le `.env` n'est jamais poussé ; le `.env.example` est poussé, avec toutes les variables mais sans valeurs.
- Ni code mort, ni code commenté. Les commentaires expliquent le pourquoi.

**Spring Boot** — organisation feature-first :

```
com.<organisation>.<projet>
├── <feature>/
│   ├── controller/
│   ├── dto/             (requêtes, réponses, mapper)
│   ├── document/ 
│   ├── repository/
│   └── service/
└── common/
    ├── config/
    ├── exception/       (exceptions et @RestControllerAdvice)
    └── security/        (Spring Security, JWT)
```

- `common/` ne contient que ce qui est partagé par plusieurs features.
- Injection par constructeur. Aucune logique métier dans les controllers.
- Aucun document exposé par l'API : DTO `XxxRequest` en entrée, `XxxResponse` en sortie, validés avec Bean Validation.
- Erreurs centralisées dans le `@RestControllerAdvice`.
- Tests : JUnit 5 et Mockito pour les services, `@WebMvcTest` pour les controllers, Testcontainers (MongoDB) pour l'intégration.

**Angular** — `core/`, `shared/`, `features/<feature>/` (pages, components, services, models).

- Composants standalone, fichiers en kebab-case, `any` interdit.
- Les composants n'appellent jamais `HttpClient` : les appels passent par les services de la feature.
- Une seule bibliothèque d'interface par projet, choisie au démarrage.

**MongoDB**

- Collections au pluriel en camelCase (`resources`, `users`) ; champs en camelCase ; identifiant `_id` généré par MongoDB.
- `createdAt` et `updatedAt` sur chaque document.
- Les champs propres à un type de ressource sont rangés dans le document lui-même ; les index (texte, unicité) sont déclarés dans le code et créés au démarrage.
- Les évolutions de données se font par des migrations versionnées, jamais modifiées une fois appliquées.

## Annexe F — Norme de documentation des endpoints

Chaque endpoint est décrit dans la section Endpoints du document de la feature. Les erreurs suivent le format commun défini dans la vue d'ensemble.

| Élément | Contenu |
| --- | --- |
| Méthode et URL | `GET /api/<ressource>/{id}` |
| Description | Ce que fait l'endpoint, en une phrase |
| Acteurs autorisés | Repris de la matrice des droits |
| Paramètres | Chemin et requête, avec type et caractère obligatoire |
| Corps de la requête | Format attendu, avec un exemple JSON |
| Réponse en cas de succès | Code HTTP et exemple JSON |
| Codes d'erreur | Chaque code possible et sa cause |
| RG liées | Les règles de gestion appliquées par l'endpoint |
