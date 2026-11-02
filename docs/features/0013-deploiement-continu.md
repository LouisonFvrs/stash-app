# 13 – Déploiement continu

## Besoin

> En tant que développeur, je veux que l'application soit déployée automatiquement en recette puis en production afin de livrer sans manipulation manuelle ni oubli.

| Élément | Valeur |
| --- | --- |
| Issue | #13 |
| Priorité | Haute (proposition) |
| Reformulation validée par | Louison Feuvrais, le |
| Vue d'ensemble | [Vue d'ensemble](../vue-d-ensemble.md) |

## Spécification

### Acteurs et droits

| Action | Développeur |
| --- | --- |
| Déclencher un déploiement en recette, par la fusion sur `develop` | ✅ |
| Déclencher un déploiement en production, par un tag de version | ✅ |
| Revenir à une version précédente | ✅ |
| Déployer à la main en copiant des fichiers sur le serveur | ❌ |

Systèmes externes : GitHub Actions exécute le déploiement ; le registre d'images GitHub (GHCR) conserve les versions de l'application ; le serveur héberge la recette et la production.

### Cas d'utilisation

*Insérer ici l'image du diagramme de cas d'utilisation.*

### Règles de gestion

| N° | Règle de gestion | Description |
| --- | --- | --- |
| RG-13-01 | Déploiement en recette | Chaque fusion sur `develop` dont la vérification (#12) a réussi construit l'application, publie ses images dans le registre et la déploie en recette |
| RG-13-02 | Déploiement en production | Chaque tag `vX.Y.Z` posé sur `main` construit l'application, publie ses images et la déploie en production |
| RG-13-03 | Versions identifiées | Une image de production porte le numéro de version du tag ; une image de recette porte l'identifiant du commit |
| RG-13-04 | Rien n'est construit sur le serveur | Le serveur ne fait que récupérer et lancer des images déjà construites et publiées |
| RG-13-05 | Environnements séparés | La recette et la production ont chacune leur adresse et leurs données ; un déploiement en recette ne touche jamais la production |
| RG-13-06 | Secrets protégés | Aucun mot de passe ni clé n'est écrit dans le dépôt : ils sont conservés dans les secrets de GitHub et sur le serveur |
| RG-13-07 | Contrôle après déploiement | Après chaque déploiement, l'application est interrogée ; si elle ne répond pas correctement en 2 minutes, le déploiement est signalé en échec et la version précédente est remise en service *(délai : hypothèse, à confirmer)* |
| RG-13-08 | Retour arrière | Une version précédente peut être redéployée en production à partir de son numéro, sans reconstruire |
| RG-13-09 | Évolution du schéma de données | Les évolutions de la structure des données nécessaires à une version sont appliquées automatiquement au démarrage, sans perte de données |
| RG-13-10 | Tests de bout en bout | Après chaque déploiement en recette, les parcours principaux (connexion, ajout, recherche) sont testés sur la recette ; un échec est signalé *(hypothèse, à confirmer)* |
| RG-13-11 | Documentation du déploiement | Une procédure décrit l'installation du serveur, les variables de configuration, le déploiement, le retour arrière et la restauration ; elle est mise à jour à chaque changement du processus |
| RG-13-12 | Notes de version | Chaque version de production a ses notes dans le `CHANGELOG.md` |

### Critères d'acceptation

| N° | RG couvertes | Scénario nominal | Scénario alternatif |
| --- | --- | --- | --- |
| CA-13-01 | RG-13-01, RG-13-03 | Une PR est fusionnée sur `develop` : quelques minutes plus tard, la recette affiche la nouvelle version, dont l'image porte l'identifiant du commit | La vérification de `develop` échoue après la fusion : rien n'est déployé, la recette garde sa version |
| CA-13-02 | RG-13-02, RG-13-03 | Le tag `v1.0.0` est posé sur `main` : la production affiche la version 1.0.0 | Un tag `essai` qui ne respecte pas le format `vX.Y.Z` ne déclenche aucun déploiement |
| CA-13-03 | RG-13-04, RG-13-06 | Le journal du déploiement montre que le serveur récupère l'image depuis le registre | Une recherche de mots de passe dans le dépôt et son historique ne trouve aucun secret |
| CA-13-04 | RG-13-05 | Une ressource ajoutée en recette n'apparaît pas en production | Un déploiement en recette laisse la production en service, avec la même version |
| CA-13-05 | RG-13-07 | L'application déployée répond : le déploiement est signalé réussi | Une version qui ne démarre pas est déployée : le déploiement est signalé en échec et la version précédente répond de nouveau |
| CA-13-06 | RG-13-08 | La version 1.1.0 pose problème : le redéploiement de la 1.0.0 la remet en production sans nouvelle construction | La version demandée n'existe pas dans le registre : le retour arrière est refusé avec un message clair, la production ne change pas |
| CA-13-07 | RG-13-09 | Une version qui ajoute un champ démarre et les ressources existantes restent lisibles | Une évolution des données échoue : l'application ne démarre pas et le contrôle de RG-13-07 remet la version précédente |
| CA-13-08 | RG-13-10 | Après un déploiement en recette, les tests de bout en bout réussissent | Un parcours est cassé : le test en échec est signalé, avec une capture de l'écran fautif |
| CA-13-09 | RG-13-11, RG-13-12 | En suivant seulement la procédure, un serveur vierge est installé et la production démarre | La version 1.1.0 est taguée sans entrée dans le `CHANGELOG.md` : l'oubli est repéré à la relecture de la PR de livraison |

### Hors périmètre

- Le déploiement sans aucune coupure de service (bascule entre deux instances)
- Plusieurs serveurs, l'équilibrage de charge, Kubernetes
- Le déploiement automatique en production sans tag
- La supervision et les sauvegardes, traitées dans #14

### Questions ouvertes

| Question | Bloquante | Réponse |
| --- | --- | --- |
| Quel hébergement : un VPS (Hetzner, OVH…, environ 4 à 6 € par mois) ou une plateforme gratuite ? | Oui | |
| Quel nom de domaine pour la recette et la production ? | Oui | |
| La recette et la production sont-elles sur le même serveur ? | Non | |

## Conception

*À compléter à l'étape de conception.*

## Endpoints

*Sans objet.*

## Validation

*À compléter après le merge.*
