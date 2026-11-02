# 12 – Intégration continue

## Besoin

> En tant que développeur, je veux que chaque PR soit vérifiée automatiquement (lint, tests, couverture) afin de ne jamais fusionner du code cassé.

| Élément | Valeur |
| --- | --- |
| Issue | #12 |
| Priorité | Haute (proposition) |
| Reformulation validée par | Louison Feuvrais, le |
| Vue d'ensemble | [Vue d'ensemble](../vue-d-ensemble.md) |

## Spécification

### Acteurs et droits

| Action | Développeur |
| --- | --- |
| Ouvrir une PR et déclencher la vérification | ✅ |
| Consulter le résultat de chaque étape | ✅ |
| Fusionner une PR dont la vérification a échoué | ❌ |

GitHub Actions intervient comme système externe : il exécute la vérification et en publie le résultat sur la PR.

### Cas d'utilisation

*Insérer ici l'image du diagramme de cas d'utilisation.*

### Règles de gestion

| N° | Règle de gestion | Description |
| --- | --- | --- |
| RG-12-01 | Déclenchement | La vérification se lance à chaque PR vers `develop` ou `main`, à chaque nouveau commit sur cette PR, et à chaque push sur `develop` ou `main` |
| RG-12-02 | Étapes de l'API | Pour l'API : analyse du style du code, tests unitaires et d'intégration, construction |
| RG-12-03 | Étapes de l'interface | Pour l'interface : lint, tests unitaires, construction |
| RG-12-04 | Seuil de couverture | La couverture des tests est mesurée ; la vérification échoue si elle passe sous 70 % *(hypothèse, à confirmer)* |
| RG-12-05 | Format des commits | Les messages de commit de la PR respectent les Conventional Commits ; sinon, la vérification échoue |
| RG-12-06 | Résultat visible | Le résultat global et celui de chaque étape s'affichent sur la PR, avec le journal de l'étape en échec |
| RG-12-07 | Pas de fusion en échec | Une PR n'est fusionnée que si toutes les étapes ont réussi |
| RG-12-08 | Dépendances vulnérables | Les dépendances de l'API et de l'interface sont analysées chaque semaine, et une PR de mise à jour est proposée pour chaque dépendance vulnérable ou obsolète |
| RG-12-09 | Durée | La vérification complète dure moins de 10 minutes *(hypothèse, à confirmer)* |

### Critères d'acceptation

| N° | RG couvertes | Scénario nominal | Scénario alternatif |
| --- | --- | --- | --- |
| CA-12-01 | RG-12-01 | Une PR vers `develop` est ouverte : la vérification se lance ; un nouveau commit la relance | Un push sur une branche `feature/…` sans PR ne lance pas de vérification |
| CA-12-02 | RG-12-02, RG-12-06 | Une PR qui ne touche que l'API, avec un code correct : les étapes de l'API réussissent | Un test de l'API échoue : l'étape des tests est en échec sur la PR, avec le nom du test dans le journal |
| CA-12-03 | RG-12-03, RG-12-06 | Une PR correcte sur l'interface : lint, tests et construction réussissent | Une erreur de lint est introduite : l'étape de lint est en échec, avec le fichier et la ligne dans le journal |
| CA-12-04 | RG-12-04 | Une couverture de 74 % : l'étape réussit | Une couverture de 68 % : l'étape échoue avec le message indiquant la couverture mesurée et le seuil |
| CA-12-05 | RG-12-05 | Le commit `feat(ressource): ajoute le type vidéo (#2)` est accepté | Le commit `ajout video` fait échouer la vérification |
| CA-12-06 | RG-12-07 | Toutes les étapes ont réussi : la PR peut être fusionnée | Une étape a échoué : la PR est signalée comme non fusionnable *(selon le réglage du dépôt, voir question)* |
| CA-12-07 | RG-12-08 | Une dépendance a une vulnérabilité connue : une PR de mise à jour est ouverte dans la semaine, et elle passe elle-même par la vérification | Aucune dépendance n'est à mettre à jour : aucune PR n'est ouverte |
| CA-12-08 | RG-12-09 | La vérification d'une PR ordinaire se termine en moins de 10 minutes | Une vérification bloquée est interrompue au bout de 20 minutes et signalée en échec |

### Hors périmètre

- La construction et la publication des images, et le déploiement, traités dans #13
- Les tests de bout en bout sur un environnement déployé, traités dans #13
- L'analyse de la qualité par un service externe (SonarCloud)

### Questions ouvertes

| Question | Bloquante | Réponse |
| --- | --- | --- |
| Le dépôt `stash-app` sera-t-il public ou privé ? Public, il permet d'activer la protection des branches gratuitement, et donc de bloquer réellement la fusion d'une PR en échec. | Oui | |

## Conception

*À compléter à l'étape de conception.*

## Endpoints

*Sans objet.*

## Validation

*À compléter après le merge.*
