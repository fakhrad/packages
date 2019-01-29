import React from "react";
import { Alert, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";
import { languageManager, stateManager } from "@app-sdk/services";
import { logIn } from "@app-sdk/authentication-api";

import {
  Text,
  Container,
  Image,
  PhoneNumberInput,
  ApiButton
} from "@app-sdk/components"; // public components
import styles from "./style";
import translation from "./translation";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = stateManager.registerFormState(this);
  }
  render() {
    return (
      <KeyboardAwareScrollView style={styles.scrollKeyboardView}>
        <StatusBar hidden />
        <Container style={styles.top}>
          <Icon name="angle-up" style={styles.topIcon} />
          <Image source={require("./assets/m-v.png")} style={styles.topImage} />
          <Text style={styles.topText}>
            {languageManager.doTranslate(this, "LOGIN_TITLE")}
          </Text>
        </Container>
        <Container style={styles.bottom}>
          <PhoneNumberInput
            placeholder={languageManager.doTranslate(
              this,
              "LOGIN_INPUT_PLACEHLODER"
            )}
            style={styles.bottomInput}
            bind="phoneNumber"
            isRequired={true}
          />

          <ApiButton
            style={styles.bottomBtn}
            action={logIn}
            enabled={this.state.isValidForm}
          >
            <Text style={styles.bottomBtnText}>
              {languageManager.doTranslate(this, "LOGIN_BTN_TEXT")}
            </Text>
          </ApiButton>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}
