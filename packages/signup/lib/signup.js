import React from "react";
import { Alert, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";
import { languageManager } from "@app-sdk/services";

import {
  Spinner,
  Text,
  Button,
  Container,
  Image,
  PhoneNumberInput
} from "@app-sdk/components"; // public components
import styles from "./style";
import translation from "./translation";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = {
      spinner: false,
      isValid: false,
      phoneNumber: ""
    };
  }
  onChangeText = (isValid, phoneNumber) => {
    this.setState({ isValid: isValid, phoneNumber: phoneNumber });
  };

  signUp = async () => {};

  render() {
    return (
      <KeyboardAwareScrollView style={styles.scrollKeyboardView}>
        <StatusBar hidden />
        <Container style={styles.top}>
          <Icon name="angle-up" style={styles.topIcon} />
          <Image source={require("./assets/m-v.png")} style={styles.topImage} />
          <Text style={styles.topText}>
            {languageManager.doTranslate(this, "SIGNUP_TITLE")}
          </Text>
        </Container>
        <Container style={styles.bottom}>
          <PhoneNumberInput
            onChange={(isValid, text) => this.onChangeText(isValid, text)}
            placeholder={languageManager.doTranslate(
              this,
              "SIGNUP_INPUT_PLACEHLODER"
            )}
            style={styles.bottomInput}
          />
          <Button style={styles.bottomBtn} onPress={this.signUp}>
            <Spinner
              size="small"
              show={this.state.spinner}
              style={styles.spinner}
            />
            <Text style={styles.bottomBtnText}>
              {languageManager.doTranslate(this, "SIGNUP_BTN_TEXT")}
            </Text>
          </Button>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}
