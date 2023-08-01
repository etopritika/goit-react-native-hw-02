import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { RegisterForm } from "./components/Registration/RegistrationScreen";
import { LoginForm } from "./components/Login/LoginScreen"
import BackgroundImage from "./Screens/photo-bg.png";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <RegisterForm />
      {/* <LoginForm/> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});
