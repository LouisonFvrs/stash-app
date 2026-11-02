# 11 – Suivi des vulnérabilités

## Besoin

> En tant qu'utilisateur, je veux suivre les vulnérabilités que j'ai repérées et savoir si elles sont traitées dans mes projets afin de n'en laisser aucune de côté.

| Élément | Valeur |
| --- | --- |
| Issue | #11 |
| Priorité | Moyenne (proposition) |
| Reformulation validée par | Louison Feuvrais, le |
| Vue d'ensemble | [Vue d'ensemble](../vue-d-ensemble.md) |

## Spécification

### Acteurs et droits

| Action | Visiteur | Utilisateur |
| --- | --- | --- |
| Consulter la liste de ses vulnérabilités | ❌ | ✅ |
| Changer le statut de traitement d'une vulnérabilité | ❌ | ✅ |

Une vulnérabilité est une ressource de type « vulnérabilité », créée par l'ajout (#4).

### Cas d'utilisation

*Insérer ici l'image du diagramme de cas d'utilisation.*

### Règles de gestion

| N° | Règle de gestion | Description |
| --- | --- | --- |
| RG-11-01 | Vue dédiée | Une page liste les seules ressources de type vulnérabilité de l'utilisateur, avec leur gravité, leur identifiant CVE, la bibliothèque concernée et leur statut de traitement |
| RG-11-02 | Statuts de traitement | Une vulnérabilité a un statut de traitement parmi : À analyser, Corrigée, Non concernée ; il vaut « À analyser » à l'ajout |
| RG-11-03 | Indépendant de la lecture | Le statut de traitement est distinct du statut de lecture (#8) : une vulnérabilité lue peut rester à analyser |
| RG-11-04 | Tri | La liste est triée par gravité décroissante (critique, élevée, moyenne, faible), puis de la plus récente à la plus ancienne |
| RG-11-05 | Filtres | La liste se filtre par statut de traitement et par gravité ; par défaut, elle affiche les vulnérabilités « À analyser » *(hypothèse, à confirmer)* |
| RG-11-06 | Trace du traitement | Le passage à « Corrigée » ou « Non concernée » enregistre la date de traitement et accepte un commentaire facultatif (projets vérifiés, version corrigée), de 1 000 caractères au plus ; un retour à « À analyser » efface la date |

### Critères d'acceptation

| N° | RG couvertes | Scénario nominal | Scénario alternatif |
| --- | --- | --- | --- |
| CA-11-01 | RG-11-01 | L'utilisateur a 2 vulnérabilités et 5 articles : la page affiche les 2 vulnérabilités avec leurs informations | Aucune vulnérabilité : le message « Aucune vulnérabilité suivie » s'affiche |
| CA-11-02 | RG-11-02 | Une vulnérabilité ajoutée est « À analyser » | Une ressource d'un autre type n'a pas de statut de traitement et n'apparaît pas sur la page |
| CA-11-03 | RG-11-03 | Une vulnérabilité passe à « Lu » : son statut de traitement reste « À analyser » | Une vulnérabilité passe à « Corrigée » : son statut de lecture ne change pas |
| CA-11-04 | RG-11-04 | Une vulnérabilité critique ajoutée hier s'affiche avant une vulnérabilité moyenne ajoutée aujourd'hui | Deux vulnérabilités critiques s'affichent de la plus récente à la plus ancienne |
| CA-11-05 | RG-11-05 | À l'ouverture, seules les vulnérabilités « À analyser » s'affichent ; le filtre « Critique » ne garde que les critiques | Le filtre « Corrigée » sans vulnérabilité corrigée affiche le message « Aucune vulnérabilité ne correspond » |
| CA-11-06 | RG-11-06 | Le 20, une vulnérabilité passe à « Corrigée » avec le commentaire « stash 1.2.0 » : la date du 20 et le commentaire s'affichent | Elle repasse à « À analyser » : la date de traitement est effacée ; un commentaire de 1 001 caractères est refusé |

### Hors périmètre

- L'import automatique de vulnérabilités depuis une base publique (NVD, GitHub Advisories)
- Les alertes sur les nouvelles vulnérabilités
- L'analyse automatique des dépendances de ses projets
- Une liste structurée des projets de l'utilisateur

### Questions ouvertes

| Question | Bloquante | Réponse |
| --- | --- | --- |
| Faut-il rattacher une vulnérabilité à une liste de projets (« corrigée dans stash, à faire dans etix »), plutôt qu'à un commentaire libre ? | Non | |

## Conception

*À compléter à l'étape de conception.*

## Endpoints

*À compléter à l'étape de conception.*

## Validation

*À compléter après le merge.*
