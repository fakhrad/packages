import React from "react";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Header,
  Button,
  Text,
  Container,
  BaseComponent,
  Image,
  FlatList,
  ScrollView
} from "@app-sdk/components";
import BackButton from "@app-sdk/advance-components/BackButton";

import styles from "./styles";
import translation from "./translation";
import { languageManager } from "@app-sdk/services";
import Widget from "./widget";

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};
export default class QouteInfo extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = {
      activeSlide: 0,
      flatListScroll: true,
      seller: props.params
    };
  }
  _renderItem = ({ item, index }) => {
    return <Widget data={item} />;
  };
  render() {
    return (
      <Container style={styles.wrapper}>
        <StatusBar hidden />
        <Header style={styles.header}>
          <Container style={styles.headerActions}>
            <BackButton style={styles.backButton} />
          </Container>
        </Header>
        <Container style={styles.userContainer}>
          <Image
            source={{ uri: this.state.seller.image }}
            style={styles.userImage}
          />
          <Container style={styles.userInfo}>
            <Text style={styles.userName}>{this.state.seller.name}</Text>
            <Container style={styles.cityContainer}>
              <Icon name="home" style={styles.cityIcon} />
              <Text style={styles.cityText}>Tehran</Text>
            </Container>
            <Container style={styles.userActions}>
              <Container style={styles.box}>
                <Icon name="cubes" style={styles.icon} />
                <Text style={styles.value}>
                  {this.state.seller.products
                    ? this.state.seller.products.length
                    : 0}
                </Text>
              </Container>
              <Container style={styles.box}>
                <Icon name="home" style={styles.icon} />
                <Text style={styles.value}>Tehran</Text>
              </Container>
            </Container>
          </Container>
        </Container>
        <ScrollView
          style={styles.mainContent}
          scrollEventThrottle={400}
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
            }
          }}
        >
          <Container style={styles.addressContainer}>
            <Text style={styles.addressTitle}>
              {languageManager.translate(this, "ADDRESS")}
            </Text>
            <Text>
              Hey Guys, Here is the student profile screen from my student app
              project. Hope you like it.I’d love{" "}
            </Text>
          </Container>
          <Container style={styles.products}>
            <Text style={styles.productsTitle}>
              {languageManager.translate(this, "PRODUCTS")}
            </Text>
            <FlatList
              data={this.state.seller.products}
              renderItem={this._renderItem}
              keyExtractor={() => Math.random().toString()}
              numColumns={3}
              scrollEnabled={true}
            />
          </Container>
        </ScrollView>
      </Container>
    );
  }
}
