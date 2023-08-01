import {
  View,
  TextInput,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FormLink } from "../Form-link/Form-link";
import { styles } from "../Registration/registration-styles";
import {loginStyles} from "./login-styles"

export const LoginForm = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={loginStyles.container}>
        <Text style={styles.title}>Увійти</Text>
        <KeyboardAvoidingView
          style={styles.input__container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
            type="email"
            name="email"
            keyboardType="email-address"
          />
          <View style={styles.pass__container}>
            <TextInput
              style={styles.pass__input}
              placeholder="Пароль"
              type="password"
              name="password"
              secureTextEntry={true}
            />
            <Pressable style={styles.show__password}>
              <Text style={styles.pass__text}>Показати</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
        <Pressable style={styles.submit}>
          <Text style={styles.submit__text}>Увійти</Text>
        </Pressable>
        <FormLink>Немає акаунту? Зареєструватися</FormLink>
      </View>
    </TouchableWithoutFeedback>
  );
};
