import React from "react";
import { Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Header,
  Text,
  Container,
  Image,
  Button,
  BaseComponent,
  ApiButton,
  StringInput
} from "@app-sdk/components";
import BackButton from "@app-sdk/advance-components/BackButton";

import styles from "./styles";
import translation from "./translation";
import {
  authManager,
  languageManager,
  stateManager,
  navManager,
  apiManager
} from "@app-sdk/services";
import ChangeNumber from "./changeNumber";

export default class ProfileSettings extends BaseComponent {
  constructor(props) {
    super(props);
    navManager.registerScreen(undefined, "ChangeNumber", ChangeNumber);
    languageManager.addToTranslation(this, translation);
    stateManager.instance().registerFormState(this, {
      first_name: authManager.instance.currentUser.first_name,
      last_name: authManager.instance.currentUser.last_name,
      address: authManager.instance.currentUser.address
    });
  }

  showChangeNumberPage = () => {
    navManager.startWizard("ChangeNumber", undefined, result => {
      this.notifySuccess(languageManager.translate(this,"PROFILE_CHANGE_NUMBER_SUCCESS"));
    });
  };
  render() {
    const btnIcon =
      languageManager.getCurrentLayout() == "rtl"
        ? "chevron-left"
        : "chevron-right";
    return (
      <Container style={styles.wrapper}>
        {/* header */}
        <Header style={styles.header}>
          <Container style={styles.headerActions}>
            <BackButton />
            <Text style={styles.headerText}>
              {languageManager.translate(this, "PROFILE_SETTINGS_HEADER_TITLE")}
            </Text>
            <Container style={styles.headerImageContainer}>
              <Image
                style={styles.headerImage}
                source={{
                  uri: authManager.instance.currentUser.avatar
                }}
                resizeMode="cover"
              />
            </Container>
          </Container>
        </Header>
        <KeyboardAwareScrollView style={styles.keyView}>
          <Container style={styles.inputContainer}>
            <Text style={styles.inputTitle}>
              {languageManager.translate(this, "PROFILE_SETTINGS_FIRST_NAME")}
            </Text>
            <Container style={styles.elementContainer}>
              <Icon name="user" style={styles.inputIcon} />
              <StringInput
                defaultValue={authManager.instance.currentUser.first_name}
                placeholder={languageManager.translate(
                  this,
                  "PROFILE_SETTINGS_FIRST_NAME_PLACEHOLDER"
                )}
                style={styles.inputElement}
                bind="first_name"
                isRequired={true}
              />
            </Container>
          </Container>
          <Container style={styles.inputContainer}>
            <Text style={styles.inputTitle}>
              {languageManager.translate(this, "PROFILE_SETTINGS_LAST_NAME")}
            </Text>
            <Container style={styles.elementContainer}>
              <Icon name="user" style={styles.inputIcon} />
              <StringInput
                defaultValue={authManager.instance.currentUser.last_name}
                placeholder={languageManager.translate(
                  this,
                  "PROFILE_SETTINGS_LAST_NAME_PLACEHOLDER"
                )}
                style={styles.inputElement}
                bind="last_name"
                isRequired={true}
              />
            </Container>
          </Container>
          <Container style={[styles.inputContainer, styles.addressContainer]}>
            <Text style={styles.inputTitle}>
              {languageManager.translate(this, "PROFILE_SETTINGS_ADDRESS")}
            </Text>
            <Container style={styles.elementContainer}>
              <Icon name="map-marker" style={styles.inputIcon} />
              <StringInput
                defaultValue={authManager.instance.currentUser.address}
                placeholder={languageManager.translate(
                  this,
                  "PROFILE_SETTINGS_ADDRESS_PLACEHOLDER"
                )}
                style={styles.inputElement}
                multiline={true}
                bind="address"
                isRequired={true}
              />
            </Container>
          </Container>
          <Container style={[styles.inputContainer, styles.btn]}>
            <Button
              style={styles.buttonContainer}
              onPress={this.showChangeNumberPage}
            >
              <Text style={styles.buttonText}>
                {languageManager.translate(
                  this,
                  "PROFILE_SETTINGS_CHANGE_NUMBER"
                )}
              </Text>
              <Container style={styles.buttonValueContainer}>
                <Icon name={btnIcon} style={styles.buttonIcon} />
                <Text style={styles.buttonValue}>
                  {authManager.instance.currentUser.phoneNumber}
                </Text>
              </Container>
            </Button>
          </Container>
          <Container style={[styles.inputContainer, styles.btn]}>
            {/* <Text style={styles.inputTitle}>City</Text> */}
            <Button
              style={styles.buttonContainer}
              onPress={() => {
                navManager.showModal("ChooseCity");
              }}
            >
              <Text style={styles.buttonText}>
                {languageManager.translate(
                  this,
                  "PROFILE_SETTINGS_CHANGE_CITY"
                )}
              </Text>
              <Container style={styles.buttonValueContainer}>
                <Icon name={btnIcon} style={styles.buttonIcon} />
                <Text style={styles.buttonValue}>
                  {this.store.userInfo
                    ? this.store.userInfo.city
                      ? this.store.userInfo.city.name[
                          languageManager.getCurrentLanguage().name
                        ]
                      : ""
                    : ""}
                </Text>
              </Container>
            </Button>
          </Container>
        </KeyboardAwareScrollView>
        <ApiButton
          style={styles.btnUpdate}
          action={{ api: "authentication", func: "updateProfile" }}
          onOk={() => {
            this.notifySuccess(
              languageManager.translate(this, "PROFILE_UPDATE_SUCCESS")
            );
          }}
          onConnectionError={() => {
            this.notifyError(
              languageManager.translate(this, "CONNECTION_ERROR")
            );
          }}
          onServerError={() => {
            this.notifyError(
              languageManager.translate(this, "ERROR_INTERNAL_SERVER")
            );
          }}
        >
          <Text style={styles.btnUpdateText}>
            {languageManager.translate(this, "PROFILE_SETTINGS_BTN_UPDATE")}
          </Text>
        </ApiButton>
      </Container>
    );
  }
}
