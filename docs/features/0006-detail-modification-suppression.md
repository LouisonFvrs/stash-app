# 6 – Détail, modification et suppression

## Besoin

> En tant qu'utilisateur, je veux consulter, corriger ou supprimer une ressource afin de garder une veille juste et à jour.

| Élément | Valeur |
| --- | --- |
| Issue | #6 |
| Priorité | Haute (proposition) |
| Reformulation validée par | Louison Feuvrais, le |
| Vue d'ensemble | [Vue d'ensemble](../vue-d-ensemble.md) |

## Spécification

### Acteurs et droits

| Action | Visiteur | Utilisateur |
| --- | --- | --- |
| Consulter le détail d'une de ses ressources | ❌ | ✅ |
| Modifier une de ses ressources | ❌ | ✅ |
| Supprimer une de ses ressources | ❌ | ✅ |

Le contrôle d'accès aux ressources d'un autre utilisateur est traité par RG-3-05.

### Cas d'utilisation

*Insérer ici l'image du diagramme de cas d'utilisation.*

### Règles de gestion

| N° | Règle de gestion | Description |
| --- | --- | --- |
| RG-6-01 | Contenu du détail | Le détail affiche toutes les informations de la ressource : lien, titre, description, image, type et champs propres au type, étiquettes, statut de lecture, note, notes personnelles, dates d'ajout et de dernière modification |
| RG-6-02 | Ouverture du lien | Le lien de la ressource s'ouvre dans un nouvel onglet |
| RG-6-03 | Mêmes règles qu'à l'ajout | Une modification respecte les règles de l'ajout : lien valide, type, champs propres au type, titre, doublon (RG-4-01, 02, 03, 06, 08 et 09) |
| RG-6-04 | Changement de type | Quand le type change, les champs propres à l'ancien type sont effacés *(hypothèse, à confirmer)* |
| RG-6-05 | Date de modification | Toute modification enregistrée met à jour la date de dernière modification ; la date d'ajout ne change jamais |
| RG-6-06 | Suppression confirmée | Une suppression demande une confirmation |
| RG-6-07 | Suppression définitive | Une ressource supprimée disparaît définitivement, de la liste, de la recherche et des statistiques *(hypothèse, à confirmer : pas de corbeille)* |

### Critères d'acceptation

| N° | RG couvertes | Scénario nominal | Scénario alternatif |
| --- | --- | --- | --- |
| CA-6-01 | RG-6-01, RG-6-02 | Une vulnérabilité complète affiche toutes ses informations, dont sa gravité, et le lien s'ouvre dans un nouvel onglet | Une ressource jamais modifiée affiche seulement sa date d'ajout |
| CA-6-02 | RG-6-03 | Le titre est corrigé : la modification est enregistrée | Le titre est vidé, ou le lien remplacé par celui d'une autre ressource de l'utilisateur : la modification est refusée avec le même message qu'à l'ajout |
| CA-6-03 | RG-6-04 | Une vidéo de 12 minutes devient un article : la durée est effacée | Une vidéo devient une vulnérabilité sans gravité saisie : la modification est refusée tant que la gravité est vide |
| CA-6-04 | RG-6-05 | Une ressource ajoutée le 1ᵉʳ est modifiée le 10 : date d'ajout le 1ᵉʳ, dernière modification le 10 | L'utilisateur ouvre la modification puis annule : aucune date ne change |
| CA-6-05 | RG-6-06, RG-6-07 | L'utilisateur confirme la suppression : la ressource disparaît de la liste, de la recherche et du tableau de bord | L'utilisateur annule la confirmation : la ressource est conservée, inchangée |

### Hors périmètre

- Une corbeille ou l'annulation d'une suppression
- L'historique des modifications
- La modification ou la suppression de plusieurs ressources à la fois

### Questions ouvertes

| Question | Bloquante | Réponse |
| --- | --- | --- |
| Quand le lien est modifié, faut-il relancer la récupération automatique des informations ? | Non | |
| Une corbeille est-elle utile, pour récupérer une ressource supprimée par erreur ? | Non | |

## Conception

*À compléter à l'étape de conception.*

## Endpoints

*À compléter à l'étape de conception.*

## Validation

*À compléter après le merge.*
