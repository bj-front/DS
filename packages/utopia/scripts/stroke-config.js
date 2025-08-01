// Configuration pour l'épaisseur des lignes des icônes
export const STROKE_CONFIG = {
  // Mode d'augmentation : 'multiply' ou 'add'
  mode: 'add',

  // Valeur à ajouter (si mode = 'add')
  addValue: 0.5,

  // Multiplicateur (si mode = 'multiply')
  multiplier: 1.25,

  // Règles spécifiques par valeur
  customRules: {
    1: 1.5,    // stroke-width="1" devient "1.5"
    1.5: 2,    // stroke-width="1.5" devient "2"
    2: 2.5,    // stroke-width="2" devient "2.5"
    3: 3.5     // stroke-width="3" devient "3.5"
  }
}

// OPTIONS PRÉDÉFINIES (décommentez pour utiliser)

// Option 1: Augmentation très légère (+0.25)
// export const STROKE_CONFIG = {
//   mode: 'add',
//   addValue: 0.25,
//   customRules: {
//     1: 1.25,
//     2: 2.25,
//     3: 3.25
//   }
// }

// Option 2: Augmentation plus marquée (+0.75)
// export const STROKE_CONFIG = {
//   mode: 'add',
//   addValue: 0.75,
//   customRules: {
//     1: 1.75,
//     2: 2.75,
//     3: 3.75
//   }
// }

// Option 3: Multiplication (×1.3)
// export const STROKE_CONFIG = {
//   mode: 'multiply',
//   multiplier: 1.3,
//   customRules: {}
// }
