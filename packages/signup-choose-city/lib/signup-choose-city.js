import React from "react";
import { Alert, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Button,
  Container,
  Text,
  Image,
  ApiButton,
  ChooseCity
} from "@app-sdk/components"; // public components
import styles from "./styles";
import translation from "./translation";
import { languageManager, navManager, stateManager } from "@app-sdk/services";

export default class SignUpChooseCity extends React.Component {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    stateManager.instance.registerFormState(this, { cityCode: "" });
    this.state = {
      selectedCity: {
        cityCode: null,
        name: {
          fa: languageManager.translate(this, "SIGNUP_INFO_CITY_NAME"),
          en: languageManager.translate(this, "SIGNUP_INFO_CITY_NAME")
        }
      }
    };
  }
  onSelectCity = city => {
    this.setState(
      {
        selectedCity: city
      },
      () => {
        stateManager.instance.setValue(
          "cityCode",
          this.state.selectedCity.cityCode
        );
        stateManager.instance.setDirty("cityCode", false);
      }
    );
  };
  render() {
    return (
      <Container style={styles.scrollKeyboardContainer}>
        {!this.props.config.statusBar ? <StatusBar hidden /> : ""}
        <Container style={styles.top}>
          <Icon name="angle-up" style={styles.topIcon} />
          <Image source={require("./assets/m-v.png")} style={styles.topImage} />
          <Text style={styles.topText}>
            {languageManager.translate(this, "SIGNUP_INFO_TITLE")}
          </Text>
        </Container>
        <Container style={styles.bottom}>
          <Button
            style={styles.chooseCity}
            onPress={() =>
              navManager.showInModal(
                ChooseCity,
                this.state.selectedCity,
                this.onSelectCity,
                "center"
              )
            }
          >
            <Image
              source={require("./assets/city.png")}
              style={styles.chooseCityImage}
            />
            <Text style={styles.chooseCityText}>
              {
                this.state.selectedCity.name[
                  languageManager.getCurrentLanguage().name
                ]
              }
            </Text>
          </Button>
          <ApiButton
            style={styles.bottomBtn}
            action={{ api: "authentication", func: "changeCity" }}
            onOk={res =>
              navManager.openScreen(
                this.props.config.changeCitySuccessPage,
                res
              )
            }
          >
            <Text style={styles.bottomBtnText}>
              {languageManager.translate(this, "SIGNUP_INFO_BTN_TEXT")}
            </Text>
          </ApiButton>
        </Container>
      </Container>
    );
  }
}
