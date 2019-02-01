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
  ApiButton
} from "@app-sdk/components"; // public components
import styles from "./styles";
import translation from "./translation";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = stateManager.instance.registerFormState(this);
  }

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
            action={{ api: "authentication", func: "signUp" }}
            onOk={() =>
              navManager.openScreen(this.props.config.loginSuccessPage)
            }
            onCreated={() =>
              navManager.openScreen(this.props.config.signUpSuccessPage)
            }
          >
            <Text style={styles.bottomBtnText}>
              {languageManager.translate(this, "SIGNUP_BTN_TEXT")}
            </Text>
          </ApiButton>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}
