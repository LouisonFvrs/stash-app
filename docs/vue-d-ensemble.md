# Stash – Vue d'ensemble

## Présentation du projet

Stash est une application de veille technologique. Elle permet d'enregistrer en quelques secondes les articles, vidéos, dépôts et vulnérabilités de sécurité rencontrés au fil de la journée, de les étiqueter, de suivre leur lecture et de les retrouver par une recherche, au lieu de les perdre dans des favoris ou des onglets ouverts.

| Élément | Valeur |
| --- | --- |
| Demandeur | Louison Feuvrais |
| Dépôt GitHub | https://github.com/LouisonFvrs/stash-app |
| GitHub Project | https://github.com/users/LouisonFvrs/projects/2 |
| Stack | Spring Boot 4.1 (Java 25, Gradle), Angular 22, MongoDB, Docker Compose |
| Kit UI | PrimeNG |
| Services tiers | Aucun compte de service ; sites distants consultés pour les informations des liens |

## Acteurs

| Acteur | Description |
| --- | --- |
| Visiteur | Personne non connectée : peut créer un compte et se connecter |
| Utilisateur | Personne connectée : gère sa propre veille, sans accès à celle des autres |
| Développeur | Fait évoluer, livre et exploite l'application (features techniques) |

## Modèle de données

Le diagramme de classes global est complété par chaque feature qui modifie le modèle.

*Insérer ici l'image du diagramme de classes.*

| Collection | Description | Introduite par |
| --- | --- | --- |

## Format d'erreur de l'API

Toutes les erreurs de l'API sont renvoyées par le `@RestControllerAdvice` avec ce format.

```json
{
  "status": 404,
  "error": "RESOURCE_NOT_FOUND",
  "message": "Message lisible par l'utilisateur",
  "timestamp": "2026-01-01T00:00:00Z"
}
```

## Index des features

| Issue | Feature | Priorité | Statut |
| --- | --- | --- | --- |
| #3 | [Comptes utilisateurs](features/0003-comptes-utilisateurs.md) | Haute | Backlog |
| #4 | [Ajout d'une ressource](features/0004-ajout-d-une-ressource.md) | Haute | Backlog |
| #5 | [Liste des ressources](features/0005-liste-des-ressources.md) | Haute | Backlog |
| #6 | [Détail, modification et suppression](features/0006-detail-modification-suppression.md) | Haute | Backlog |
| #7 | [Étiquettes](features/0007-etiquettes.md) | Moyenne | Backlog |
| #8 | [Suivi de lecture](features/0008-suivi-de-lecture.md) | Moyenne | Backlog |
| #9 | [Recherche et filtres](features/0009-recherche-et-filtres.md) | Moyenne | Backlog |
| #10 | [Tableau de bord](features/0010-tableau-de-bord.md) | Moyenne | Backlog |
| #11 | [Suivi des vulnérabilités](features/0011-suivi-des-vulnerabilites.md) | Moyenne | Backlog |
| #12 | [Intégration continue](features/0012-integration-continue.md) | Haute | Backlog |
| #13 | [Déploiement continu](features/0013-deploiement-continu.md) | Haute | Backlog |
| #14 | [Exploitation](features/0014-exploitation.md) | Moyenne | Backlog |
