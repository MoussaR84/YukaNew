import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraHeader from './CameraHeader';
import PendingView from './PendingView';

const BarcodeScanner = ({onBarCodeRead}) => {
  const [flashOn, setFlashOn] = useState(false);
  const camRef = useRef(null);

  const handleFlash = () => {
    setFlashOn(!flashOn);
  };

  const permissionStatusReady = RNCamera.Constants.CameraStatus.READY;
  // console.log('permissionStatus', permissionStatusReady);

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        flashMode={
          flashOn
            ? RNCamera.Constants.FlashMode.on
            : RNCamera.Constants.FlashMode.off
        }
        onBarCodeRead={({data}) => onBarCodeRead(data)}
        // onBarCodeRead={onBarCodeRead}
        ref={camRef}
        // aspect={RNCamera.Constants.Aspect.fill}
        androidCameraPermissionOptions={{
          title: "Demande d'accès à la camera",
          message:
            'Yuka souhaite accéder à votre caméra pour scanner un produit',
          buttonPositive: 'Ok',
          buttonNegative: 'Annuler',
        }}>
        {/* <Text
          style={{
            backgroundColor: 'white',
          }}>
          BARCODE SCANNER
        </Text> */}
      </RNCamera>

      {permissionStatusReady ? (
        <CameraHeader handleFlash={handleFlash} flashOn={flashOn} />
      ) : (
        <PendingView />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraIcon: {
    margin: 5,
    height: 40,
    width: 40,
  },
  bottomOverlay: {
    position: 'absolute',
    width: '100%',
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default BarcodeScanner;
