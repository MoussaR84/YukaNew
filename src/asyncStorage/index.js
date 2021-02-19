import AsyncStorage from '@react-native-community/async-storage';

const updateProductHistoryinStorage = async (newProduct) => {
  const rawSavedHistory = await AsyncStorage.getItem('productHistory');
  let savedHistoryinStorage;
  if (rawSavedHistory !== null) {
    savedHistoryinStorage = JSON.parse(rawSavedHistory);
  } else {
    savedHistoryinStorage = [];
  }
  const newHistory = [
    {
      product_name: newProduct.product_name,
      brands: newProduct.brands,
      image_url: newProduct.image_url,
      nutrition_grade_fr: newProduct.nutrition_grade_fr,
      id: newProduct.id,
    },
    ...savedHistoryinStorage,
  ];
  AsyncStorage.setItem('productHistory', JSON.stringify(newHistory));
};
export default updateProductHistoryinStorage;
