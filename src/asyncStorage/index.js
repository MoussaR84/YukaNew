import AsyncStorage from '@react-native-community/async-storage';

const updateProductHistoryinStorage = async (newProduct) => {
  const rawSavedHistory = await AsyncStorage.getItem('productHistory');
  let savedHistoryinStorage;
  // console.log('rawSavedHistory',rawSavedHistory);
  if (rawSavedHistory !== null) {
    savedHistoryinStorage = JSON.parse(rawSavedHistory);
    // console.log('savedHistoryinStorage',savedHistoryinStorage);
  } else {
    savedHistoryinStorage = [];
  }
  const newHistory = [
    ...savedHistoryinStorage,
    {
      product_name: newProduct.product_name,
      brands: newProduct.brands,
      image_url: newProduct.image_url,
      nutrition_grade_fr: newProduct.nutrition_grade_fr,
    },
  ];
  AsyncStorage.setItem('productHistory', JSON.stringify(newHistory));
};
export default updateProductHistoryinStorage;
