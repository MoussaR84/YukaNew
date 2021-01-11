import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import BarcodeScanner from '../components/barcodeScanner';
import {fetchProductData} from '../api/index';
import updateProductHistoryinStorage from '../asyncStorage/index';
import Product from '../components/Product/index';
const ScanScreen = () => {
  const [product, setProduct] = useState({});
  const [isProductFound, setIsProductFound] = useState(false);
  const [productId, setProductId] = useState(null);

  const onBarCodeRead = async ({type, id}) => {
    console.log('onBarCodeRead,id', id);
    //quand le product on va chercher les datas //
    // setScanned(true);

    try {
      const {
        response: {data},
      } = await fetchProductData(id);
      setProduct(data.product);
      updateProductHistoryinStorage(data.product);
      setIsProductFound(true);
    } catch (error) {
      console.log('error api', error);
    }
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // navigation.navigate(product) (data)
  };

  const sheetRef = React.useRef(null);
  //   onPress={() => sheetRef.current.snapTo(0)}

  return (
    <>
      <BarcodeScanner onBarCodeRead={onBarCodeRead} />
      {isProductFound ? (
        <BottomSheet
          ref={sheetRef}
          snapPoints={[450, 300, 0]}
          borderRadius={10}
          renderContent={<Product product={product} />}
        />
      ) : null}
    </>
  );
};

// const ScanScreen = () => {
//   return <Text>ScanScreen</Text>;
// };
export default ScanScreen;
