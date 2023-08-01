import {
  View,
  TextInput,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from "react-native";
import { FormLink } from "../Form-link/Form-link";
import { styles } from "./registration-styles";
import Avatar from "../../Screens/avatar/add-photo.svg";

export const RegisterForm = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.avatar__container}>
          <Avatar style={styles.avatar__image} />
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <KeyboardAvoidingView
          style={styles.input__container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.input}
            placeholder="Логін"
            type="text"
            name="login"
          />
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
          <Text style={styles.submit__text}>Зареєстуватися</Text>
        </Pressable>
        <FormLink>Вже є акаунт? Увійти</FormLink>
      </View>
    </TouchableWithoutFeedback>
  );
};
