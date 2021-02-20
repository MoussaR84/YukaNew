import React, {useState, useRef} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraHeader from './CameraHeader';
import PendingView from './PendingView';
const isiOS = Platform.OS === 'ios';
const BarcodeScanner = ({onBarCodeRead}) => {
  const [flashOn, setFlashOn] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const camRef = useRef(null);

  const handleFlash = () => {
    setFlashOn(!flashOn);
  };

  const handleSound = () => {
    setSoundOn(!flashOn);
  };

  const permissionStatusReady = RNCamera.Constants.CameraStatus.READY;

  return (
    <View style={styles.container}>
      {permissionStatusReady ? (
        <>
          <RNCamera
            style={styles.preview}
            flashMode={
              flashOn
                ? RNCamera.Constants.FlashMode.on
                : RNCamera.Constants.FlashMode.off
            }
            onBarCodeRead={({data}) => onBarCodeRead(data)}
            ref={camRef}
            keepAudioSession={isiOS ? soundOn : null}
            playSoundOnCapture={!isiOS ? soundOn : null}
            // aspect={RNCamera.Constants.Aspect.fill}
            androidCameraPermissionOptions={{
              title: "Demande d'accès à la camera",
              message:
                'Yuka souhaite accéder à votre caméra pour scanner un produit',
              buttonPositive: 'Ok',
              buttonNegative: 'Annuler',
            }}
          />
          <CameraHeader handleFlash={handleFlash} handleSound={handleSound} />
        </>
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
