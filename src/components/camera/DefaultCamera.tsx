import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Portal } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { colors } from '../../constants/UI/Colors.constant';
import { loadImagesURI } from '../../store/actions/ui.actions';

interface IProps {
  onCloseCamera: () => any;
}

export const DefaultCamera = (props: IProps) => {
  // Camera ========================================

  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [zoom, setZoom] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      // @ts-ignore
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // Camera actions ========================================

  const onTakePicture = async () => {
    if (cameraRef) {
      // @ts-ignore
      const { uri } = await cameraRef.current.takePictureAsync({
        quality: 0.7
      });

      await dispatch(loadImagesURI("post", [uri]));

      props.onCloseCamera();
    }
  };

  const onFlipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const onZoomIn = () => {
    if (zoom > 1) {
      setZoom(1);
    } else {
      setZoom(zoom + 0.2);
    }
  };

  const onZoomOut = () => {
    if (zoom > 0) {
      setZoom(zoom - 0.2);
    } else {
      setZoom(0);
    }
  };

  return (
    <Portal>
      <Camera style={styles.container} type={type} zoom={zoom} ref={cameraRef}>
        <View style={styles.cameraContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log("closing camera");
              props.onCloseCamera();
            }}
            style={styles.iconContainer}
          >
            <Ionicons name={"md-close"} size={32} color={colors.white} />
          </TouchableOpacity>

          <View style={styles.cameraContainerRow}>
            <TouchableOpacity onPress={() => onFlipCamera()}>
              <MaterialCommunityIcons
                size={30}
                name={"rotate-3d"}
                color={colors.white}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onZoomIn()}>
              <MaterialIcons size={30} name={"zoom-in"} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onZoomOut()}>
              <MaterialIcons size={30} name={"zoom-out"} color={colors.white} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={async () => {
              await onTakePicture();
            }}
            style={styles.cameraShotIcon}
          >
            <MaterialIcons size={60} name={"camera"} color={colors.red} />
          </TouchableOpacity>
        </View>
      </Camera>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    position: "relative"
  },
  cameraContainerRow: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",

    maxHeight: 50,
    padding: 8
  },
  iconContainer: {
    position: "absolute",
    top: 30,
    right: 30
  },
  cameraShotIcon: {
    position: "absolute",
    bottom: 70,
    left: Dimensions.get("window").width / 2 - 30
  }
});
