import React from "react";
import { StatusBar } from "react-native";
import Swiper from "react-native-swiper";
import { Text, Container, Image, BaseComponent } from "@app-sdk/components";
import BackButton from "@app-sdk/advance-components/BackButton";
import styles from "./styles";
import { themeManager, languageManager } from "@app-sdk/services";

export default class HelpItemViewer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = { slides: props.params };
  }
  render() {
    return (
      <Container style={styles.container}>
        <BackButton />
        <StatusBar hidden />
        <Swiper
          style={styles.swiper}
          showsButtons={false}
          dotColor={themeManager.getAppTheme().$color4}
          activeDotColor={themeManager.getAppTheme().$color2}
        >
          {this.state.slides.map((slide, i) => {
            var image = require("./../assets/img/1-en.png");
            return (
              <Container style={styles.slide} key={i}>
                <Image source={image} style={styles.slideImage} />
                <Text style={styles.slideText}>
                  {slide.text[languageManager.getCurrentLanguage().name]}
                </Text>
              </Container>
            );
          })}
        </Swiper>
      </Container>
    );
  }
}
