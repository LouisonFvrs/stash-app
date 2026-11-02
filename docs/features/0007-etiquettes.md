# 7 – Étiquettes

## Besoin

> En tant qu'utilisateur, je veux étiqueter mes ressources, avec des suggestions tirées de mes étiquettes existantes, afin de les classer par sujet sans créer de doublons.

| Élément | Valeur |
| --- | --- |
| Issue | #7 |
| Priorité | Moyenne (proposition) |
| Reformulation validée par | Louison Feuvrais, le |
| Vue d'ensemble | [Vue d'ensemble](../vue-d-ensemble.md) |

## Spécification

### Acteurs et droits

| Action | Visiteur | Utilisateur |
| --- | --- | --- |
| Ajouter ou retirer une étiquette sur une de ses ressources | ❌ | ✅ |
| Voir les suggestions tirées de ses étiquettes | ❌ | ✅ |
| Voir les étiquettes d'un autre utilisateur | ❌ | ❌ |

### Cas d'utilisation

*Insérer ici l'image du diagramme de cas d'utilisation.*

### Règles de gestion

| N° | Règle de gestion | Description |
| --- | --- | --- |
| RG-7-01 | Étiquettes facultatives | Une ressource a de 0 à 10 étiquettes *(maximum : hypothèse, à confirmer)* |
| RG-7-02 | Saisie à l'ajout et à la modification | Les étiquettes se saisissent sur le formulaire d'ajout (#4) et de modification (#6) |
| RG-7-03 | Format normalisé | Une étiquette est enregistrée en minuscules, sans espace au début ni à la fin, les espaces intérieurs remplacés par un tiret ; elle compte de 1 à 30 caractères *(hypothèse, à confirmer)* |
| RG-7-04 | Pas de doublon | Une ressource ne porte pas deux fois la même étiquette, une fois normalisée |
| RG-7-05 | Suggestions | Dès le premier caractère saisi, au plus 10 étiquettes de l'utilisateur commençant par ce texte sont suggérées, de la plus utilisée à la moins utilisée |
| RG-7-06 | Nouvelle étiquette | Une étiquette absente des suggestions est créée en la validant |
| RG-7-07 | Étiquettes vivantes | Une étiquette qui n'est plus portée par aucune ressource n'est plus suggérée |

### Critères d'acceptation

| N° | RG couvertes | Scénario nominal | Scénario alternatif |
| --- | --- | --- | --- |
| CA-7-01 | RG-7-01, RG-7-02 | Une ressource est enregistrée avec 2 étiquettes, puis une 3ᵉ est ajoutée en modification | Une 11ᵉ étiquette est refusée avec le message « 10 étiquettes au maximum » ; une ressource sans étiquette est acceptée |
| CA-7-02 | RG-7-03, RG-7-04 | La saisie ` Spring Boot ` est enregistrée sous la forme `spring-boot` | `Angular` est ajoutée à une ressource qui porte déjà `angular` : elle n'est pas ajoutée une deuxième fois |
| CA-7-03 | RG-7-05 | L'utilisateur a les étiquettes `angular` (8 ressources) et `api` (3) : la saisie de `a` propose `angular` puis `api` | La saisie de `zz` ne correspond à rien : aucune suggestion ne s'affiche, et la saisie peut être validée comme nouvelle étiquette |
| CA-7-04 | RG-7-06 | La saisie `mongodb`, absente, est validée : l'étiquette est créée et suggérée lors des saisies suivantes | Une étiquette de 31 caractères est refusée avec le message « 30 caractères au maximum » |
| CA-7-05 | RG-7-07 | L'étiquette `java` est retirée de sa dernière ressource : elle n'est plus suggérée | L'étiquette `java` est retirée d'une ressource mais reste sur une autre : elle est toujours suggérée |
| CA-7-06 | RG-7-05 | Les suggestions de A ne contiennent que ses étiquettes | B a une étiquette `kotlin` que A n'a pas : la saisie de `k` par A ne la propose pas |

### Hors périmètre

- La gestion centralisée des étiquettes : renommer ou fusionner une étiquette sur toutes les ressources
- Les couleurs d'étiquettes
- Les étiquettes partagées entre utilisateurs
- Le filtre par étiquette, traité dans #9

### Questions ouvertes

| Question | Bloquante | Réponse |
| --- | --- | --- |
| Faut-il pouvoir renommer une étiquette sur toutes ses ressources d'un coup ? | Non | |

## Conception

*À compléter à l'étape de conception.*

## Endpoints

*À compléter à l'étape de conception.*

## Validation

*À compléter après le merge.*
