# 10 – Tableau de bord

## Besoin

> En tant qu'utilisateur, je veux voir des statistiques sur ma veille afin de mesurer ma régularité et les sujets que je suis le plus.

| Élément | Valeur |
| --- | --- |
| Issue | #10 |
| Priorité | Moyenne (proposition) |
| Reformulation validée par | Louison Feuvrais, le |
| Vue d'ensemble | [Vue d'ensemble](../vue-d-ensemble.md) |

## Spécification

### Acteurs et droits

| Action | Visiteur | Utilisateur |
| --- | --- | --- |
| Consulter son tableau de bord | ❌ | ✅ |

### Cas d'utilisation

*Insérer ici l'image du diagramme de cas d'utilisation.*

### Règles de gestion

| N° | Règle de gestion | Description |
| --- | --- | --- |
| RG-10-01 | Chiffres clés | Le tableau de bord affiche le nombre total de ressources, le nombre à lire et le nombre lues dans le mois en cours |
| RG-10-02 | Lectures par semaine | Un graphique montre le nombre de ressources passées à « Lu » chaque semaine, sur les 12 dernières semaines, une semaine allant du lundi au dimanche ; une semaine sans lecture vaut 0 *(durée : hypothèse, à confirmer)* |
| RG-10-03 | Répartition par étiquette | Un graphique montre les 10 étiquettes les plus portées, les autres étant regroupées sous « Autres » |
| RG-10-04 | Répartition par type | Un graphique montre le nombre de ressources de chaque type |
| RG-10-05 | Vulnérabilités en attente | Le tableau de bord affiche le nombre de vulnérabilités « À analyser », par gravité, avec un lien vers le suivi des vulnérabilités (#11) |
| RG-10-06 | Données à jour et cloisonnées | Les statistiques portent sur les seules ressources de l'utilisateur connecté et sont à jour à chaque affichage |
| RG-10-07 | Tableau de bord vide | Sans aucune ressource, un message invite à ajouter la première, au lieu de graphiques vides |

### Critères d'acceptation

| N° | RG couvertes | Scénario nominal | Scénario alternatif |
| --- | --- | --- | --- |
| CA-10-01 | RG-10-01 | 30 ressources, dont 12 à lire et 4 lues ce mois : les chiffres 30, 12 et 4 s'affichent | Une ressource lue le mois dernier n'est pas comptée dans les lues du mois |
| CA-10-02 | RG-10-02 | 3 ressources lues le lundi et 2 le dimanche de la même semaine : cette semaine compte 5 lectures | Aucune lecture depuis 3 semaines : ces 3 semaines apparaissent à 0 ; une lecture d'il y a 13 semaines n'apparaît pas |
| CA-10-03 | RG-10-03 | 14 étiquettes utilisées : les 10 plus portées s'affichent, les 4 autres sont regroupées sous « Autres » | 3 étiquettes seulement : elles s'affichent toutes, sans « Autres » |
| CA-10-04 | RG-10-04 | 10 articles, 5 vidéos, 2 dépôts : la répartition affiche ces trois nombres | Aucune vulnérabilité : le type « Vulnérabilité » n'apparaît pas, ou à 0 |
| CA-10-05 | RG-10-05 | 1 vulnérabilité critique et 2 élevées à analyser : le détail par gravité s'affiche, et le lien ouvre le suivi des vulnérabilités | Toutes les vulnérabilités sont traitées : le message « Aucune vulnérabilité en attente » s'affiche |
| CA-10-06 | RG-10-06 | Une ressource est passée à « Lu » : au retour sur le tableau de bord, elle est comptée | Les ressources de B ne sont pas comptées dans le tableau de bord de A |
| CA-10-07 | RG-10-07 | L'utilisateur ajoute sa première ressource : les statistiques s'affichent | Aucune ressource : le message « Ajoutez des ressources pour voir vos statistiques » s'affiche |

### Hors périmètre

- Le choix de la période affichée
- L'export des statistiques
- Les objectifs de lecture (par exemple 5 ressources par semaine)

### Questions ouvertes

| Question | Bloquante | Réponse |
| --- | --- | --- |
| Faut-il pouvoir changer la période des lectures par semaine (4, 12 ou 52 semaines) ? | Non | |

## Conception

*À compléter à l'étape de conception.*

## Endpoints

*À compléter à l'étape de conception.*

## Validation

*À compléter après le merge.*
