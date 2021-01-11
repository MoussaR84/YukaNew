import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
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

  // const renderHeader = () => {
  //   <ProductHeader product={product} />;
  // };

  //   onPress={() => sheetRef.current.snapTo(0)}

  return (
    <SafeAreaView style={styles.containerScanScreen}>
      <BarcodeScanner onBarCodeRead={onBarCodeRead} />
      {isProductScanned ? (
        <BottomSheet
          ref={sheetRef}
          snapPoints={[450, 300, 0]}
          borderRadius={10}
          // renderHeader={renderHeader}
          renderContent={renderContent}
          onOpenEnd={() => console.log()}
          onOpenStart={() => console.log()}
          onCloseEnd={() => console.log()}
          onCloseStart={() => console.log()}
        />
      ) : null}
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   {isProductScanned ? (
    //     <BottomSheet hasDraggableIcon ref={sheetRef} height={600}>
    //       <Product product={product} />
    //     </BottomSheet>
    //   ) : null}
    //   <BarcodeScanner onBarCodeRead={onBarCodeRead} />
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerScanScreen: {
    flex: 1,
  },
});
export default ScanScreen;
