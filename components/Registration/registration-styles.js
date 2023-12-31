import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 92,
    paddingBottom: 66,
    alignItems: 'center'
  },
  avatar__container: {
    position: "absolute",
    top: -60,
    // backgroundColor: "#000",
    borderRadius: 16,
  },
  avatar__image: {
    width: 120,
    height: 120,
  },
  title: {
    fontStyle: 'normal',
    textAlign: "center",
    // marginTop: 92,
    marginBottom: 33,
    fontSize: 30,
    fontWeight: '500',
    letterSpacing: 0.3,
    color: "#212121",
  },
  input__container: {
    width: '100%'
  },
  input: {
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 5,
  },
  pass__input: {
    position: 'relative',
    padding: 16,
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 5,
  },
  show__password: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  pass__text: {
    color: '#1B4371',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  submit: {
    width: '100%',
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginTop: 43,
  },
  submit__text: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    color: 'white'
  },
  // auth__link: {
  //   color: '#1B4371',
  //   fontSize: 16,
  //   fontStyle: 'normal',
  //   fontWeight: '400',
  // }
});
