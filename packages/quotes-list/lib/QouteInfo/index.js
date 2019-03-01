import React from "react";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Button,
  Text,
  Container,
  BaseComponent,
  Image,
  Header,
  ScrollView,
  DateText
} from "@app-sdk/components";
import BackButton from "@app-sdk/advance-components/BackButton";

import styles from "./styles";
import translation from "./translation";
import { languageManager, navManager, themeManager } from "@app-sdk/services";
import Widget from "./widget";

export default class QouteInfo extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = {
      activeSlide: 1,
      selectedItem: props.params
    };
  }
  showSellerProfile = () => {
    navManager.openScreen("SellerProfile", this.state.selectedItem.vendor);
  };
  _onMomentumScrollEnd = (e, state, context) => {
    this.setState(prevState => ({
      ...prevState,
      activeSlide: context.state.index + 1
    }));
  };
  render() {
    const chevron =
      languageManager.getCurrentLayout() == "rtl"
        ? "chevron-left"
        : "chevron-right";
    return (
      <Container style={styles.wrapper}>
        <Header style={styles.header}>
          <Container style={styles.headerActions}>
            <BackButton style={styles.backButton} />
            <Text style={styles.headerText}>
              {languageManager.translate(this, "HEADER_TITLE")}
            </Text>
          </Container>
        </Header>
        <ScrollView style={styles.mainContent}>
          <Container style={styles.product}>
            <Container style={styles.productImg}>
              <Swiper
                showsButtons={false}
                loop={true}
                showsPagination={false}
                onMomentumScrollEnd={this._onMomentumScrollEnd}
              >
                {this.state.selectedItem.images.map(item => {
                  return <Widget key={Math.random()} data={item} />;
                })}
              </Swiper>
            </Container>
            <Container style={styles.productTextContainer}>
              <Text style={styles.productTitle}>
                {languageManager.translate(this, "ORDERED_PRODUCT")}
              </Text>
              <Text style={styles.paging}>
                {this.state.activeSlide}/{this.state.selectedItem.images.length}
              </Text>
              <Text
                style={[
                  styles.productName,
                  {
                    marginVertical:
                      languageManager.getCurrentLayout() === "ltr" ? 5 : 0
                  }
                ]}
              >
                {this.state.selectedItem.product.name
                  ? this.state.selectedItem.product.name[
                      languageManager.getCurrentLanguage().name
                    ]
                    ? this.state.selectedItem.product.name[
                        languageManager.getCurrentLanguage().name
                      ]
                    : this.state.selectedItem.product.name
                  : ""}
              </Text>
              <Text style={styles.productDesc}>
                {this.state.selectedItem.request.weight} kg
              </Text>
            </Container>
          </Container>
          <Button style={styles.SellerBtn} onPress={this.showSellerProfile}>
            <Image
              source={{ uri: this.state.selectedItem.vendor.image }}
              style={styles.SellerBtnImg}
            />
            <Text style={styles.SellerBtnText}>
              {this.state.selectedItem.vendor.name}
            </Text>
            <Icon name={chevron} style={styles.SellerBtnArrow} />
          </Button>
          <Text style={styles.requestBoxTitle}>
            {languageManager.translate(this, "QOUTE_INFO")}
          </Text>
          <Container style={styles.requestInfo}>
            <Container style={styles.requestInfo_top}>
              <Container style={styles.top_left}>
                <Container style={styles.left_number}>
                  <Text style={styles.left_number_text}>1</Text>
                </Container>
              </Container>
              <Container style={styles.top_center}>
                <Text style={styles.center_title}>
                  {this.state.selectedItem.product.name
                    ? this.state.selectedItem.product.name[
                        languageManager.getCurrentLanguage().name
                      ]
                      ? this.state.selectedItem.product.name[
                          languageManager.getCurrentLanguage().name
                        ]
                      : this.state.selectedItem.product.name
                    : ""}
                </Text>
                <DateText
                  style={styles.center_desc}
                  date={this.state.selectedItem.request.date}
                />
              </Container>
              <Container style={styles.top_right}>
                <Text style={styles.right_text}>
                  {this.state.selectedItem.price} Rial
                </Text>
              </Container>
            </Container>
            <Container style={styles.requestInfo_bottom}>
              <Container style={styles.row}>
                <Text style={styles.rowTitle}>
                  {languageManager.translate(this, "ORDER_DATE")}
                </Text>
                <DateText
                  style={styles.rowValue}
                  date={this.state.selectedItem.request.date}
                />
              </Container>
              <Container style={styles.row}>
                <Text style={styles.rowTitle}>
                  {languageManager.translate(this, "QOUTE_DATE")}
                </Text>
                <DateText
                  style={styles.rowValue}
                  date={this.state.selectedItem.date}
                />
              </Container>
              <Container style={styles.row}>
                <Text style={styles.rowTitle}>
                  {languageManager.translate(this, "WEIGHT")}
                </Text>
                <Text>{this.state.selectedItem.request.weight} kg</Text>
              </Container>
              <Container style={styles.row}>
                <Text style={styles.rowTitle}>
                  {languageManager.translate(this, "PAYMENT")}
                </Text>
                <Text style={styles.rowValue}>
                  {this.state.selectedItem.request.payment}
                </Text>
              </Container>
              <Container style={styles.row}>
                <Text style={styles.rowTitle}>
                  {languageManager.translate(this, "NOTE")}
                </Text>
                <Text style={styles.rowValue} numberOfLines={1}>
                  {this.state.selectedItem.note}
                </Text>
              </Container>
            </Container>
          </Container>
        </ScrollView>
      </Container>
    );
  }
}
