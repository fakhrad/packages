import React from "react";
import { StatusBar } from "react-native";
import {
  Image,
  Text,
  Container,
  Button,
  BaseComponent
} from "@app-sdk/components";
import BackButton from "@app-sdk/advance-components/BackButton";
import styles from "./styles";
import translation from "./translation";
import { languageManager, themeManager, navManager } from "@app-sdk/services";

export default class SuccessNewRequest extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
  }
  backToNewRequest = () => {
    navManager.closeWizard();
  };

  render() {
    return (
      <Container style={styles.wrapper}>
        <Container style={styles.imageContainer} animation="zoomIn">
          <Image source={require("./assets/img.jpg")} style={styles.image} />
        </Container>
        <Text style={styles.title}>
          {languageManager.translate(this, "TITLE")}
        </Text>
        <Text style={styles.desc}>
          {languageManager.translate(this, "SUB_TITLE")}
        </Text>
        <Text style={styles.hint}>
          {languageManager.translate(this, "INFO")}
        </Text>
        <Button style={styles.backBtn} onPress={this.backToNewRequest}>
          <Text style={styles.backBtnText}>
            {languageManager.translate(this, "CLOSE_WIZARD_BTN_TEXT")}
          </Text>
        </Button>
      </Container>
    );
  }
}
