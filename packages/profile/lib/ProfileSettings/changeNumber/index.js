import React from "react";
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
import VerifyChangeNumber from "./../verifyChangeNumber";

export default class ChangeNumber extends BaseComponent {
  constructor(props) {
    super(props);
    navManager.registerScreen(
      undefined,
      "VerifyChangeNumber",
      VerifyChangeNumber
    );
    languageManager.addToTranslation(this, translation);
    stateManager.instance().registerFormState(this);
  }
  onOk = result => navManager.openScreen("VerifyChangeNumber", result);

  render() {
    return (
      <KeyboardAwareScrollView style={styles.scrollKeyboardView}>
        <Container style={styles.top}>
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
            action={{ api: "authentication", func: "requestCode" }}
            onOk={this.onOk}
          >
            <Text style={styles.bottomBtnText}>
              {languageManager.translate(this, "LOGIN_BTN_TEXT")}
            </Text>
          </ApiButton>
          <Button
            style={styles.signUpBtn}
            onPress={() => navManager.closeScreen()}
          >
            <Text style={styles.signUpBtnText}>
              {languageManager.translate(this, "BACK_BTN_TEXT")}
            </Text>
          </Button>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}
