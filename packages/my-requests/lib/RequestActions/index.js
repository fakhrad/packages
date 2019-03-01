import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Container, Button, Text, Spinner } from "@app-sdk/components";

import translation from "./translation";
import styles from "./style";

import { languageManager, navManager } from "@app-sdk/services";

export default class RequestActions extends React.Component {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = {
      selectedRequest: props.params,
      spinner: false
    };
  }
  archive = () => {
    if (!this.state.spinner)
      this.setState({
        spinner: true
      });
  };
  cancel = () => {
    if (!this.state.spinner)
      this.setState({
        spinner: true
      });
  };
  closePicker = () => {
    if (!this.state.spinner) navManager.closeScreen();
  };
  render() {
    return (
      <Container
        style={styles.modalContainer}
        animation="fadeInUp"
        duration={200}
      >
        <Container style={styles.modalTopContainer}>
          <Container style={styles.modalTopTextContainer}>
            <Text style={styles.modalTopText}>
              {languageManager.translate(this, "ACTION_HEADER_TITLE")}
            </Text>
          </Container>
          <Button style={styles.modalTopBtn} onPress={this.archive}>
            <Text style={styles.modalTopBtnText}>
              {languageManager.translate(this, "ACTION_ARCHIVE")}
            </Text>
            <Icon name="archive" style={styles.modalTopBtnIcon} />
          </Button>
          {this.state.selectedRequest.status != "accepted" ? (
            <Button style={styles.modalTopBtn} onPress={this.cancel}>
              <Text style={styles.modalTopBtnText}>
                {languageManager.translate(this, "ACTION_CANCEL")}
              </Text>
              <Icon name="folder" style={styles.modalTopBtnIcon} />
            </Button>
          ) : (
            undefined
          )}
        </Container>
        <Container style={styles.modalBottomContainer}>
          <Button style={styles.modalBtnClose} onPress={this.closePicker}>
            <Spinner
              show={this.state.spinner}
              size="large"
              style={styles.spinner}
            />
            <Text
              style={[
                styles.modalBtnCloseText,
                { display: this.state.spinner ? "none" : "flex" }
              ]}
            >
              {languageManager.translate(this, "CANCEL_BTN")}
            </Text>
          </Button>
        </Container>
      </Container>
    );
  }
}
