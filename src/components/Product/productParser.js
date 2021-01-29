import colors from '../../assets/colors';

export const isBioorNot = (product) => {
  if (product.labels_tags[0] === 'en:organic') {
    return 'Produit Biologique';
  } else {
    return 'Produit non Biologique';
  }
};

export const isBioorNotColor = (product) => {
  if (product.labels_tags[0] === 'en:organic') {
    return colors.green;
  } else {
    return colors.grey;
  }
};

export const textProteine = (product) => {
  if (product.nutriscore_data.proteins_value >= 10) {
    return 'Excellente quantité';
  } else if (product.nutriscore_data.proteins_value >= 5) {
    return 'Quantité moyenne';
  } else if (product.nutriscore_data.proteins_value < 3) {
    return 'Faible quantité';
  } else {
    return 'Non renseigné';
  }
};

export const ratingProteineCircle = (product) => {
  if (product.nutriscore_data.proteins_value >= 10) {
    return colors.green;
  } else if (product.nutriscore_data.proteins_value >= 5) {
    return colors.orange;
  } else if (product.nutriscore_data.proteins_value <= 3) {
    return colors.red;
  } else {
    return colors.grey;
  }
};

export const ratingFibreCircle = (product) => {
  if (product.fiber_value >= 1) {
    return colors.green;
  } else if (product.fiber_value >= 0.5) {
    return colors.orange;
  } else if (product.proteins_value <= 0.5) {
    return colors.red;
  } else {
    return colors.grey;
  }
};

export const fiberComment = (product) => {
  if (product.nutriments.fiber >= 5) {
    return 'Riche en fibres';
  } else if (product.nutriments.fiber >= 3) {
    return 'quantités de fibres satisfaisante';
  } else if (product.nutriments.fiber >= 1) {
    return 'Quelques fibres';
  } else {
    return 'fibres non présentes';
  }
};

export const calorieComment = (product) => {
  // O 160 360 560 800

  if (product.nutriments['energy-kcal_value'] <= 800) {
    return 'Extremement Calorique';
  } else if (product.nutriments['energy-kcal_value'] <= 560) {
    return 'Très calorique';
  } else if (product.nutriments['energy-kcal_value'] <= 360) {
    return 'Riche en calorie';
  } else if (product.nutriments['energy-kcal_value'] <= 160) {
    return 'Peu calorique';
  } else {
    return 'Produit non enrregistré';
  }
};

export const caloriecirclecolor = (product) => {
  // O 160 360 560 800

  if (product.nutriments['energy-kcal_value'] <= 800) {
    return colors.red;
  } else if (product.nutriments['energy-kcal_value'] <= 560) {
    return colors.orange;
  } else if (product.nutriments['energy-kcal_value'] <= 360) {
    return colors.greenLight;
  } else if (product.nutriments['energy-kcal_value'] <= 160) {
    return colors.green;
  } else {
    return 'Produit non enrregistré', colors.grey;
  }
};

export const satfatCircle = (product) => {
  if (product.nutriments['saturated-fat'] >= 1) {
    return colors.green;
  } else if (product.nutriments['saturated-fat'] >= 10) {
    return colors.orange;
  } else if (product.nutriments['saturated-fat'] >= 20) {
    return colors.red;
  } else {
    return colors.grey;
  }
};

export const satfatComment = (product) => {
  if (product.nutriments['saturated-fat'] >= 1) {
    return 'Peu de graisses saturées';
  } else if (product.nutriments['saturated-fat'] >= 10) {
    return 'Graisses saturées en quantité';
  } else if (product.nutriments['saturated-fat'] >= 20) {
    return 'Graisses saturées en quantité';
  } else {
    return 'Graisses saturées non présentes';
  }
};

export const sugarCircle = (product) => {
  if (product.nutrient_levels === 'low') {
    return colors.green;
  } else if (product.nutrient_levels === 'high') {
    return colors.red;
  } else {
    return colors.grey;
  }
};

export const sugarComment = (product) => {
  if (product.nutrient_levels === 'low') {
    return 'Faible quantité';
  } else if (product.nutrient_levels === 'high') {
    return 'forte quantité';
  } else {
    return 'données inaccessibles';
  }
};

export const ratingIconColor = (nutrition_grade_fr) => {
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
  if (product.nutrition_grade_fr === 'a') {
    return '100';
  } else if (product.nutrition_grade_fr === 'b') {
    return '80';
  } else if (product.nutrition_grade_fr === 'c') {
    return '70';
  } else if (product.nutrition_grade_fr === 'd') {
    return '30';
  } else {
    return '10';
    // } else {
    //   ("Données non disponible");
    //   // alert("not registred");
  }
};
