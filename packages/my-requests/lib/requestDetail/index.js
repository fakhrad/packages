import React from "react";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Header,
  Text,
  Container,
  Button,
  Switch,
  ScrollView,
  BaseComponent,
  Image,
  FlatList,
  SectionList,
  DateText
} from "@app-sdk/components";
import BackButton from "@app-sdk/advance-components/BackButton";
import styles from "./styles";
import translation from "./translation";
import {
  languageManager,
  themeManager,
  storageManager,
  authManager,
  navManager,
  apiManager
} from "@app-sdk/services";

export default class RequestDetail extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = {
      selectedRequest: props.params != undefined ? props.params : {}
    };
  }
  componentDidMount() {}
  closePage = () => navManager.closeScreen();
  showQoutes = () =>
    navManager.openScreen("Qoutes", this.state.selectedRequest);
  showSellerProfile = () => {
    navManager.openScreen(
      "SellerProfile",
      this.state.selectedRequest.qoute.vendor
    );
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
              {languageManager.translate(this, "REQUEST_DETAIL_HEADER_TITLE")}
            </Text>
          </Container>
        </Header>
        <ScrollView
          style={styles.mainContent}
          showsVerticalScrollIndicator={false}
        >
          <Container style={styles.product}>
            <Image
              source={{ uri: this.state.selectedRequest.image }}
              style={styles.productImg}
            />
            <Container style={styles.productTextContainer}>
              <Text style={styles.productTitle}>
                {languageManager.translate(this, "PRODUCT_NAME")}
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
                {this.state.selectedRequest.name[
                  languageManager.getCurrentLanguage().name
                ]
                  ? this.state.selectedRequest.name[
                      languageManager.getCurrentLanguage().name
                    ]
                  : this.state.selectedRequest.name}
              </Text>
              <Text style={styles.productDesc}>
                {this.state.selectedRequest.description[
                  languageManager.getCurrentLanguage().name
                ]
                  ? this.state.selectedRequest.description[
                      languageManager.getCurrentLanguage().name
                    ]
                  : this.state.selectedRequest.description}
              </Text>
            </Container>
          </Container>
          <Button style={styles.offersBtn} onPress={this.showQoutes}>
            <Icon name="users" style={styles.offersBtnIcon} />
            <Text style={styles.offersBtnText}>
              {languageManager.translate(this, "QOUTES")}
            </Text>
            <Icon name={chevron} style={styles.offersBtnArrow} />
          </Button>
          <Text style={styles.requestBoxTitle}>
            {languageManager.translate(this, "REQUEST_DETAIL")}
          </Text>
          {/* request info */}
          <Container style={styles.requestInfo}>
            <Container style={styles.requestInfo_top}>
              <Container style={styles.top_left}>
                <Container style={styles.left_number}>
                  <Text style={styles.left_number_text}>1</Text>
                </Container>
              </Container>
              <Container style={styles.top_center}>
                <Text style={styles.center_title}>
                  {this.state.selectedRequest.name[
                    languageManager.getCurrentLanguage().name
                  ]
                    ? this.state.selectedRequest.name[
                        languageManager.getCurrentLanguage().name
                      ]
                    : this.state.selectedRequest.name}
                </Text>
                <Text style={styles.center_desc}>
                  {this.state.selectedRequest.description[
                    languageManager.getCurrentLanguage().name
                  ]
                    ? this.state.selectedRequest.description[
                        languageManager.getCurrentLanguage().name
                      ]
                    : this.state.selectedRequest.description}
                </Text>
              </Container>
              <Container style={styles.top_right}>
                <Text style={styles.right_text}>
                  {this.state.selectedRequest.weight}
                </Text>
              </Container>
            </Container>
            <Container style={styles.requestInfo_bottom}>
              <Container style={styles.row}>
                <Text style={styles.rowTitle}>
                  {languageManager.translate(this, "REQUEST_DETAIL_DATE")}
                </Text>
                <DateText
                  style={styles.rowValue}
                  date={this.state.selectedRequest.date}
                />
              </Container>
              <Container style={styles.row}>
                <Text style={styles.rowTitle}>
                  {languageManager.translate(this, "REQUEST_DETAIL_WEIGHT")}
                </Text>
                <Text>{this.state.selectedRequest.weight}</Text>
              </Container>

              <Container style={styles.row}>
                <Text style={styles.rowTitle}>
                  {languageManager.translate(this, "REQUEST_DETAIL_STATUS")}
                </Text>
                <Text style={styles.rowValue}>
                  {this.state.selectedRequest.status}
                </Text>
              </Container>
              <Container style={styles.row}>
                <Text style={styles.rowTitle}>
                  {languageManager.translate(this, "REQUEST_DETAIL_QOUTES")}
                </Text>
                <Text style={styles.rowValue}>
                  {this.state.selectedRequest.offer}
                </Text>
              </Container>
              <Container style={styles.row}>
                <Text style={styles.rowTitle}>
                  {languageManager.translate(this, "REQUEST_DETAIL_PAYMENT")}
                </Text>
                <Text style={styles.rowValue}>
                  {this.state.selectedRequest.peyment}
                </Text>
              </Container>
              <Container style={styles.row}>
                <Text style={styles.rowTitle}>
                  {languageManager.translate(this, "REQUEST_DETAIL_NOTE")}
                </Text>
                <Text style={styles.rowValue} numberOfLines={1}>
                  {this.state.selectedRequest.note}
                </Text>
              </Container>
            </Container>
          </Container>
          {/* qoute info */}
          {this.state.selectedRequest.status == "accepted" ? (
            <Text style={styles.requestBoxTitle}>
              {languageManager.translate(this, "QOUTE_INFO")}
            </Text>
          ) : null}
          {this.state.selectedRequest.status == "accepted" ? (
            <Container style={[styles.requestInfo, styles.qouteInfo]}>
              <Container style={[styles.requestInfo_top, styles.qouteInfo_top]}>
                <Container style={styles.top_left}>
                  <Button
                    style={[
                      styles.left_number,
                      { backgroundColor: "transparent" }
                    ]}
                    onPress={this.showSellerProfile}
                  >
                    <Image
                      source={{
                        uri: this.state.selectedRequest.qoute
                          ? this.state.selectedRequest.qoute.vendor
                            ? this.state.selectedRequest.qoute.vendor.image
                            : undefined
                          : undefined
                      }}
                      style={styles.left_userImage}
                    />
                  </Button>
                </Container>
                <Container style={styles.top_center}>
                  <Text style={styles.center_title}>
                    {this.state.selectedRequest.qoute.vendor.name}
                  </Text>
                  <DateText
                    style={styles.center_desc}
                    date={this.state.selectedRequest.qoute.date}
                  />
                </Container>
                <Container style={styles.top_right}>
                  <Text style={styles.right_text}>
                    {this.state.selectedRequest.qoute.price} Rial
                  </Text>
                </Container>
              </Container>
              <Container
                style={[styles.requestInfo_bottom, styles.qouteInfo_bottom]}
              >
                <Container style={styles.row}>
                  <Text style={styles.rowTitle}>
                    {languageManager.translate(this, "QOUTE_PRICE")}
                  </Text>
                  <Text style={styles.rowValue}>
                    {this.state.selectedRequest.qoute.price} Rial
                  </Text>
                </Container>
                <Container style={styles.row}>
                  <Text style={styles.rowTitle}>
                    {languageManager.translate(this, "QOUTE_DATE")}
                  </Text>
                  <DateText
                    style={styles.rowValue}
                    date={this.state.selectedRequest.qoute.date}
                  />
                </Container>

                <Container style={styles.row}>
                  <Text style={styles.rowTitle}>
                    {languageManager.translate(this, "REQUEST_DETAIL_NOTE")}
                  </Text>
                  <Text style={styles.rowValue} numberOfLines={1}>
                    {this.state.selectedRequest.qoute.note}
                  </Text>
                </Container>
              </Container>
            </Container>
          ) : null}
        </ScrollView>
      </Container>
    );
  }
}
