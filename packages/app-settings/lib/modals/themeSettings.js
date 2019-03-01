import React from "react";
import { Text, Container, Button, BaseComponent } from "@app-sdk/components";
import styles from "./styles";
import translation from "./themeTranslation";
import {
  navManager,
  themeManager,
  languageManager,
  storageManager
} from "@app-sdk/services";

export default class ThemeSettings extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = {
      selectedTheme: {
        $name: themeManager.getAppTheme().$name
      },
      headerColor: themeManager.getAppTheme().$color1,
      themes: [
        {
          id:"theme1",
          name: "SETTINGS_THEMES_MODAL_THEME1",
          descrption: "SETTINGS_THEMES_MODAL_THEME1_DESC",
          backgroundColor: "#ED553B"
        },
        {
          id: "theme2",
          name: "SETTINGS_THEMES_MODAL_THEME2",
          descrption: "SETTINGS_THEMES_MODAL_THEME2_DESC",
          backgroundColor: "#00C9A7"
        },
        {
          id: "theme3",
          name: "SETTINGS_THEMES_MODAL_THEME3",
          descrption: "SETTINGS_THEMES_MODAL_THEME3_DESC",
          backgroundColor: "#D6346B"
        },
        {
          id: "theme4",
          name: "SETTINGS_THEMES_MODAL_THEME4",
          descrption: "SETTINGS_THEMES_MODAL_THEME4_DESC",
          backgroundColor: "#DB2B30"
        },
        {
          id: "theme5",
          name: "SETTINGS_THEMES_MODAL_THEME5",
          descrption: "SETTINGS_THEMES_MODAL_THEME5_DESC",
          backgroundColor: "#1E6B3C"
        },
        {
          id: "theme6",
          name: "SETTINGS_THEMES_MODAL_THEME6",
          descrption: "SETTINGS_THEMES_MODAL_THEME6_DESC",
          backgroundColor: "#F29F05"
        }
      ]
    };
  }
  onSelectTheme(theme) {
    var obj = {
      $name: theme.id
    };
    this.setState({
      selectedTheme: obj,
      headerColor: theme.backgroundColor
    });
  }
  closeModal() {
    navManager.closeScreen();
  }
  changeTheme() {
    debugger
    if (this.state.selectedTheme.$name != themeManager.getAppTheme().$name) {
      storageManager
        .setItem("appTheme", this.state.selectedTheme.$name)
        .then(() => {
          this.alert(
            languageManager.translate(this, "SETTINGS_SET_THEME_ALERT_TITLE"),
            languageManager.translate(this, "SETTINGS_SET_THEME_ALERT_DESC"),
            languageManager.translate(this, "SETTINGS_SET_THEME_ALERT_BTN_OK"),
            languageManager.translate(this, "SETTINGS_SET_THEME_ALERT_CANCEL"),
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
    const selectedThemeColor = themeManager.getAppTheme().$color5;
    const unSelectedThemeColor = themeManager.getAppTheme().$color2;
    return (
      <Container style={styles.container} animation="zoomIn" duration={200}>
        {this.state.themes.map(theme => {
          return (
            <Button key={theme.name} style={styles.row} onPress={() => this.onSelectTheme(theme)}>
              <Container
                style={[
                  styles.right,
                  { backgroundColor: theme.backgroundColor }
                ]}
              />
              <Container style={styles.center}>
                <Text style={styles.themeTitle}>
                  {languageManager.translate(this, theme.name)}
                </Text>
                <Text style={styles.themeDesc}>
                  {languageManager.translate(this, theme.descrption)}
                </Text>
              </Container>
              <Container style={styles.left}>
                <Container
                  style={[
                    styles.radioButtonBg,
                    {
                      backgroundColor:
                        this.state.selectedTheme.$name == theme.id
                          ? selectedThemeColor
                          : unSelectedThemeColor
                    }
                  ]}
                />
              </Container>
            </Button>
          );
        })}

        {/* actions */}
        <Container
          style={[
            styles.modalHeader,
            { backgroundColor: this.state.headerColor }
          ]}
        >
          <Button
            style={[styles.modaActionBtn, styles.mainAction]}
            onPress={this.changeTheme.bind(this)}
          >
            <Text style={styles.modaActionBtnText}>
              {languageManager.translate(this, "SETTINGS_THEMES_MODAL_BTN_OK")}
            </Text>
          </Button>
          <Button
            style={styles.modaActionBtn}
            onPress={this.closeModal.bind(this)}
          >
            <Text style={styles.modaActionBtnText}>
              {languageManager.translate(
                this,
                "SETTINGS_THEMES_MODAL_BTN_CANCEL"
              )}
            </Text>
          </Button>
        </Container>
      </Container>
    );
  }
}
