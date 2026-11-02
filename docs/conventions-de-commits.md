# Conventions de commits

Les commits suivent la convention **Conventional Commits** et sont rédigés en français. La pipeline refuse toute PR dont un commit ne respecte pas ce format.

```
<type>(<portée>): <description> (#<issue>)
```

Exemple : `feat(clients): ajoute l'export CSV de la liste des clients (#12)`

| Type | Usage |
| --- | --- |
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `refactor` | Modification du code sans changement de comportement |
| `test` | Ajout ou modification de tests |
| `docs` | Documentation uniquement |
| `style` | Mise en forme sans impact sur le code |
| `chore` | Maintenance : dépendances, configuration |
| `ci` | Pipeline et intégration continue |
| `build` | Build, Docker, migrations |

## Règles

- La **portée** est obligatoire et correspond au module de la feature (`clients`, `auth`, `zendesk`).
- La **description** est à l'impératif, en minuscule, sans point final, en moins de 100 caractères.
- Le **numéro d'issue** est toujours présent en fin de ligne.
- **Un commit = un changement cohérent** : on ne mélange pas une feature et une correction sans rapport.
- Un changement qui casse la compatibilité est signalé par un `!` : `feat(api)!: renomme l'endpoint d'export (#15)`.
