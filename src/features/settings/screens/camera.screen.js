import React, { useContext, useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../../../components/typography/typography.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  height: 90%;
`;
const CameraContainer = styled.View`
  flex: 1;
`;

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <CameraContainer>
      <TouchableOpacity
        onPress={snap}
        stlyle={{ zIndex: 999, position: "absolute" }}
      >
        <ProfileCamera
          ref={(camera) => (cameraRef.current = camera)}
          type={Camera.Constants.Type.front}
          ratio={"16:9"}
        />
      </TouchableOpacity>
    </CameraContainer>
  );
};
