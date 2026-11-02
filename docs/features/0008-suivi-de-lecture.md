# 8 – Suivi de lecture

## Besoin

> En tant qu'utilisateur, je veux indiquer où j'en suis d'une ressource, la noter et y écrire ce que j'en retiens afin de savoir quoi lire et garder une trace de ce que j'ai appris.

| Élément | Valeur |
| --- | --- |
| Issue | #8 |
| Priorité | Moyenne (proposition) |
| Reformulation validée par | Louison Feuvrais, le |
| Vue d'ensemble | [Vue d'ensemble](../vue-d-ensemble.md) |

## Spécification

### Acteurs et droits

| Action | Visiteur | Utilisateur |
| --- | --- | --- |
| Changer le statut de lecture d'une de ses ressources | ❌ | ✅ |
| Noter une de ses ressources | ❌ | ✅ |
| Écrire des notes personnelles sur une de ses ressources | ❌ | ✅ |

### Cas d'utilisation

*Insérer ici l'image du diagramme de cas d'utilisation.*

### Règles de gestion

| N° | Règle de gestion | Description |
| --- | --- | --- |
| RG-8-01 | Statuts de lecture | Une ressource a un statut parmi : À lire, En cours, Lu ; il vaut « À lire » à l'ajout (RG-4-10) |
| RG-8-02 | Changement libre | On peut passer de n'importe quel statut à n'importe quel autre *(hypothèse, à confirmer)* |
| RG-8-03 | Changement rapide | Le statut se change depuis la carte de la liste comme depuis le détail |
| RG-8-04 | Date de lecture | Le passage au statut « Lu » enregistre la date de lecture ; quitter le statut « Lu » l'efface |
| RG-8-05 | Note sur 5 | Une ressource peut avoir une note entière de 1 à 5, facultative, modifiable et effaçable à tout moment |
| RG-8-06 | Notes personnelles | Une ressource peut avoir des notes personnelles en texte libre, de 5 000 caractères au plus *(hypothèse, à confirmer)* |

### Critères d'acceptation

| N° | RG couvertes | Scénario nominal | Scénario alternatif |
| --- | --- | --- | --- |
| CA-8-01 | RG-8-01, RG-8-02 | Une ressource passe de « À lire » à « En cours », puis à « Lu » | Une ressource « Lu » repasse directement à « À lire » : le changement est accepté |
| CA-8-02 | RG-8-03 | Le statut changé depuis une carte est affiché à jour sur la carte et dans le détail | Le statut changé depuis le détail est affiché à jour sur la carte au retour à la liste |
| CA-8-03 | RG-8-04 | Une ressource passe à « Lu » le 12 : sa date de lecture est le 12 | Elle repasse à « En cours » le 14 : sa date de lecture est effacée, et un nouveau passage à « Lu » le 15 enregistre le 15 |
| CA-8-04 | RG-8-05 | L'utilisateur donne 4 étoiles : la note 4 est enregistrée, puis effacée à sa demande | Une note de 0 ou de 6 est refusée |
| CA-8-05 | RG-8-06 | Des notes de 300 caractères sont enregistrées et affichées dans le détail avec leurs retours à la ligne | Des notes de 5 001 caractères sont refusées avec le message « 5 000 caractères au maximum » |

### Hors périmètre

- Les rappels de lecture
- L'estimation du temps de lecture
- La mise en forme des notes (gras, listes, code)
- Le partage des notes

### Questions ouvertes

| Question | Bloquante | Réponse |
| --- | --- | --- |
| Les notes personnelles doivent-elles accepter une mise en forme (Markdown), utile pour des extraits de code ? | Non | |
| La note sur 5 doit-elle être réservée aux ressources lues ? | Non | |

## Conception

*À compléter à l'étape de conception.*

## Endpoints

*À compléter à l'étape de conception.*

## Validation

*À compléter après le merge.*
