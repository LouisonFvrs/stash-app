## Issue liée

Refs #

## Résumé

<!-- Ce que fait cette PR, en 2-3 phrases. -->

## Choix techniques

<!-- Les décisions notables et leur justification. Renvoyer vers le document de feature si elles y sont déjà documentées. -->

## Comment tester

<!-- Les scénarios des critères d'acceptation à rejouer (CA-01, CA-02…), avec les éventuelles données de test. -->

## Captures d'écran

<!-- Si la PR modifie l'interface. Sinon, supprimer cette section. -->

## Évolutions des données

<!-- Les migrations de données ajoutées (nouveaux champs, index, collections), ou "Aucune". -->

---

## Definition of Done — avant le merge

### Code
- [ ] Le code respecte l'organisation feature-first et les conventions de code
- [ ] Les commits respectent les conventions et référencent l'issue
- [ ] Aucun secret en dur dans le code, et le `.env.example` est à jour si une variable a été ajoutée

### Tests
- [ ] Le plan de test est établi à partir des critères d'acceptation
- [ ] Chaque critère d'acceptation est couvert par au moins un test (scénario nominal et alternatif)
- [ ] Tous les tests passent en local

### Revue et intégration
- [ ] La revue est faite avec la checklist de revue
- [ ] Les endpoints implémentés correspondent à la documentation du document de feature
- [ ] La pipeline est au vert (build, tests, analyse, QA)
- [ ] Le Dockerfile respecte les conventions, s'il a été modifié

## Après le merge (rappel)

- [ ] J'ai validé la feature déployée en rejouant les scénarios des critères d'acceptation
- [ ] Le document de feature est mis à jour avec la feature validée
- [ ] L'issue est fermée manuellement et la carte est dans la colonne Terminé
