import colors from '../../assets/colors';

export const isBioorNot = (product) => {
  if (product.labels_tags[0] === 'en:organic') {
    return 'Produit Biologique';
  } else if (product.nutrient_levels === undefined) {
    return 'Pas de données ';
  } else if (product.brands_tags === 'clope') {
    return 'Fumer est très mauvais';
  } else {
    return 'Produit non Biologique';
  }
};

export const isBioorNotColor = (product) => {
  if (product.labels_tags[0] === 'en:organic') {
    return colors.green;
  } else if (product.labels_tags[0] === undefined) {
    return colors.black;
  } else if (product.brands_tags === 'clope') {
    return;
  } else {
    return colors.grey;
  }
};

export const TextProteine = (product) => {
  if (!product.nutriscore_data || !product) {
    return null;
  }
  if (product.nutriscore_data.proteins_value >= 10) {
    return 'Excellente quantité';
  } else if (product.nutriscore_data.proteins_value >= 5) {
    return 'Quantité moyenne';
  } else if (product.nutriscore_data.proteins_value <= 3) {
    return 'Faible quantité';
  } else if ((product.nutriscore_data.proteins_value = 0)) {
    return 'Protéines non présentes';
  } else {
    return 'Non renseigné';
  }
};
export const displayProteine = (product) => {
  if (
    !product.nutriscore_data ||
    !product ||
    !product.nutriscore_data.proteins_value
  ) {
    return '';
  }
  return product.nutriscore_data.proteins_value;
};

export const RatingProteineCircle = (product) => {
  if (
    !product.nutriscore_data ||
    !product ||
    !product.nutriscore_data.proteins_value
  ) {
    return null;
  }
  if (product.nutriscore_data.proteins_value >= 10) {
    return colors.green;
  } else if (product.nutriscore_data.proteins_value >= 5) {
    return colors.orange;
  } else if (product.nutriscore_data.proteins_value <= 3) {
    return colors.grey;
  } else {
    return colors.grey;
  }
};

export const FiberComment = (product) => {
  if (product.nutriments.fiber >= 4) {
    return 'Riche en fibres';
  } else if (product.nutriments.fiber >= 3) {
    return 'Quantités de fibres satisfaisante';
  } else if (product.nutriments.fiber >= 1) {
    return 'Quelques fibres';
  } else {
    return 'Fibres non présentes';
  }
};
export const RatingFiberCircle = (product) => {
  if (!product.nutriments || !product || !product.nutriments.fiber) {
    return null;
  }
  if (product.nutriments.fiber >= 4) {
    return colors.green;
  } else if (product.nutriments.fiber >= 3) {
    return colors.orange;
  } else if (product.nutriments.fiber >= 1) {
    return colors.red;
  } else {
    return colors.grey;
  }
};

export const calorieComment = (product) => {
  if (
    !product.nutriments ||
    !product ||
    !product.nutriments['energy-kcal_value']
  ) {
    return null;
  }
  if (product.nutriments['energy-kcal_value'] <= 800) {
    return 'Extrêmement Calorique';
  } else if (product.nutriments['energy-kcal_value'] <= 560) {
    return 'Très calorique';
  } else if (product.nutriments['energy-kcal_value'] <= 360) {
    return 'Riche en calorie';
  } else if (product.nutriments['energy-kcal_value'] <= 160) {
    return 'Peu calorique';
  } else {
    return 'Produit non enregistré';
  }
};
export const calorieCirclecolor = (product) => {
  if (
    !product.nutriments ||
    !product ||
    !product.nutriments['energy-kcal_value']
  ) {
    return null;
  }
  if (product.nutriments['energy-kcal_value'] <= 800) {
    return colors.red;
  } else if (product.nutriments['energy-kcal_value'] <= 560) {
    return colors.orange;
  } else if (product.nutriments['energy-kcal_value'] <= 360) {
    return colors.greenLight;
  } else if (product.nutriments['energy-kcal_value'] <= 160) {
    return colors.green;
  } else {
    return colors.grey;
  }
};

export const FatSatComment = (product) => {
  if (!product.nutriments || !product || !product.nutriments['saturated-fat']) {
    return null;
  }
  if (product.nutriments['saturated-fat'] >= 1) {
    return 'Peu de graisses saturées';
  } else if (product.nutriments['saturated-fat'] >= 10) {
    return 'Graisses saturées en quantité';
  } else if (product.nutriments['saturated-fat'] >= 20) {
    return 'Faible quantité';
  } else if (product.nutriments['saturated-fat'] >= 0) {
    return 'Très faible quantité ';
  } else if ((product.nutriments['saturated-fat'] = 0)) {
    return 'Non Présente ';
  } else {
    return ' non enregistré';
  }
};
export const FatSatCircle = (product) => {
  if (!product.nutriments || !product || !product.nutriments['saturated-fat']) {
    return null;
  }
  if (product.nutriments['saturated-fat'] >= 1) {
    return colors.green;
  } else if (product.nutriments['saturated-fat'] >= 10) {
    return colors.orange;
  } else if (product.nutriments['saturated-fat'] >= 20) {
    return colors.red;
  } else if (product.nutriments['saturated-fat'] >= 0) {
    return colors.bown;
  } else if ((product.nutriments['saturated-fat'] = 0)) {
    return colors.grey;
  } else {
    return colors.grey;
  }
};

export const sugarComment = (nutrient_levels) => {
  if (!nutrient_levels) {
    return null;
  }
  if (nutrient_levels === 'low') {
    return 'Faible quantité';
  } else if (nutrient_levels === 'high') {
    return 'Forte quantité';
  } else {
    return 'Très faible quantité';
  }
};
export const sugarCircle = (nutrient_levels) => {
  if (!nutrient_levels) {
    return null;
  }
  if (nutrient_levels === 'low') {
    return colors.green;
  } else if (nutrient_levels === 'high') {
    return colors.red;
  } else {
    return colors.grey;
  }
};

export const ratingIconColor = (nutrition_grade_fr) => {
  if (!nutrition_grade_fr) {
    return null;
  }
  switch (nutrition_grade_fr) {
    case 'a':
      return colors.green;
    case 'b':
      return colors.orange;
    case 'c':
      return colors.brown;
    case 'd':
      return colors.red;
    case 'e':
      return colors.black;
    default:
      return colors.grey;
  }
};

export const ratingProductComment = (nutrition_grade_fr) => {
  switch (nutrition_grade_fr) {
    case 'a':
      return 'Excellent';
    case 'b':
      return 'Bon';
    case 'c':
      return 'Moyen';
    case 'd':
      return 'Mauvais';
    case 'e':
      return 'Médiocre';
    default:
      return 'Non noté';
  }
};

export const ratingScoreText = (product) => {
  switch (product.nutrition_grade_fr) {
    case 'a':
      return '100';
    case 'b':
      return '80';
    case 'c':
      return '70';
    case 'd':
      return '30';
    case 'e':
      return '10';
    default:
      return 'Non noté';
  }
};
