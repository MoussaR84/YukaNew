import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import BarcodeScanner from '../components/barcodeScanner';
import {fetchProductData} from '../api/index';
import updateProductHistoryinStorage from '../asyncStorage/index';
import Product from '../components/Product/index';
import ProductHeader from '../components/Product/ProductHeader';

const ScanScreen = () => {
  const [product, setProduct] = useState({});
  const [isProductScanned, setIsProductScanned] = useState(false);
  const [productId, setProductId] = useState(null);

  const onBarCodeRead = async (id) => {
    if (isProductScanned) {
      return;
    }
    console.log('onBarCodeRead,id', id);

    //quand le product on va chercher les datas //
    // setScanned(true);

    try {
      const {data} = await fetchProductData(id);
      setProduct(data.product);
      updateProductHistoryinStorage(data.product);
      setIsProductScanned(true);
      () => sheetRef.current.snapTo(0);
    } catch (error) {
      console.log('error api', error);
    }
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // navigation.navigate(product) (data)
  };

  const sheetRef = React.useRef(null);
  const renderContent = () => {
    return <Product product={product} />;
  };
  console.log('isProductScanned', isProductScanned);

  const renderHeader = () => {
    <ProductHeader product={product} />;
  };

  return (
    <SafeAreaView style={styles.containerScanScreen}>
      <BarcodeScanner onBarCodeRead={onBarCodeRead} />
      {isProductScanned ? (
        <BottomSheet
          ref={sheetRef}
          snapPoints={[600, 300, 0]}
          borderRadius={10}
          renderHeader={renderHeader}
          renderContent={renderContent}
        />
      ) : null}
      {isProductScanned && (
        <TouchableOpacity
          title={'Tap to Scan Again'}
          onPress={() => setIsProductScanned(false)}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerScanScreen: {
    flex: 1,
  },
});
export default ScanScreen;

// import React, {useRef,useState} from 'react';
// import {SafeAreaView, TouchableOpacity, Text, StyleSheet} from 'react-native';
// import BottomSheet from 'react-native-gesture-bottom-sheet';
// import BarcodeScanner from '../components/barcodeScanner';
// import {fetchProductData} from '../api/index';
// import updateProductHistoryinStorage from '../asyncStorage/index';
// import Product from '../components/Product/index';
// import ProductHeader from '../components/Product/ProductHeader';

// const ScanScreen = () => {
//   const [product, setProduct] = useState({});
//   const [isProductScanned, setIsProductScanned] = useState(false);
//   const [productId, setProductId] = useState(null);

//   const onBarCodeRead = async (id) => {
//     if (isProductScanned) {
//       return;
//     }
//     console.log('onBarCodeRead,id', id);

//     //quand le product on va chercher les datas //
//     // setScanned(true);

//     try {
//       const {data} = await fetchProductData(id);
//       setProduct(data.product);
//       updateProductHistoryinStorage(data.product);
//       setIsProductScanned(true);
//     } catch (error) {
//       console.log('error api', error);
//     }
//     // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//     // navigation.navigate(product) (data)
//   };

//   const bottomSheet = useRef();

//   const renderContent = () => {
//     return <Product product={product} />;
//   };
//   console.log('isProductScanned', isProductScanned);

//   const renderHeader = () => {
//     <ProductHeader product={product} />;
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <BarcodeScanner onBarCodeRead={onBarCodeRead} />
//       {isProductScanned ? (
//       <BottomSheet hasDraggableIcon ref={bottomSheet} height={300}
//       renderHeader={renderHeader}
//       renderContent={renderContent}
//       onPress={() => bottomSheet.current.show()} />

//        ) : null}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ScanScreen;
