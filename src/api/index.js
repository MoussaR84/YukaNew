import axios from 'axios';
const fetchProductData = async (id) => {
  return await axios.get(
    `https://world.openfoodfacts.org/api/v0/product/${id}.json`,
  );
};
export {fetchProductData};
