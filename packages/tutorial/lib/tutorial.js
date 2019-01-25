import React from "react";
import { StatusBar } from "react-native";
import Swiper from "react-native-swiper";
import { styles } from "./styles";
import { Button, Container, Image, Text  } from "@app-sdk/components";
import translation from "./translation";
import {  themeManager } from "@app-sdk/services";

export default class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.props.addToTranslation(translation);
  }
  componentDidMount() {
    //SplashScreen.hide();
  }
  onLoginClick = () => {
    this.props.onLoginRequest();
  };
  onSignUpClick = () => {
    this.props.onSignupRequest();
  };
  render() {
    let theme = themeManager.getAppTheme();
    const dotColor =  theme["$color4"];
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
              source={require("./assets/graps.png")}
              style={styles.image}
              resizeMode="center"
            />
            <Text style={styles.slidesTitle}>
              {this.props.doTranslate("TUTORIAL_FIRST_SECTION_TITLE")}
            </Text>
            <Text style={styles.slidesDescription}>
              {this.props.doTranslate("TUTORIAL_FIRST_SECTION_DESCRIPTION")}
            </Text>
          </Container>
          <Container style={styles.slide2}>
            <Image
              source={require("./assets/strobires.png")}
              style={styles.image}
              resizeMode="center"
            />
            <Text style={styles.slidesTitle}>
              {this.props.doTranslate("TUTORIAL_SECOND_SECTION_TITLE")}
            </Text>
            <Text style={styles.slidesDescription}>
              {this.props.doTranslate("TUTORIAL_SECOND_SECTION_DESCRIPTION")}
            </Text>
          </Container>
          <Container style={styles.slide3}>
            <Image
              source={require("./assets/cherry.png")}
              style={styles.image}
              resizeMode="center"
            />
            <Text style={styles.slidesTitle}>
              {this.props.doTranslate("TUTORIAL_THIRD_SECTION_TITLE")}
            </Text>
            <Text style={styles.slidesDescription}>
              {this.props.doTranslate("TUTORIAL_THIRD_SECTION_DESCRIPTION")}
            </Text>
          </Container>
          <Container style={styles.slide4}>
            <Image
              source={require("./assets/watermlone.png")}
              style={styles.image}
              resizeMode="center"
            />
            <Text style={styles.slidesTitle}>
              {this.props.doTranslate("TUTORIAL_FOURTH_SECTION_TITLE")}
            </Text>
            <Text style={styles.slidesDescription}>
              {this.props.doTranslate("TUTORIAL_FOURTH_SECTION_DESCRIPTION")}
            </Text>
          </Container>
        </Swiper>
        <Container style={styles.actionsContainer}>
          <Button style={styles.actionsBtn} onPress={this.onSignUpClick}>
            <Text style={styles.actionsBtnText}>
              {this.props.doTranslate("TUTORIAL_BTN_LOGIN")}
            </Text>
          </Button>
          <Button style={styles.actionsBtn} onPress={this.onSignUpClick}>
            <Text style={styles.actionsBtnText}>
              {this.props.doTranslate("TUTORIAL_BTN_SIGNUP")}
            </Text>
          </Button>
        </Container>
      </Container>
    );
  }
}
