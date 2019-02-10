import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import {
  Container,
  Button,
  Text,
  Image,
  ScrollView,
  BaseComponent
} from "@app-sdk/components";
import {
  languageManager,
  stateManager,
  navManager,
  authManager
} from "@app-sdk/services";
import styles from "./styles";
import translation from "./translation";

export default class SideMenu extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
  }

  render() {
    return (
      <Container style={styles.sideMenu}>
        <Container style={styles.header}>
          <Container style={styles.imageContainer}>
            <Image
              source={{
                uri:
                  (authManager.instance.currentUser
                    ? authManager.instance.currentUser.avatar
                    : "https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png") ||
                  "https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png"
              }}
              style={styles.userImage}
              resizeMode="cover"
            />
          </Container>
          <Container style={styles.userInfo}>
            <Text style={styles.userName}>
              {authManager.instance.currentUser
                ? authManager.instance.currentUser.name
                : ""}
            </Text>
            <Text style={styles.phoneNumber}>
              {authManager.instance.currentUser
                ? authManager.instance.currentUser.phoneNumber
                : ""}
            </Text>
          </Container>
        </Container>
        <ScrollView contentContainerStyle={styles.body}>
          {this.props.config.items.map(item => {
            return (
              <Button
                key={item.name}
                style={styles.navItem}
                onPress={() => {
                  navManager.closeSide(this);
                  if (item.action) item.action();
                  else navManager.openScreen(item.link);
                }}
              >
                <Container style={styles.iconContainer}>
                  <Icon name={item.icon} style={styles.navItemIcon} />
                </Container>
                <Text style={styles.navItemText}>
                  {languageManager.translate(this, item.name)}
                </Text>
              </Button>
            );
          })}
        </ScrollView>
      </Container>
    );
  }
}
