import AsyncStorage from '@react-native-community/async-storage';

export const getHistoryFromStorage = async () => {
  let formattedHistoryfromStorage = [];
  const rawSavedHistory = await AsyncStorage.getItem('productHistory');
  if (rawSavedHistory !== null) {
    console.log(rawSavedHistory, 'rawSavedHistory');
    formattedHistoryfromStorage = JSON.parse(rawSavedHistory);
  }
  return formattedHistoryfromStorage;
};

export const getFavoritesFromStorage = async () => {
  let formattedFavoritesfromStorage = [];
  const rawSavedFavorites = await AsyncStorage.getItem('productFavorites');
  if (rawSavedFavorites !== null) {
    formattedFavoritesfromStorage = JSON.parse(rawSavedFavorites);
  }
  return formattedFavoritesfromStorage;
};
export const deleteFavoriteInStorage = async (id, savedFavorites) => {
  const newFavoriteList = savedFavorites.filter((favorite) => {
    return favorite.id !== id;
  });
  if (newFavoriteList.length === 0) {
    await AsyncStorage.removeItem('productFavorites');
  } else {
    await AsyncStorage.setItem(
      'productFavorites',
      JSON.stringify(newFavoriteList),
    );
  }
  return newFavoriteList;
};
export const updateProductHistoryinStorage = async (newProduct) => {
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
