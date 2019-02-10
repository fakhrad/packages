import React from "react";
import { StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";
import { languageManager, stateManager, navManager } from "@app-sdk/services";

import {
  Text,
  Container,
  Image,
  PhoneNumberInput,
  ApiButton,
  BaseComponent
} from "@app-sdk/components"; // public components
import styles from "./styles";
import translation from "./translation";
import BackButton from "@app-sdk/advance-components/BackButton";

export default class Login extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    stateManager.instance().registerFormState(this);
  }
  render() {
    return (
      <KeyboardAwareScrollView style={styles.scrollKeyboardView}>
        <StatusBar hidden />
        <Container style={styles.top}>
          <BackButton />
          <Icon name="angle-up" style={styles.topIcon} />
          <Image source={require("./assets/m-v.png")} style={styles.topImage} />
          <Text style={styles.topText}>
            {languageManager.translate(this, "LOGIN_TITLE")}
          </Text>
        </Container>
        <Container style={styles.bottom}>
          <PhoneNumberInput
            placeholder={languageManager.translate(
              this,
              "LOGIN_INPUT_PLACEHLODER"
            )}
            style={styles.bottomInput}
            bind="phoneNumber"
            isRequired={true}
          />
          <ApiButton
            style={styles.bottomBtn}
            action={{ api: "authentication", func: "logIn" }}
            onOk={res => {
              navManager.openScreen(this.props.config.loginSuccessPage, res);
            }}
            onCreated={res =>
              navManager.openScreen(this.props.config.signUpSuccessPage, res)
            }
            onConnectionError={() => {
              this.notifyError(
                languageManager.translate(this, "CONNECTION_ERROR")
              );
            }}
            onServerError={() => {
              this.notifyError(languageManager.translate(this, "ERROR_500"));
            }}
          >
            <Text style={styles.bottomBtnText}>
              {languageManager.translate(this, "LOGIN_BTN_TEXT")}
            </Text>
          </ApiButton>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}
