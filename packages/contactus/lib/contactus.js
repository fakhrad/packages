import React from "react";
import { Linking, StatusBar } from "react-native";
import {
  Header,
  Text,
  Container,
  BackButton,
  Image,
  ScrollView
} from "@app-sdk/components";
import styles from "./styles";
import translatation from "./translation";
import { languageManager } from "@app-sdk/services";

export default class ContactUS extends React.Component {
  state = {
    anim:
      languageManager.getCurrentLayout() == "rtl"
        ? "bounceInRight"
        : "bounceInLeft"
  };
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translatation);
  }

  render() {
    return (
      <Container style={styles.wrapper}>
        {!this.props.config.statusBar ? <StatusBar hidden /> : undefined}
        {/* header */}
        <Header style={styles.header}>
          <Container style={styles.headerActions}>
            <BackButton screen />
            <Text style={styles.headerText}>
              {languageManager.translate(this, "CONTACT_US_HEADER_TITLE")}
            </Text>
          </Container>
          <Container style={styles.headerBody}>
            <Text style={styles.title}>
              {languageManager.translate(this, "CONTACT_US_TITLE")}
            </Text>
            <Text style={styles.desc}>
              {languageManager.translate(this, "CONTACT_US_DESCRIPTION")}
            </Text>
            <Image
              source={require("./assets/contact.png")}
              style={styles.image}
            />
          </Container>
        </Header>
        <ScrollView contentContainerStyle={styles.content}>
          {this.props.content.map((item, index) => {
            return (
              <Container
                key={index}
                style={styles.container}
                animation={this.state.anim}
                delay={(index + 1) * 10}
              >
                <Text style={styles.containerTitle}>
                  {languageManager.translate(this, item.name)}
                </Text>
                <Text style={styles.containerValue}>
                  {languageManager.translate(this, item.value)}
                </Text>
              </Container>
            );
          })}
        </ScrollView>
      </Container>
    );
  }
}
