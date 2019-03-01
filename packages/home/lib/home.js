import React from "react";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as Animatable from "react-native-animatable";

import { Header, Container, Button, Image, Text } from "@app-sdk/components";
import { languageManager, navManager } from "@app-sdk/services";
import translation from "./translation";
import style from "./styles";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
  }

  openSideMenu() {
    navManager.openSide(this);
  }
  newRequest = () => {
    navManager.openScreen("NewRequest");
  };
  myRequests = () => {
    navManager.openScreen("MyRequests");
  };
  openHelpSection = () => {
    navManager.openScreen("Help");
  };
  showQouts = () => navManager.openScreen("Qoutes");
  showOrders = () => navManager.openScreen("MyOrders");
  render() {
    const toggleNavIconName =
      languageManager.getCurrentLayout() == "rtl"
        ? "align-right"
        : "align-left";
    return (
      <Container style={{ flex: 1, backgroundColor: "transparent" }}>
        <StatusBar hidden />
        <Header style={style.header}>
          <Container style={style.headerContainer}>
            <Button
              style={style.headerLeft}
              onPress={this.openSideMenu.bind(this)}
            >
              <Container style={style.toggleBtn}>
                <Icon name={toggleNavIconName} style={style.headerIcon} />
              </Container>
            </Button>
            <Container style={style.headerRight}>
              <Button
                style={style.headerBtn}
                animation="zoomIn"
                onPress={this.showQouts}
              >
                <Icon
                  name="bell"
                  style={[style.headerIcon, style.headerIconBell]}
                />
              </Button>
              <Button style={style.headerBtn} onPress={this.openHelpSection}>
                <Icon
                  name="question-circle"
                  style={[style.headerIcon, style.headerIconInfo]}
                />
              </Button>
            </Container>
          </Container>
        </Header>
        <Container style={style.body}>
          <Container
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "transparent"
            }}
          >
            <Image
              source={this.props.config.centerImage}
              style={style.homeImage}
              resizeMode="contain"
            />
          </Container>
          <Container style={{ padding: "6%", backgroundColor: "transparent" }}>
            <Animatable.Text animation="fadeIn" style={style.homeTitle}>
              {languageManager.translate(this, "HOME_TITLE")}
            </Animatable.Text>
            <Animatable.Text animation="fadeIn" style={style.homeDescription}>
              {languageManager.translate(this, "HOME_DESCRIPTION")}
            </Animatable.Text>
          </Container>
          <Container style={style.btnContainer}>
            <Container style={style.homeBtn} animation="slideInUp">
              <Button
                style={{ backgroundColor: "transparent" }}
                onPress={this.myRequests}
              >
                <Container style={style.homeBtnContainer}>
                  <Icon name="industry" style={style.homeBtnIcon} />
                  <Text style={style.homeBtnText}>
                    {languageManager.translate(
                      this,
                      "HOME_ACTIONS_MY_REQUESTS"
                    )}
                  </Text>
                </Container>
              </Button>
            </Container>
            <Container style={style.homeBtn} animation="slideInUp" delay={20}>
              <Button
                style={{ backgroundColor: "transparent" }}
                onPress={this.newRequest}
              >
                <Container style={style.homeBtnContainer}>
                  <Icon name="cart-plus" style={style.homeBtnIcon} />
                  <Text style={style.homeBtnText}>
                    {languageManager.translate(
                      this,
                      "HOME_ACTIONS_NEW_REQUESTIONS"
                    )}
                  </Text>
                </Container>
              </Button>
            </Container>
            <Container style={style.homeBtn} animation="slideInUp" delay={40}>
              <Button
                style={{ backgroundColor: "transparent" }}
                onPress={this.showOrders}
              >
                <Container style={style.homeBtnContainer}>
                  <Icon name="archive" style={style.homeBtnIcon} />
                  <Text style={style.homeBtnText}>
                    {languageManager.translate(this, "HOME_ACTIONS_MY_ORDERS")}
                  </Text>
                </Container>
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}
