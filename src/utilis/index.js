import moment from 'moment';
export const getDifferenceBetweenDateAndNow = (date) => {
  const now = moment(new Date());
  const scanDate = moment(date);
  const duration = moment.duration(now.diff(scanDate));
  const minutes = Math.floor(duration.asMinutes());
  const hours = Math.floor(duration.asHours());
  const days = Math.floor(duration.asDays());
  const months = Math.floor(duration.asMonths());
  const seconds = Math.floor(duration.asSeconds());
  if (months > 1) {
    return months + ' mois';
  } else if (months === 1) {
    return months + ' mois';
  }

  if (days > 1) {
    return days + ' jours';
  } else if (days === 1) {
    return days + ' jour';
  }
  if (hours > 1) {
    return hours + ' hours';
  } else if (hours === 1) {
    return hours + ' heure';
  }
  if (minutes > 1) {
    return minutes + ' minutes';
  } else if (minutes <= 1) {
    return minutes + ' minute';
  }
  if (seconds > 1) {
    return seconds + ' seconds';
  } else if (seconds === 1) {
    return seconds + ' second';
  }
};

export const isProductAlreadyinFavorites = (loadedHistory, loadedFavorites) => {
  console.log(
    'isProductAlreadyinFavorites',
    'loadedHistory',
    loadedHistory,
    'loadedFavorites',
    loadedFavorites,
  );
  const formattedHistory = loadedHistory.map((product) => {
    const productAlreadyAddedInFav = loadedFavorites.find(({id}) => {
      return id === product.id;
    });

    if (productAlreadyAddedInFav !== undefined) {
      return {...product, isFavorite: true};
    } else {
      return {...product, isFavorite: false};
    }
  });
  return formattedHistory;
};

export const isAFoodProduct = (product) => {
  let result = false;
  if (!product.categories_hierarchy) {
    return result;
  }
  product.categories_hierarchy.forEach((item) => {
    if (item.includes('food')) {
      result = true;
    }
  });
  return result;
};
