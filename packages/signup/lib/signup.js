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
  BaseComponent,
  Button
} from "@app-sdk/components"; // public components
import styles from "./styles";
import translation from "./translation";

export default class Login extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = stateManager.instance().registerFormState(this);
  }
  openLogin = () => {
    if (this.props.config && this.props.config.loginPage.length > 0) {
      navManager.openScreen(this.props.config.loginPage);
    }
  };
  render() {
    return (
      <KeyboardAwareScrollView style={styles.scrollKeyboardView}>
        <StatusBar hidden />
        <Container style={styles.top}>
          <Icon name="angle-up" style={styles.topIcon} />
          <Image source={require("./assets/m-v.png")} style={styles.topImage} />
          <Text style={styles.topText}>
            {languageManager.translate(this, "SIGNUP_TITLE")}
          </Text>
        </Container>
        <Container style={styles.bottom}>
          <PhoneNumberInput
            placeholder={languageManager.translate(
              this,
              "SIGNUP_INPUT_PLACEHLODER"
            )}
            style={styles.bottomInput}
            bind="phoneNumber"
            isRequired={true}
          />
          <ApiButton
            style={styles.bottomBtn}
            action={{
              api: "authentication",
              func: "signUp"
            }}
            onOk={res => {
              if (
                this.props.config &&
                this.props.config.loginSuccessPage &&
                this.props.config.loginSuccessPage.length
              )
                navManager.openScreen(this.props.config.loginSuccessPage, res);
            }}
            onBadRequest={() => {
              this.notifyWarning(
                languageManager.translate(this, "BAD_REQUEST_ERROR")
              );
            }}
            onCreated={res => {
              if (
                this.props.config &&
                this.props.config.signUpSuccessPage &&
                this.props.config.signUpSuccessPage.length
              )
                navManager.openScreen(this.props.config.signUpSuccessPage, res);
            }}
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
              {languageManager.translate(this, "SIGNUP_BTN_TEXT")}
            </Text>
          </ApiButton>
          <Button style={styles.signUpBtn} onPress={this.openLogin}>
            <Text style={styles.signUpBtnText}>
              {languageManager.translate(this, "LOGIN_BTN_TEXT")}
            </Text>
          </Button>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}
