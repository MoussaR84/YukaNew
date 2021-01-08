import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Camera from '../components/Camera';
import {fetchProductData} from '../api/index';
import updateProductHistoryinStorage from '../asyncStorage/index';
import Product from '../components/Product/index';
const ScanScreen = () => {
  const [item, setItem] = useState({});
  const [isProductFound, setIsProductFound] = useState(false);
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    const handleBarCodeScanned = async ({type, id}) => {
      //quand le product on va chercher les datas //
      // setScanned(true);

      try {
        const {
          data: {product},
        } = await fetchProductData(id);
        setItem(product);
        updateProductHistoryinStorage(product);
        setIsProductFound(true);
      } catch (error) {
        console.log('error api', error);
      }
      // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      // navigation.navigate(product) (data)
    };

    handleBarCodeScanned(productId);
  }, [productId]);

  const sheetRef = React.useRef(null);
  //   onPress={() => sheetRef.current.snapTo(0)}

  return (
    <>
      <Camera setProductId={setProductId} />
      {isProductFound ? (
        <BottomSheet
          ref={sheetRef}
          snapPoints={[450, 300, 0]}
          borderRadius={10}
          renderContent={<Product product={item} />}
        />
      ) : null}
    </>
  );
};

// const ScanScreen = () => {
//   return <Text>ScanScreen</Text>;
// };
export default ScanScreen;
