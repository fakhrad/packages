import React from "react";
import { Alert, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Button,
  Container,
  Text,
  Image,
  BaseComponent,
  Spinner,
  StringInput
} from "@app-sdk/components"; // public components
import styles from "./styles";
import translation from "./translation";
import {
  languageManager,
  navManager,
  stateManager,
  themeManager
} from "@app-sdk/services";

export default class SignUpChooseCity extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    stateManager.instance().registerFormState(this, { cityCode: "" });
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
    this.setState({
      selectedCity: city
    });
  };
  navToSuccess = () => {
    if (this.state.selectedCity.cityCode != null) {
      navManager.openScreen(this.props.config.changeCitySuccessPage);
    } else {
      this.notifyWarning(this, "UNLELECTED_CITY");
    }
  };
  openCitiesModal = () => {
    navManager.showModal(
      "ChooseCity",
      this.state.selectedCity,
      this.onSelectCity
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
          <Container style={{ flex: 1 }}>
            <StringInput
              placeholder={languageManager.translate(
                this,
                "FIRST_NAME_PLACEHOLDER"
              )}
              style={styles.inputContainer}
              bind="last_name"
              isRequired={true}
              placeholderTextColor={themeManager.getAppTheme().$color5}
            />
            <StringInput
              placeholder={languageManager.translate(
                this,
                "LAST_NAME_PLACEHOLDER"
              )}
              style={styles.inputContainer}
              bind="last_name"
              isRequired={true}
              placeholderTextColor={themeManager.getAppTheme().$color5}
            />

            <Button style={styles.chooseCity} onPress={this.openCitiesModal}>
              <Text style={styles.chooseCityText}>
                {
                  this.state.selectedCity.name[
                    languageManager.getCurrentLanguage().name
                  ]
                }
              </Text>
              <Icon name="ellipsis-v" style={styles.btnCityIcon} />
            </Button>
          </Container>
          <Button style={styles.bottomBtn} onPress={this.navToSuccess}>
            <Spinner
              size="small"
              show={this.state.spinner}
              style={styles.spinner}
            />
            <Text style={styles.bottomBtnText}>
              {languageManager.translate(this, "SIGNUP_INFO_BTN_TEXT")}
            </Text>
          </Button>
        </Container>
      </Container>
    );
  }
}
