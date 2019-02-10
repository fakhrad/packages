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
      headerColor: themeManager.getAppTheme().$color1
    };
  }
  onSelectTheme(themeName, color) {
    var obj = {
      $name: themeName
    };
    this.setState({
      selectedTheme: obj,
      headerColor: color
    });
  }
  closeModal() {
    navManager.closeScreen();
  }
  changeTheme() {
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
    return (
      <Container style={styles.container}>
        <Button
          style={styles.row}
          onPress={() => this.onSelectTheme("theme1", "#ED553B")}
        >
          <Container style={[styles.right, { backgroundColor: "#ED553B" }]} />
          <Container style={styles.center}>
            <Text style={styles.themeTitle}>
              {languageManager.translate(this, "SETTINGS_THEMES_MODAL_THEME1")}
            </Text>
            <Text style={styles.themeDesc}>
              {languageManager.translate(
                this,
                "SETTINGS_THEMES_MODAL_THEME1_DESC"
              )}
            </Text>
          </Container>
          <Container style={styles.left}>
            <Container
              style={[
                styles.radioButtonBg,
                {
                  backgroundColor:
                    this.state.selectedTheme.$name == "theme1"
                      ? "gray"
                      : "white"
                }
              ]}
            />
          </Container>
        </Button>
        <Button
          style={styles.row}
          onPress={() => this.onSelectTheme("theme2", "#00C9A7")}
        >
          <Container style={[styles.right, { backgroundColor: "#00C9A7" }]} />

          <Container style={styles.center}>
            <Text style={styles.themeTitle}>
              {languageManager.translate(this, "SETTINGS_THEMES_MODAL_THEME2")}
            </Text>
            <Text style={styles.themeDesc}>
              {languageManager.translate(
                this,
                "SETTINGS_THEMES_MODAL_THEME2_DESC"
              )}
            </Text>
          </Container>
          <Container style={styles.left}>
            <Container
              style={[
                styles.radioButtonBg,
                {
                  backgroundColor:
                    this.state.selectedTheme.$name == "theme2"
                      ? "gray"
                      : "white"
                }
              ]}
            />
          </Container>
        </Button>
        <Button
          style={styles.row}
          onPress={() => this.onSelectTheme("theme3", "#D6346B")}
        >
          <Container style={[styles.right, { backgroundColor: "#D6346B" }]} />

          <Container style={styles.center}>
            <Text style={styles.themeTitle}>
              {languageManager.translate(this, "SETTINGS_THEMES_MODAL_THEME3")}
            </Text>
            <Text style={styles.themeDesc}>
              {languageManager.translate(
                this,
                "SETTINGS_THEMES_MODAL_THEME3_DESC"
              )}
            </Text>
          </Container>
          <Container style={styles.left}>
            <Container
              style={[
                styles.radioButtonBg,
                {
                  backgroundColor:
                    this.state.selectedTheme.$name == "theme3"
                      ? "gray"
                      : "white"
                }
              ]}
            />
          </Container>
        </Button>
        <Button
          style={styles.row}
          onPress={() => this.onSelectTheme("theme4", "#DB2B30")}
        >
          <Container style={[styles.right, { backgroundColor: "#DB2B30" }]} />

          <Container style={styles.center}>
            <Text style={styles.themeTitle}>
              {languageManager.translate(this, "SETTINGS_THEMES_MODAL_THEME4")}
            </Text>
            <Text style={styles.themeDesc}>
              {languageManager.translate(
                this,
                "SETTINGS_THEMES_MODAL_THEME4_DESC"
              )}
            </Text>
          </Container>
          <Container style={styles.left}>
            <Container
              style={[
                styles.radioButtonBg,
                {
                  backgroundColor:
                    this.state.selectedTheme.$name == "theme4"
                      ? "gray"
                      : "white"
                }
              ]}
            />
          </Container>
        </Button>
        <Button
          style={styles.row}
          onPress={() => this.onSelectTheme("theme5", "#1E6B3C")}
        >
          <Container style={[styles.right, { backgroundColor: "#1E6B3C" }]} />

          <Container style={styles.center}>
            <Text style={styles.themeTitle}>
              {languageManager.translate(this, "SETTINGS_THEMES_MODAL_THEME5")}
            </Text>
            <Text style={styles.themeDesc}>
              {languageManager.translate(
                this,
                "SETTINGS_THEMES_MODAL_THEME5_DESC"
              )}
            </Text>
          </Container>
          <Container style={styles.left}>
            <Container
              style={[
                styles.radioButtonBg,
                {
                  backgroundColor:
                    this.state.selectedTheme.$name == "theme5"
                      ? "gray"
                      : "white"
                }
              ]}
            />
          </Container>
        </Button>
        <Button
          style={[styles.row, { borderBottomColor: "white" }]}
          onPress={() => this.onSelectTheme("theme6", "#008CCC")}
        >
          <Container style={[styles.right, { backgroundColor: "#008CCC" }]} />

          <Container style={styles.center}>
            <Text style={styles.themeTitle}>
              {languageManager.translate(this, "SETTINGS_THEMES_MODAL_THEME6")}
            </Text>
            <Text style={styles.themeDesc}>
              {languageManager.translate(
                this,
                "SETTINGS_THEMES_MODAL_THEME6_DESC"
              )}
            </Text>
          </Container>
          <Container style={styles.left}>
            <Container
              style={[
                styles.radioButtonBg,
                {
                  backgroundColor:
                    this.state.selectedTheme.$name == "theme6"
                      ? "gray"
                      : "white"
                }
              ]}
            />
          </Container>
        </Button>
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
