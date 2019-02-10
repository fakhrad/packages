import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Text,
  Container,
  Button,
  BaseComponent,
  ScrollView
} from "@app-sdk/components";
import styles from "./styles";
import translation from "./langsTranslation";
import {
  languageManager,
  themeManager,
  navManager,
  storageManager
} from "@app-sdk/services";

export default class LangsSettings extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = {
      selectedLang: languageManager.getCurrentLanguage(),
      headerColor: themeManager.getAppTheme().$color1,
      langs: []
    };
  }
  componentDidMount() {
    let l = [];
    const languages = languageManager.getAllLanguages();
    for (const key in languages) {
      l.push(languages[key]);
    }
    this.setState(prevState => ({
      ...prevState,
      langs: l
    }));
  }
  changeLang(lang) {
    this.setState({
      selectedLang: lang
    });
  }
  closeModal() {
    navManager.closeScreen();
  }
  setLang() {
    if (
      this.state.selectedLang.name != languageManager.getCurrentLanguage().name
    ) {
      storageManager
        .setItem("appLanguage", this.state.selectedLang.name)
        .then(() => {
          this.alert(
            languageManager.translate(this, "SETTINGS_SET_LANG_ALERT_TITLE"),
            languageManager.translate(this, "SETTINGS_SET_LANG_ALERT_DESC"),
            languageManager.translate(this, "SETTINGS_SET_LANG_ALERT_BTN_OK"),
            languageManager.translate(this, "SETTINGS_SET_LANG_ALERT_CANCEL"),
            () => {
              this.restart();
            },
            () => navManager.closeScreen()
          );
        });
    } else {
      navManager.closeScreen();
    }
  }
  render() {
    const unSelectedRadioColor = themeManager.getAppTheme().$color2;
    const selectedRadioColor = themeManager.getAppTheme().$color5;
    return (
      <Container style={styles.langsContainer}>
        <ScrollView contentContainerStyle={styles.langScrollContent}>
          {this.state.langs.map(lang => {
            return (
              <Button
                key={lang.name}
                style={styles.langRow}
                onPress={() => this.changeLang(lang)}
              >
                <Container
                  style={[
                    styles.right,
                    {
                      backgroundColor: themeManager.getAppTheme().$color1,
                      justifyContent: "center",
                      alignItems: "center"
                    }
                  ]}
                >
                  <Text style={styles.langTitle}>{lang.name}</Text>
                </Container>
                <Container style={styles.center}>
                  <Text style={styles.themeTitle}>{lang.title}</Text>
                  <Text style={styles.themeDesc}>
                    {languageManager.translate(
                      this,
                      "SETTINGS_LANGS_MODAL_PERSIAN_DESC"
                    )}
                  </Text>
                </Container>
                <Container style={styles.left}>
                  <Container
                    style={[
                      styles.radioButtonBg,
                      {
                        backgroundColor:
                          this.state.selectedLang.name == lang.name
                            ? selectedRadioColor
                            : unSelectedRadioColor
                      }
                    ]}
                  />
                </Container>
              </Button>
            );
          })}
        </ScrollView>
        {/* actions */}
        <Container
          style={[
            styles.modalHeader,
            { backgroundColor: this.state.headerColor }
          ]}
        >
          <Button
            style={[styles.modaActionBtn, styles.mainAction]}
            onPress={this.setLang.bind(this)}
          >
            <Text style={styles.modaActionBtnText}>
              {languageManager.translate(this, "SETTINGS_LANGS_MODAL_BTN_OK")}
            </Text>
          </Button>
          <Button
            style={styles.modaActionBtn}
            onPress={this.closeModal.bind(this)}
          >
            <Text style={styles.modaActionBtnText}>
              {languageManager.translate(
                this,
                "SETTINGS_LANGS_MODAL_BTN_CANCEL"
              )}
            </Text>
          </Button>
        </Container>
      </Container>
    );
  }
}
