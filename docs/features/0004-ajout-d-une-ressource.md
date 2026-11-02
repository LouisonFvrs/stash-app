# 4 – Ajout d'une ressource

## Besoin

> En tant qu'utilisateur, je veux enregistrer un lien avec son type, en récupérant automatiquement son titre, sa description et son image, afin de ne plus perdre ce que je trouve d'intéressant et de l'ajouter en quelques secondes.

| Élément | Valeur |
| --- | --- |
| Issue | #4 |
| Priorité | Haute (proposition) |
| Reformulation validée par | Louison Feuvrais, le |
| Vue d'ensemble | [Vue d'ensemble](../vue-d-ensemble.md) |

## Spécification

### Acteurs et droits

| Action | Visiteur | Utilisateur |
| --- | --- | --- |
| Ajouter une ressource | ❌ | ✅ |
| Récupérer automatiquement les informations d'un lien | ❌ | ✅ |

Le site distant pointé par le lien intervient comme système externe : il fournit le titre, la description et l'image de la page.

### Cas d'utilisation

*Insérer ici l'image du diagramme de cas d'utilisation.*

### Règles de gestion

| N° | Règle de gestion | Description |
| --- | --- | --- |
| RG-4-01 | Lien obligatoire et valide | Une ressource a un lien, qui est une adresse web commençant par `http://` ou `https://` |
| RG-4-02 | Type obligatoire | Une ressource a un type parmi : article, vidéo, dépôt, vulnérabilité |
| RG-4-03 | Champs propres au type | Une vidéo peut avoir une durée ; un dépôt, un langage principal ; une vulnérabilité a une gravité obligatoire (faible, moyenne, élevée, critique), et peut avoir un identifiant CVE (format `CVE-AAAA-NNNN`, au moins 4 chiffres à la fin) et le nom de la bibliothèque concernée. Les articles n'ont pas de champ propre |
| RG-4-04 | Récupération automatique | À la saisie du lien, le titre, la description et l'image de la page sont récupérés et préremplis |
| RG-4-05 | Informations modifiables | Les informations récupérées peuvent être corrigées avant l'enregistrement |
| RG-4-06 | Titre obligatoire | Une ressource a un titre de 1 à 200 caractères ; la description est facultative (2 000 caractères au plus) *(longueurs : hypothèse, à confirmer)* |
| RG-4-07 | Échec sans blocage | Si la récupération échoue (site injoignable, réponse au-delà de 5 secondes, page sans informations), l'utilisateur est prévenu et peut saisir les informations lui-même *(délai : hypothèse, à confirmer)* |
| RG-4-08 | Pas de doublon | Un utilisateur ne peut pas enregistrer deux fois le même lien |
| RG-4-09 | Adresses publiques uniquement | La récupération ne consulte que des adresses publiques d'internet : une adresse du réseau local ou du serveur lui-même est refusée, pour qu'on ne puisse pas se servir de l'application pour sonder le serveur *(hypothèse, à confirmer)* |
| RG-4-10 | Valeurs initiales | À l'enregistrement, la date d'ajout est renseignée automatiquement et le statut de lecture est « À lire » (voir #8) |

### Critères d'acceptation

| N° | RG couvertes | Scénario nominal | Scénario alternatif |
| --- | --- | --- | --- |
| CA-4-01 | RG-4-01 | Le lien `https://angular.dev/guide/signals` est accepté | Le lien `angular signals` est refusé avec le message « Le lien doit être une adresse web valide » |
| CA-4-02 | RG-4-02 | L'utilisateur choisit le type « Vidéo » : la ressource est enregistrée avec ce type | Aucun type n'est choisi : l'enregistrement est refusé avec le message « Le type est obligatoire » |
| CA-4-03 | RG-4-03 | Le type « Vulnérabilité » est choisi : les champs gravité, identifiant CVE et bibliothèque apparaissent ; le type « Article » est choisi : aucun champ propre n'apparaît | Une vulnérabilité sans gravité, ou avec l'identifiant `CVE-24-1`, est refusée avec un message sur le champ en cause |
| CA-4-04 | RG-4-04, RG-4-05 | Le lien d'un article est saisi : titre, description et image sont préremplis, et le titre corrigé par l'utilisateur est celui enregistré | La page n'a pas d'image : titre et description sont préremplis, l'image reste vide |
| CA-4-05 | RG-4-06, RG-4-07 | La récupération réussit et le titre est rempli : l'enregistrement est accepté | Le site ne répond pas en 5 secondes : le message « Informations introuvables, saisissez-les vous-même » s'affiche ; sans titre saisi, l'enregistrement est refusé, avec un titre il est accepté |
| CA-4-06 | RG-4-08 | Un lien jamais enregistré par l'utilisateur est accepté, même s'il est déjà enregistré par un autre utilisateur | Un lien déjà enregistré par l'utilisateur est refusé avec le message « Ressource déjà enregistrée » et un lien vers la ressource existante |
| CA-4-07 | RG-4-09 | Une adresse publique est consultée normalement | L'adresse `http://localhost:8080` ou `http://192.168.1.10` n'est pas consultée : le message « Adresse non autorisée » s'affiche |
| CA-4-08 | RG-4-10 | Une ressource est enregistrée : elle porte la date du jour et le statut « À lire » | Une ressource enregistrée sans description ni image est acceptée, avec les mêmes valeurs initiales |

### Hors périmètre

- La récupération automatique de la durée d'une vidéo ou du langage d'un dépôt (par les API de YouTube ou de GitHub)
- L'archivage du contenu de la page
- L'ajout depuis une extension de navigateur ou par import de favoris
- Les étiquettes, traitées dans #7, même si elles se saisissent sur le même formulaire

### Questions ouvertes

| Question | Bloquante | Réponse |
| --- | --- | --- |
| Deux liens qui ne diffèrent que par `http` et `https`, une barre finale ou des paramètres de suivi (`?utm_source=…`) sont-ils le même lien pour la règle des doublons ? | Non | |
| Le type doit-il être deviné à partir du lien (YouTube : vidéo, GitHub : dépôt) ? | Non | |

## Conception

*À compléter à l'étape de conception.*

## Endpoints

*À compléter à l'étape de conception.*

## Validation

*À compléter après le merge.*
