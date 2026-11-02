# 9 – Recherche et filtres

## Besoin

> En tant qu'utilisateur, je veux rechercher dans mes ressources et mes notes, et les filtrer, afin de retrouver rapidement une ressource vue il y a longtemps.

| Élément | Valeur |
| --- | --- |
| Issue | #9 |
| Priorité | Moyenne (proposition) |
| Reformulation validée par | Louison Feuvrais, le |
| Vue d'ensemble | [Vue d'ensemble](../vue-d-ensemble.md) |

## Spécification

### Acteurs et droits

| Action | Visiteur | Utilisateur |
| --- | --- | --- |
| Rechercher dans ses ressources | ❌ | ✅ |
| Filtrer ses ressources | ❌ | ✅ |

### Cas d'utilisation

*Insérer ici l'image du diagramme de cas d'utilisation.*

### Règles de gestion

| N° | Règle de gestion | Description |
| --- | --- | --- |
| RG-9-01 | Champs recherchés | La recherche porte sur le titre, la description et les notes personnelles |
| RG-9-02 | Recherche tolérante | La recherche ne tient compte ni de la casse ni des accents |
| RG-9-03 | Ordre des résultats | Les résultats d'une recherche sont triés par pertinence, puis du plus récent au plus ancien ; sans texte recherché, l'ordre de la liste s'applique (RG-5-02) *(hypothèse, à confirmer)* |
| RG-9-04 | Filtres | La liste se filtre par étiquette, par type et par statut de lecture |
| RG-9-05 | Plusieurs étiquettes | Avec plusieurs étiquettes choisies, seules les ressources qui les portent toutes sont affichées *(hypothèse, à confirmer)* |
| RG-9-06 | Combinaison | Les filtres se combinent entre eux et avec la recherche |
| RG-9-07 | Ses ressources uniquement | La recherche et les filtres ne portent que sur les ressources de l'utilisateur connecté (voir RG-3-05) |
| RG-9-08 | Aucun résultat | Sans résultat, un message l'indique et propose de réinitialiser la recherche et les filtres |
| RG-9-09 | Critères conservés | La recherche et les filtres sont conservés quand la page est rafraîchie ou quand on revient du détail d'une ressource |

### Critères d'acceptation

| N° | RG couvertes | Scénario nominal | Scénario alternatif |
| --- | --- | --- | --- |
| CA-9-01 | RG-9-01 | La recherche `signals` trouve une ressource dont seules les notes personnelles contiennent ce mot | La recherche `signals` ne trouve pas une ressource qui ne porte ce mot que dans son étiquette |
| CA-9-02 | RG-9-02 | La recherche `securite` trouve la ressource titrée « Sécurité des API » | La recherche `SÉCURITÉ` trouve la même ressource |
| CA-9-03 | RG-9-03 | Une ressource avec `mongodb` dans le titre s'affiche avant une ressource qui ne le contient que dans ses notes | La recherche est vidée : la liste reprend l'ordre par date d'ajout |
| CA-9-04 | RG-9-04, RG-9-05 | Le filtre « Vidéo » et « À lire » affiche seulement les vidéos à lire | Les étiquettes `angular` et `tests` sont choisies : une ressource qui ne porte que `angular` n'est pas affichée |
| CA-9-05 | RG-9-06 | La recherche `jwt` avec le filtre « Article » affiche les articles qui contiennent `jwt` | Une recherche et un filtre qui n'ont aucune ressource en commun affichent le message de RG-9-08 |
| CA-9-06 | RG-9-07 | La recherche de A ne renvoie que des ressources de A | B a une ressource titrée « Kotlin » : la recherche `kotlin` de A ne la renvoie pas |
| CA-9-07 | RG-9-08 | Le bouton « Réinitialiser » vide la recherche et les filtres et affiche toute la liste | La recherche `zzz` sans filtre affiche le message « Aucune ressource ne correspond » |
| CA-9-08 | RG-9-09 | Avec la recherche `spring` et le filtre « Lu », la page est rafraîchie : les mêmes résultats s'affichent | L'utilisateur ouvre le détail d'un résultat puis revient : la recherche et les filtres sont toujours appliqués |

### Hors périmètre

- La recherche dans le contenu des pages pointées par les liens
- La tolérance aux fautes de frappe
- L'enregistrement de recherches favorites
- La recherche par étiquette en texte libre : les étiquettes se filtrent, elles ne se recherchent pas

### Questions ouvertes

| Question | Bloquante | Réponse |
| --- | --- | --- |
| Avec plusieurs étiquettes, faut-il afficher les ressources qui les portent toutes (hypothèse retenue) ou au moins l'une d'elles ? | Non | |
| La recherche doit-elle aussi porter sur les étiquettes ? | Non | |

## Conception

*À compléter à l'étape de conception.*

## Endpoints

*À compléter à l'étape de conception.*

## Validation

*À compléter après le merge.*
