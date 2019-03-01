import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import {
  Container,
  Button,
  Text,
  ScrollView,
  Image
} from "@app-sdk/components";

import translation from "./translation";
import styles from "./style";

import { languageManager, navManager } from "@app-sdk/services";

export default class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
  }

  closePicker = () => {
    navManager.closeScreen();
  };
  render() {
    const data = this.props.params;
    return (
      <Container
        style={styles.modalContainer}
        animation="slideInUp"
        duration={200}
      >
        <Container style={styles.modalTopContainer}>
          <ScrollView style={styles.scrollView}>
            <Container style={styles.imageContainer}>
              <Image source={{ uri: data.image }} style={styles.image} />
            </Container>
            <Container style={styles.infos}>
              <Text style={styles.name}>
                {data.name
                  ? data.name[languageManager.getCurrentLanguage().name]
                    ? data.name[languageManager.getCurrentLanguage().name]
                    : data.name
                  : ""}
              </Text>
              <Text style={styles.desc}>
                {data.shortDesc
                  ? data.shortDesc[languageManager.getCurrentLanguage().name]
                    ? data.shortDesc[languageManager.getCurrentLanguage().name]
                    : data.shortDesc
                  : ""}
              </Text>
              <Text style={styles.longDesc}>
                {languageManager.translate(this, "OVERVIEW")}
              </Text>
              <Text style={styles.longDescValue}>
                {data.longDescription
                  ? data.longDescription[
                      languageManager.getCurrentLanguage().name
                    ]
                    ? data.longDescription[
                        languageManager.getCurrentLanguage().name
                      ]
                    : data.longDescription
                  : ""}
              </Text>
            </Container>
          </ScrollView>
        </Container>
        <Container style={styles.modalBottomContainer}>
          <Button style={styles.modalBtnClose} onPress={this.closePicker}>
            <Text style={styles.modalBtnCloseText}>
              {languageManager.translate(this, "IMAGE_PICKER_CANCEL_BTN")}
            </Text>
          </Button>
        </Container>
      </Container>
    );
  }
}
