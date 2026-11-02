# Stash (stash-app)

Application de veille technologique : on y enregistre, étiquette et retrouve les articles, vidéos, dépôts et vulnérabilités de sécurité qui servent à se former et à se tenir à jour. Projet personnel, conçu aussi comme support du titre CDA (NoSQL, tests, déploiement et mise en production automatisés).

Espace de documentation : dossier `docs/` du dépôt (vue d'ensemble, procédure de développement, conventions de commits, un document par feature dans `docs/features/`). La méthode de développement générale s'applique (voir le `CLAUDE.md` global) ; ce fichier ne décrit que ce qui est propre au projet.

## Stack

- API : Spring Boot 4.1, Java 25, Gradle 9 (Spring Data MongoDB, Spring Security avec JWT)
- Front : Angular 22, PrimeNG
- Base de données : MongoDB
- Infrastructure : Docker Compose, Caddy (HTTPS), images publiées sur GHCR, déploiement sur un serveur (hébergement à choisir, voir la feature Déploiement continu)
- Services tiers : aucun compte de service. Les sites pointés par les liens enregistrés sont consultés pour en récupérer le titre, la description et l'image

## Structure du dépôt

```
docs/                        vue d'ensemble, procédure, conventions, documents de feature
.github/                     modèles d'issue et de PR, pipeline, Dependabot
commitlint.config.mjs        format des commits vérifié par la pipeline
```

L'API (`backend/`) et le front (`frontend/`) ne sont pas encore générés.

## Commandes

À compléter à la génération de l'API et du front.

## Spécificités du projet

- **Base NoSQL** : MongoDB remplace PostgreSQL et Liquibase de la méthode générale. Les conventions propres (collections, champs en camelCase, `createdAt` et `updatedAt`, migrations versionnées) sont dans l'annexe E de `docs/procedure-de-developpement.md`.
- **Ressource à champs variables** : une ressource (article, vidéo, dépôt, vulnérabilité) porte dans son document les champs propres à son type.
- **Récupération des informations d'un lien** : l'API consulte des sites tiers à la demande de l'utilisateur ; elle ne doit jamais joindre une adresse interne (protection contre la SSRF, RG de la feature Ajout d'une ressource).
- **Pipeline progressive** : la pipeline ne vérifie pour l'instant que le format des commits et la provenance des PR vers `main`. Les jobs de l'API, du front, des images et du déploiement arrivent avec les features Intégration continue et Déploiement continu.
- Seuil de couverture visé : 70 %.
- Le dépôt étant privé sans plan payant, les règles de protection de branches GitHub ne sont pas actives : la discipline PR vers `develop` repose sur la pipeline et la revue.
