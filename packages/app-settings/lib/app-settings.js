import React from "react";
import { StatusBar } from "react-native";
import RNRestart from "react-native-restart";
import {
  Header,
  Text,
  Container,
  Button,
  Switch,
  ScrollView,
  BaseComponent
} from "@app-sdk/components";
import BackButton from "@app-sdk/advance-components/BackButton";
import styles from "./styles";
import translation from "./translation";
import {
  languageManager,
  themeManager,
  storageManager,
  authManager,
  navManager,
  apiManager
} from "@app-sdk/services";

const ThemeModal = require("./modals/themeSettings").default;
const LangsModal = require("./modals/langSettings").default;

export default class Settings extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = {
      notifyValue: authManager.instance.currentUser
        ? authManager.instance.currentUser.notification
        : true,
      currentLang: languageManager.getCurrentLanguage().title
    };
  }

  // change user notification
  onChangeNotification(value) {
    this.setState(
      {
        notifyValue: value
      },
      () => {
        const chkValue = this.state.notifyValue;
        debugger;
        const changeNotification = apiManager.instance.get(
          "authentication",
          "changeNotification"
        );
        changeNotification()
          .onServerError(res => {
            this.setState({
              notifyValue: !this.state.notifyValue
            });
            this.notifyError(
              languageManager.translate(this, "ERROR_INTERNAL_SERVER")
            );
          })
          .notFound(res => {
            this.setState({
              notifyValue: !this.state.notifyValue
            });
          })
          .unAuthorized(res => {
            this.setState({
              notifyValue: !this.state.notifyValue
            });
          })
          .onConnectionError(() => {
            this.setState({
              notifyValue: !this.state.notifyValue
            });
            this.notifyError(
              languageManager.translate(this, "CONNECTION_ERROR")
            );
          })
          .call(chkValue);
      }
    );
  }
  deleteAccount() {
    this.alert(
      languageManager.translate(this, "SETTINGS_DELETE_ACCOUNT_ALERT_TITLE"),
      languageManager.translate(this, "SETTINGS_DELETE_ACCOUNT_ALERT_DESC"),
      languageManager.translate(this, "SETTINGS_DELETE_ACCOUNT_ALERT_BTN_OK"),
      languageManager.translate(this, "SETTINGS_DELETE_ACCOUNT_ALERT_CANCEL"),
      () => {
        const deleteAccount = apiManager.instance.get(
          "authentication",
          "deleteAccount"
        );
        if (deleteAccount) {
          deleteAccount()
            .onOk(() => {
              storageManager.removeItem("appTheme").then(() => {
                storageManager.removeItem("appLanguage").then(() => {
                  this.restart();
                });
              });
            })
            .onConnectionError(() => {
              this.notifyError(
                languageManager.translate(this, "CONNECTION_ERROR")
              );
            })
            .onServerError(() => {
              this.notifyError(
                languageManager.translate(this, "ERROR_INTERNAL_SERVER")
              );
            })
            .call();
        }
      }
    );
  }
  render() {
    return (
      <Container style={styles.wrapper}>
        {!this.props.config.statusBar ? <StatusBar hidden /> : undefined}
        {/* header */}
        <Header style={styles.header}>
          <Container style={styles.headerActions}>
            <BackButton />
            <Text style={styles.headerText}>
              {languageManager.translate(this, "SETTINGS_HEADER_TITLE")}
            </Text>
          </Container>
        </Header>
        <ScrollView style={styles.keyView}>
          {/* DISPLAY NAME */}
          <Container style={styles.container}>
            <Container style={styles.left}>
              <Text style={styles.title}>
                {languageManager.translate(this, "SETTINGS_DISPLAY_NAME")}
              </Text>
              <Text style={styles.description}>
                {languageManager.translate(this, "SETTINGS_DISPLAY_NAME_DESC")}
              </Text>
            </Container>
            <Container style={styles.right} />
          </Container>
          {/* NOTIFICATION */}
          <Container style={styles.container}>
            <Container style={styles.left}>
              <Text style={styles.title}>
                {languageManager.translate(this, "SETTINGS_PUSH_NOTIFICATION")}
              </Text>
            </Container>
            <Container style={[styles.right]}>
              <Switch
                changeValueImmediately={true}
                style={{ marginLeft: -10 }}
                value={this.state.notifyValue}
                onValueChange={value => this.onChangeNotification(value)}
              />
            </Container>
          </Container>
          {/* THEME  */}
          <Button
            style={styles.container}
            onPress={() => navManager.showInModal(ThemeModal)}
          >
            <Container style={styles.left}>
              <Text style={styles.title}>
                {languageManager.translate(this, "SETTINGS_THEME_TITLE")}
              </Text>
              <Text style={styles.description}>
                {languageManager.translate(this, "SETTINGS_THEME_DESC")}
              </Text>
            </Container>
            <Container style={[styles.right, { paddingRight: 5 }]}>
              <Button
                style={[
                  styles.btnTheme,
                  {
                    backgroundColor: themeManager.getAppTheme().$color1
                  }
                ]}
              />
            </Container>
          </Button>
          {/* LANGUAGE */}
          <Button
            style={styles.container}
            onPress={() => navManager.showInModal(LangsModal)}
          >
            <Container style={styles.left}>
              <Text style={styles.title}>
                {languageManager.translate(this, "SETTINGS_LANGUGAGE")}
              </Text>
              <Text style={styles.description}>
                {languageManager.translate(this, "SETTINGS_LANGUGAGE_DESC")}
              </Text>
            </Container>
            <Container style={[styles.right, { paddingRight: 10 }]}>
              <Text style={styles.rightText}>{this.state.currentLang}</Text>
            </Container>
          </Button>
          {/* DELETE ACCOUNT */}
          <Button
            style={styles.container}
            onPress={this.deleteAccount.bind(this)}
          >
            <Container style={styles.left}>
              <Text style={styles.title}>
                {languageManager.translate(this, "SETTINGS_DELETE_ACCOUNT")}
              </Text>
              <Text style={styles.description}>
                {languageManager.translate(
                  this,
                  "SETTINGS_DELETE_ACCOUNT_DESC"
                )}
              </Text>
            </Container>
            <Container style={styles.right} />
          </Button>
        </ScrollView>
      </Container>
    );
  }
}
