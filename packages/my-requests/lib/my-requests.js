import React from "react";
import { StatusBar } from "react-native";
import {
  Header,
  Container,
  Button,
  FlatList,
  Image,
  BaseComponent,
  Spinner,
  Text
} from "@app-sdk/components";
import BackButton from "@app-sdk/advance-components/BackButton";

import styles from "./styles";
import translation from "./translation";
import { languageManager, navManager } from "@app-sdk/services";

import Item from "./widget";
import RequestDetail from "./requestDetail";
import RequestActionModal from "./RequestActions";

export default class MyRequests extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);

    this.state = {
      refreshing: false,
      isLoading: true,
      data: []
    };
  }
  componentDidMount = () => {
    this._animation =
      languageManager.getCurrentLayout() == "rtl"
        ? "slideInRight"
        : "slideInLeft";

    this._offerText = languageManager.translate(this, "ITEMS_OFFER");
    this._kg = languageManager.translate(this, "ITEMS_UNIT_KG");
    this._ton = languageManager.translate(this, "ITEMS_UNIT_TON");
    navManager.registerScreen(undefined, "RequestDetail", RequestDetail);
    this.setState(prevState => ({
      ...prevState,
      data: [
        {
          id: 1,
          name: {
            en: "North Orange",
            fa: "پرتقال شمال"
          },
          description: {
            en: "Product of north of Iran",
            fa: "محصول باغات شمال"
          },
          image: "https://myresources1195.blob.core.windows.net/images/per.jpg",
          weight: "2600",
          date: "2019-02-26 14:00",
          status: "accepted",
          offer: 18,
          peyment: "cash",
          product: {
            name: {
              en: "Orange",
              fa: "پرتقال"
            },
            image:
              "https://myresources1195.blob.core.windows.net/images/per.jpg"
          },
          qoute: {
            date: "2019-02-26 08:30",
            price: "1920",
            note: "Lorem ipsum can be used instead of empty text",
            vendor: {
              name: "Reza Pirhadi",
              image:
                "https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png"
            }
          }
        }
      ]
    }));
  };

  // callback of selected list item to navigate in detail page
  showRequestDetail(selected) {
    navManager.openScreen("RequestDetail", selected);
  }
  onQouteCountPressed(selected) {
    navManager.openScreen("Qoutes", selected);
  }
  showRequestAction(selected) {
    navManager.showInModal(RequestActionModal, selected);
  }
  _renderItem = (rowData, rowMap) => {
    let { item, index } = rowData;
    let newItem = Object.assign({}, item);
    const value = parseInt(newItem.weight);
    const unit = value < this.props.config.kgMaxValue ? this._kg : this._ton;

    const weight =
      item.weight > this.props.config.kgMaxValue
        ? item.weight / 1000
        : item.weight;
    newItem["weight"] = weight + " " + unit;
    newItem["offer"] = newItem["offer"] + " " + this._offerText;

    const status = languageManager.translate(this, newItem.status);
    newItem["status"] = status;

    return (
      <Item
        data={newItem}
        index={index}
        animation={this._animation}
        onActionPressed={selectedItem => this.showRequestAction(selectedItem)}
        onDetailPressed={selectedItem => this.showRequestDetail(selectedItem)}
        onQouteCountPressed={selectedItem =>
          this.onQouteCountPressed(selectedItem)
        }
      />
    );
  };

  renderFooter = () => {
    return null;
    if (!this.state.loading) return null;
    return <Spinner />;
  };

  handleRefresh = () => {
    this.setState({ refreshing: true }, () => {
      // pull down  to refresj
    });
  };
  handleLoadMore = () => {
    // load more on end reached
  };

  render() {
    return (
      <Container style={styles.wrapper}>
        {!this.props.config.statusBar ? <StatusBar hidden /> : ""}
        {/* header */}
        <Header style={styles.header}>
          <Container style={styles.headerActions}>
            <BackButton />
            <Text style={styles.headerText}>
              {languageManager.translate(this, "MY_REQUESTS_HEADER_TITLE")}
            </Text>
          </Container>
        </Header>
        <FlatList
          style={styles.flatList}
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={() => <Spinner />}
          ListFooterComponent={this.renderFooter}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      </Container>
    );
  }
}
