import React from "react";
import { Alert, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Spinner,
  Text,
  Button,
  Container,
  Image,
  PhoneNumberInput
} from "app-sdk-components";
import { LoginApi } from "app-sdk-authentication-api";
import translation from "./translation";

import styles from "./style";

export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      isValid: false,
      phoneNumber: ""
    };
    this.props.addToTranslation(translation);
  }
  onChangeText = (isValid, phoneNumber) => {
    this.setState({ isValid: isValid, phoneNumber: phoneNumber });
  };

  signIn = async () => {
    let numb = this.state.phoneNumber;

    if (!this.state.isValid) {
      const text = translate.t("AUTH_PHONE_NUMBER_REQUIRED");
      Alert.alert(text);
    } else {
      this.setState({ spinner: true });
      this.props
        .login(numb)
        .then(responce => {
          if (responce == undefined) {
            this.setState({ spinner: false });
          } else {
            try {
              let navName = "";
              const status = responce.status;
              if (status == 200) {
                navName = "SignInActivation";
              } else if (status == 201) {
                navName = "SignUpActivation";
              }
              responce.json().then(resp => {
                resp["phoneNumber"] = numb;
                Navigation.push(this.props.componentId, {
                  component: {
                    name: navName,
                    passProps: {
                      result: resp
                    }
                  }
                });
              });
            } catch (error) {
              console.log(error);
              this.setState({ spinner: false });
            }
          }
        })
        .catch(error => {
          this.setState({ spinner: false });
          console.log(error);
        });
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView style={styles.scrollKeyboardView}>
        <StatusBar hidden />
        <Container style={styles.top}>
          <Icon name="angle-up" style={styles.topIcon} />
          <Image
            source={require("./../../../assets/images/m-v.png")}
            style={styles.topImage}
          />
          <Text style={styles.topText}>{translate.t("LOGIN_TITLE")}</Text>
        </Container>
        <Container style={styles.bottom}>
          <PhoneNumberInput
            onChange={(isValid, text) => this.onChangeText(isValid, text)}
            placeholder={translate.t("LOGIN_INPUT_PLACEHLODER")}
            style={styles.bottomInput}
          />
          <Button style={styles.bottomBtn} onPress={this.signIn}>
            <Spinner
              size="small"
              show={this.state.spinner}
              style={styles.spinner}
            />
            <Text style={styles.bottomBtnText}>
              {translate.t("LOGIN_BTN_TEXT")}
            </Text>
          </Button>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}

const loginScreen = LoginApi(signIn);
export default loginScreen;
