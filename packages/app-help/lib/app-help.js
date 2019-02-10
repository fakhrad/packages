import React from "react";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Header,
  Text,
  Container,
  Button,
  FlatList,
  Image,
  BaseComponent
} from "@app-sdk/components";
import BackButton from "@app-sdk/advance-components/BackButton";

import styles from "./styles";
import translation from "./translation";
import { languageManager, navManager } from "@app-sdk/services";

const HelpItemViewer = require("./itemViewer").default;

export default class Help extends BaseComponent {
  constructor(props) {
    super(props);
    navManager.registerScreen(undefined, "HelpItemViewer", HelpItemViewer);
    languageManager.addToTranslation(this, translation);
    this.state = {
      data: [],
      anim:
        languageManager.getCurrentLayout() == "rtl"
          ? "bounceInRight"
          : "bounceInLeft",
      isLoading: true
    };
  }

  _renderItem = ({ item, index }) => (
    <Container style={styles.helpRowContainer} animation={this.state.anim}>
      <Button
        style={styles.helpRow}
        onPress={() => navManager.showModal("HelpItemViewer", item.slides)}
      >
        <Container style={styles.iconContainer}>
          <Icon name={item.icon} style={styles.helpRowIcon} />
        </Container>
        <Text style={styles.title}>
          {item.title[languageManager.getCurrentLanguage().name]}
        </Text>
        <Text style={styles.action}>
          {languageManager.translate(this, "HELP_ITEMS_VIEW")}
        </Text>
      </Button>
    </Container>
  );
  render() {
    return (
      <Container style={styles.wrapper}>
        {!this.props.config.statusBar ? <StatusBar hidden /> : ""}
        {/* header */}
        <Header style={styles.header}>
          <Container style={styles.headerActions}>
            <BackButton />
            <Text style={styles.headerText}>
              {languageManager.translate(this, "HELP_HEADER_TITLE")}
            </Text>
          </Container>
          <Container style={styles.headerBody}>
            <Text style={styles.headerContentTitle}>
              {languageManager.translate(this, "HELP_CONTENT_TITLE")}
            </Text>
            <Text style={styles.headerContentDesc}>
              {languageManager.translate(this, "HELP_CONTENT_DESCRIPTION")}
            </Text>
            <Image
              source={require("./assets/img/appHelp.png")}
              style={styles.headerContentImg}
            />
          </Container>
        </Header>
        <Container style={styles.container}>
          <FlatList
            contentContainerStyle={styles.flatListContainer}
            data={this.props.config.items}
            renderItem={this._renderItem}
            keyExtractor={item => item.name}
          />
        </Container>
      </Container>
    );
  }
}
