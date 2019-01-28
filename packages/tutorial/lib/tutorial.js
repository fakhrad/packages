import React from "react";
import { StatusBar } from "react-native";
import Swiper from "react-native-swiper";
import { styles } from "./styles";
import translation from "./translation";
import { Container, Image, Text, NavigateButton } from "@app-sdk/components";
import { themeManager, languageManager } from "@app-sdk/services";

export default class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
  }

  render() {
    let theme = themeManager.getAppTheme();
    const dotColor = theme["$color4"];
    const dotActiveColor = theme["$color2"];
    return (
      <Container style={styles.container}>
        <StatusBar hidden />
        <Swiper
          style={styles.swiper}
          showsButtons={false}
          loop={true}
          dotColor={dotColor}
          activeDotColor={dotActiveColor}
        >
          <Container style={styles.slide1}>
            <Image
              source={
                this.props.config.image1 || require("./assets/watermlone.png")
              }
              style={styles.image}
              resizeMode="center"
            />
            <Text style={styles.slidesTitle}>
              {languageManager.doTranslate(
                this,
                "TUTORIAL_FIRST_SECTION_TITLE"
              )}
            </Text>
            <Text style={styles.slidesDescription}>
              {languageManager.doTranslate(
                this,
                "TUTORIAL_FIRST_SECTION_DESCRIPTION"
              )}
            </Text>
          </Container>
          <Container style={styles.slide2}>
            <Image
              source={
                this.props.config.image2 || require("./assets/cherry.png")
              }
              style={styles.image}
              resizeMode="center"
            />
            <Text style={styles.slidesTitle}>
              {languageManager.doTranslate(
                this,
                "TUTORIAL_SECOND_SECTION_TITLE"
              )}
            </Text>
            <Text style={styles.slidesDescription}>
              {languageManager.doTranslate(
                this,
                "TUTORIAL_SECOND_SECTION_DESCRIPTION"
              )}
            </Text>
          </Container>
          <Container style={styles.slide3}>
            <Image
              source={
                this.props.config.image3 || require("./assets/strobires.png")
              }
              style={styles.image}
              resizeMode="center"
            />
            <Text style={styles.slidesTitle}>
              {languageManager.doTranslate(
                this,
                "TUTORIAL_THIRD_SECTION_TITLE"
              )}
            </Text>
            <Text style={styles.slidesDescription}>
              {languageManager.doTranslate(
                this,
                "TUTORIAL_THIRD_SECTION_DESCRIPTION"
              )}
            </Text>
          </Container>
          <Container style={styles.slide4}>
            <Image
              source={this.props.config.image4 || require("./assets/graps.png")}
              style={styles.image}
              resizeMode="center"
            />
            <Text style={styles.slidesTitle}>
              {languageManager.doTranslate(
                this,
                "TUTORIAL_FOURTH_SECTION_TITLE"
              )}
            </Text>
            <Text style={styles.slidesDescription}>
              {languageManager.doTranslate(
                this,
                "TUTORIAL_FOURTH_SECTION_DESCRIPTION"
              )}
            </Text>
          </Container>
        </Swiper>
        <Container style={styles.actionsContainer}>
          <NavigateButton
            style={styles.actionsBtn}
            source={this.props.config.loginPage}
          >
            <Text style={styles.actionsBtnText}>
              {languageManager.doTranslate(this, "TUTORIAL_BTN_LOGIN")}
            </Text>
          </NavigateButton>

          <NavigateButton
            style={styles.actionsBtn}
            source={this.props.config.signUpPage}
          >
            <Text style={styles.actionsBtnText}>
              {languageManager.doTranslate(this, "TUTORIAL_BTN_SIGNUP")}
            </Text>
          </NavigateButton>
        </Container>
      </Container>
    );
  }
}
