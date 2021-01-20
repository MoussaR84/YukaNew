import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import BarcodeScanner from '../components/barcodeScanner';
import {fetchProductData} from '../api/index';
import updateProductHistoryinStorage from '../asyncStorage/index';
import Product from '../components/Product/index';
import ProductHeader from '../components/Product/ProductHeader';

const ScanScreen = () => {
  const [product, setProduct] = useState({});
  const [isProductScanned, setIsProductScanned] = useState(false);
  const [idCurrentProductScanned, setIdCurrentProductScanned] = useState(null);

  const onBarCodeRead = async (id) => {
    if (id === idCurrentProductScanned) {
      return;
    }

    console.log('onBarCodeRead,id', id);

    //quand le product on va chercher les datas //
    // setScanned(true);
    setIdCurrentProductScanned(id);
    try {
      const {data} = await fetchProductData(id);
      setProduct(data.product);
      updateProductHistoryinStorage(data.product);
      setIsProductScanned(true);
      () => sheetRef.current.snapTo(0);
      // navigation.navigate("Product", { itemId: data })
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
  // console.log('isProductScanned', isProductScanned);

  const renderHeader = () => {
    <ProductHeader product={product} />;
  };

  return (
    <SafeAreaView style={styles.containerScanScreen}>
      <BarcodeScanner onBarCodeRead={onBarCodeRead} />
      {isProductScanned ? (
        <BottomSheet
          ref={sheetRef}
          snapPoints={[500, 300, 0]}
          borderRadius={10}
          renderHeader={renderHeader}
          renderContent={renderContent}
        />
      ) : null}
      {isProductScanned && (
        <TouchableOpacity
          style={styles.button}
          title={'Tap to Scan Again'}
          onPress={() => setIsProductScanned(false)}>
          <Text style={styles.text}>Scan again</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerScanScreen: {
    flex: 1,
  },
  button: {
    height: 50,
    width: 150,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: 'orange',
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
  },

  text: {
    color: 'orange',
    fontWeight: '600',
  },
});
export default ScanScreen;
