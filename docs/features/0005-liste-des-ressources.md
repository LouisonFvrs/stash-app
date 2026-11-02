# 5 – Liste des ressources

## Besoin

> En tant qu'utilisateur, je veux voir mes ressources sous forme de cartes, des plus récentes aux plus anciennes, afin de parcourir ma veille d'un coup d'œil.

| Élément | Valeur |
| --- | --- |
| Issue | #5 |
| Priorité | Haute (proposition) |
| Reformulation validée par | Louison Feuvrais, le |
| Vue d'ensemble | [Vue d'ensemble](../vue-d-ensemble.md) |

## Spécification

### Acteurs et droits

| Action | Visiteur | Utilisateur |
| --- | --- | --- |
| Consulter la liste de ses ressources | ❌ | ✅ |

### Cas d'utilisation

*Insérer ici l'image du diagramme de cas d'utilisation.*

### Règles de gestion

| N° | Règle de gestion | Description |
| --- | --- | --- |
| RG-5-01 | Ses ressources uniquement | La liste ne contient que les ressources de l'utilisateur connecté (voir RG-3-05) |
| RG-5-02 | Tri par date d'ajout | Les ressources sont triées de la plus récente à la plus ancienne |
| RG-5-03 | Pagination | La liste affiche 20 ressources par page *(hypothèse, à confirmer)* |
| RG-5-04 | Contenu d'une carte | Une carte affiche le titre, l'image, le type, les étiquettes, le statut de lecture et la date d'ajout ; un clic ouvre le détail (#6) |
| RG-5-05 | Image par défaut | Une ressource sans image affiche une illustration propre à son type |
| RG-5-06 | Liste vide | Sans aucune ressource, la liste affiche un message qui invite à ajouter la première |

### Critères d'acceptation

| N° | RG couvertes | Scénario nominal | Scénario alternatif |
| --- | --- | --- | --- |
| CA-5-01 | RG-5-01 | L'utilisateur A a 3 ressources, B en a 5 : A voit ses 3 ressources | A n'a aucune ressource, B en a 5 : A voit la liste vide |
| CA-5-02 | RG-5-02 | Trois ressources ajoutées le 1ᵉʳ, le 5 et le 3 s'affichent dans l'ordre 5, 3, 1ᵉʳ | Deux ressources ajoutées le même jour s'affichent de la plus récente à la plus ancienne selon l'heure d'ajout |
| CA-5-03 | RG-5-03 | 45 ressources : 3 pages, de 20, 20 et 5 ressources | Exactement 20 ressources : une seule page, sans bouton « page suivante » |
| CA-5-04 | RG-5-04, RG-5-05 | Une ressource complète affiche toutes ses informations, et le clic ouvre son détail | Une vidéo sans image ni étiquette affiche l'illustration des vidéos et aucune zone d'étiquettes vide |
| CA-5-05 | RG-5-06 | La première ressource ajoutée remplace le message de liste vide | Aucune ressource : le message « Votre veille est vide, ajoutez votre première ressource » s'affiche avec un bouton d'ajout |

### Hors périmètre

- La recherche et les filtres, traités dans #9
- Le choix d'un autre ordre de tri
- Une vue en liste compacte en plus des cartes

### Questions ouvertes

| Question | Bloquante | Réponse |
| --- | --- | --- |
| Faut-il pouvoir trier autrement (par titre, par note, par date de lecture) ? | Non | |

## Conception

*À compléter à l'étape de conception.*

## Endpoints

*À compléter à l'étape de conception.*

## Validation

*À compléter après le merge.*
