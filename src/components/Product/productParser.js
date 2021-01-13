import colors from '../../assets/colors';

const isBioorNot = (product) => {
  if (product.labels_tags[0] === 'en:organic') {
    return 'Produit Biologique';
  } else {
    return 'Produit non Biologique';
  }
};

const isBioorNotColor = (product) => {
  if (product.labels_tags[0] === 'en:organic') {
    return colors.green;
  } else {
    return colors.grey;
  }
};

const textProteine = (product) => {
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

const ratingProteineCircle = (product) => {
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

const ratingFibreCircle = (product) => {
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

const fiberComment = (product) => {
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

const calorieComment = (product) => {
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

const caloriecirclecolor = (product) => {
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

const satfatCircle = (product) => {
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

const satfatComment = (product) => {
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

const sugarCircle = (product) => {
  if (product.nutrient_levels === 'low') {
    return colors.green;
  } else if (product.nutrient_levels === 'high') {
    return colors.red;
  } else {
    return colors.grey;
  }
};

const sugarComment = (product) => {
  if (product.nutrient_levels === 'low') {
    return 'Faible quantité';
  } else if (product.nutrient_levels === 'high') {
    return 'forte quantité';
  } else {
    return 'données inaccessibles';
  }
};

const ratingProduct = (product) => {
  if (product.nutrition_grade_fr === 'a') {
    return colors.green;
  } else if (product.nutrition_grade_fr === 'b') {
    return colors.orange;
  } else if (product.nutrition_grade_fr === 'c') {
    return colors.red;
  } else if (product.nutrition_grade_fr === 'd') {
    return colors.brown;
  } else if (product.nutrition_grade_fr === 'e') {
    return colors.black;
  } else {
    return colors.grey;
  }
};

const ratingProductComment = (product) => {
  if (product.nutrition_grade_fr === 'a') {
    return 'Excellent';
  } else if (product.nutrition_grade_fr === 'b') {
    return 'Satisfaisant';
  } else if (product.nutrition_grade_fr === 'c') {
    return 'Bon';
  } else if (product.nutrition_grade_fr === 'd') {
    return 'Mauvais';
  } else if (product.nutrition_grade_fr === 'e') {
    return 'Médiocre';
  } else {
    return 'pas enregistré';
  }
};

const ratingScoreText = (product) => {
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

// const nutriscoreproteinevalue=()=>{
//   (product.nutriscore_data.proteins_value=== undefined ?"pas de protéines":"g")

// }
export default {
  sugarComment,
  sugarCircle,
  satfatComment,
  satfatCircle,
  caloriecirclecolor,
  isBioorNot,
  isBioorNotColor,
  textProteine,
  ratingProteineCircle,
  ratingFibreCircle,
  fiberComment,
  calorieComment,
  ratingProduct,
  ratingProductComment,
  ratingScoreText,
};
