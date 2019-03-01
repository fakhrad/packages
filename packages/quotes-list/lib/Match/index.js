import React from "react";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Text,
  Container,
  BaseComponent,
  Image,
  Button
} from "@app-sdk/components";

import styles from "./styles";
import translation from "./translation";
import { languageManager, navManager } from "@app-sdk/services";

export default class Match extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = {
      selectedItem: props.params
    };
  }
  backToQoutes = () => {
    navManager.closeScreen();
  };
  render() {
    return (
      <Container style={styles.wrapper} animation="fadeIn" duration={200}>
        <Container style={styles.mainContent}>
          <Text style={styles.title}>
            {languageManager.translate(this, "TITLE")}
          </Text>
          <Text style={styles.desc}>
            {languageManager.translate(this, "DESCRIPTION")}
          </Text>
          <Container style={styles.images}>
            <Image
              source={{uri : this.state.selectedItem.product.image}}
              style={styles.image}
            />
            <Image
              source={ { uri : this.state.selectedItem.vendor.image}}
              style={styles.image}
            />
          </Container>
          <Container style={styles.values}>
            <Text style={styles.weight}>
              {this.state.selectedItem.request.weight} kg
            </Text>
            <Text style={styles.fee}>
              {this.state.selectedItem.price} Toman
            </Text>
          </Container>

          <Container style={styles.actions}>
            <Button style={styles.actionBtn}>
              <Icon name="phone" style={styles.actionBtnIcon} />
              <Text style={styles.actionBtnText}>
                {languageManager.translate(this, "CALL_SELLER")}
              </Text>
            </Button>
            <Button style={styles.actionBtn} onPress={this.backToQoutes}>
              <Icon name="user" style={styles.actionBtnIcon} />
              <Text style={styles.actionBtnText}>
                {languageManager.translate(this, "KEPP_PLAYING")}
              </Text>
            </Button>
          </Container>
        </Container>
      </Container>
    );
  }
}
