import React from "react";
import { StatusBar } from "react-native";
import { Container, Image, Text, NavigateButton } from "@app-sdk/components";
import { languageManager } from "@app-sdk/services";

import translation from "./translation";
import styles from "./styles";

export default class SignUpWelcome extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    languageManager.addToTranslation(this, translation);
  }
  render() {
    return (
      <Container style={styles.wrapper}>
        {!this.props.config.statusBar ? <StatusBar hidden /> : undefined}
        <Image
          source={this.props.config.welcomeImage}
          style={styles.topImage}
          resizeMode="center"
        />
        <Text style={styles.text}>
          {languageManager.translate(this, "WELCOME_TITLE")}
        </Text>
        <NavigateButton style={styles.btn} source={this.props.config.homePage}>
          <Text style={styles.btnText}>
            {languageManager.translate(this, "WELCOME_BTN_TITLE")}
          </Text>
        </NavigateButton>
      </Container>
    );
  }
}
