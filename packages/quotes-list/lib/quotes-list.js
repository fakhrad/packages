import React from "react";
import { StatusBar, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper-animated";
import {
  Header,
  Text,
  Container,
  BaseComponent,
  Button
} from "@app-sdk/components";
import BackButton from "@app-sdk/advance-components/BackButton";

import styles from "./styles";
import translation from "./translation";
import { languageManager, navManager } from "@app-sdk/services";
import Widget from "./widget";
import Match from "./Match";
import QouteInfo from "./QouteInfo";

export default class Qoutes extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);

    this.state = {
      filterBox: false,
      filterType: "desc",
      refreshing: false,
      isLoading: true,
      resetSwiper: false,
      data: [],
      selectedRequest: props.params ? props.params : {}
    };
    this._swiperIndex = 0;
  }
  componentDidMount() {
    navManager.registerScreen(undefined, "QouteInfo", QouteInfo);
    this._qoutes = [
      {
        _id: 1,
        date: "2019-01-24 12:45",
        price: "1920",
        vendor: {
          name: "Reza Pirhadi",
          image:
            "https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png",
          products: [
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/per.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/per.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/per.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/per.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/per.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/per.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/per.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/per.jpg"
            }
          ]
        },
        note: "Lorem ipsum can be used instead of empty text",
        product: {
          name: {
            en: "Orange",
            fa: "پرتقال"
          },
          image: "https://myresources1195.blob.core.windows.net/images/per.jpg"
        },
        images: [
          {
            image:
              "https://myresources1195.blob.core.windows.net/images/per.jpg"
          },
          {
            image:
              "https://myresources1195.blob.core.windows.net/images/per.jpg"
          },
          {
            image:
              "https://myresources1195.blob.core.windows.net/images/per.jpg"
          },
          {
            image:
              "https://myresources1195.blob.core.windows.net/images/per.jpg"
          },
          {
            image:
              "https://myresources1195.blob.core.windows.net/images/per.jpg"
          },
          {
            image:
              "https://myresources1195.blob.core.windows.net/images/per.jpg"
          }
        ],
        request: {
          weight: "2300",
          payment: "cach",
          date: "2019-12-19 20:45"
        }
      },
      {
        _id: 2,
        date: "2019-01-24 12:45",
        price: "5400",
        vendor: {
          name: "Karim maraghe",
          image:
            "https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png",
          products: [
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/banana.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/banana.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/banana.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/banana.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/banana.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/banana.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/banana.jpg"
            },
            {
              image:
                "https://myresources1195.blob.core.windows.net/images/banana.jpg"
            }
          ]
        },
        note: "Lorem ipsum can be used instead of empty text",
        product: {
          name: {
            en: "Orange",
            fa: "پرتقال"
          },
          image:
            "https://myresources1195.blob.core.windows.net/images/banana.jpg"
        },
        images: [
          {
            image:
              "https://myresources1195.blob.core.windows.net/images/banana.jpg"
          },
          {
            image:
              "https://myresources1195.blob.core.windows.net/images/banana.jpg"
          },
          {
            image:
              "https://myresources1195.blob.core.windows.net/images/banana.jpg"
          },
          {
            image:
              "https://myresources1195.blob.core.windows.net/images/banana.jpg"
          },
          {
            image:
              "https://myresources1195.blob.core.windows.net/images/banana.jpg"
          },
          {
            image:
              "https://myresources1195.blob.core.windows.net/images/banana.jpg"
          }
        ],
        request: {
          weight: "2300",
          payment: "cach",
          date: "2019-01-03 16:56"
        }
      }
    ];
    this.currentItem = this._qoutes[this._swiperIndex];

    this.setState(prevState => ({
      ...prevState,
      data: this._qoutes
    }));
  }

  qouteInfo = () => navManager.openScreen("QouteInfo", this.currentItem);

  skip = () => {
    this.swiper.forceRightSwipe();
  };
  match = () => {
    const params = this.currentItem;
    const newData = this._qoutes.filter(
      qoute => qoute._id != this.currentItem._id
    );

    //this.skip();

    this._qoutes = newData;
    this.sortQoutes(newData);
    this.currentItem = newData[0];

    navManager.showInModal(
      Match,
      params,
      undefined,
      undefined,
      "rgba(0,0,0,0.6)"
    );
  };
  onSnapToItem = index => {
    this.currentItem = this.state.data[index];
  };

  _renderItem({ item, index }) {
    return <Widget key={index} data={item} unit="Rial" />;
  }
  // toggle filter box
  openFilterBox = () => {
    this.setState(prevState => ({
      ...prevState,
      filterBox: !this.state.filterBox
    }));
  };
  // filter swiper data by type
  filter(type) {
    this.setState(
      prevState => ({
        ...prevState,
        filterBox: !this.state.filterBox,
        filterType: type,
        resetSwiper: true,
        data: []
      }),
      () => {
        this._qoutesSortType = type;
        this.sortQoutes(undefined, type);
      }
    );
  }
  sortQoutes = (data, type) => {
    if (!type) {
      this.setState(prevState => ({
        ...prevState,
        data: data ? data : this._qoutes,
        resetSwiper: false
      }));
    } else {
      let newData = [];
      switch (this._qoutesSortType) {
        case "asce":
          newData = this._qoutes.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
          );
          break;
        case "desc":
          newData = this._qoutes.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
          );
          break;
        case "exp":
          newData = this._qoutes.sort(
            (a, b) => parseFloat(b.price) - parseFloat(a.price)
          );
          break;
        case "cheap":
          newData = this._qoutes.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
          );
          break;
        default:
          newData = this._qoutes;
          break;
      }
      this.setState(prevState => ({
        ...prevState,
        data: newData,
        resetSwiper: false
      }));
    }
  };
  render() {
    const filterAnim = languageManager.isRTL ? "fadeInLeft" : "fadeInRight";
    return (
      <Container style={styles.wrapper}>
        {!this.props.config.statusBar ? <StatusBar hidden /> : ""}
        {/* header */}
        <Header style={styles.header}>
          <Container style={styles.headerActions}>
            <BackButton />
            <Text style={styles.headerText}>
              {languageManager.translate(this, "QOUTES_HEADER_TITLE")}
            </Text>
            <Button style={styles.filter} onPress={this.openFilterBox}>
              <Icon name="ellipsis-v" style={styles.filterIcon} />
            </Button>
          </Container>
        </Header>

        <Container style={styles.mainContent}>
          <Container style={styles.qoutes}>
            {this.state.filterBox ? (
              <Container
                style={[styles.filterSubMenu]}
                animation={filterAnim}
                duration={300}
              >
                <Button
                  style={styles.filterActionBtn}
                  onPress={() => this.filter("asce")}
                >
                  <Text style={styles.filterActionBtnText}>
                    {languageManager.translate(this, "SORT_NEWEST")}
                  </Text>
                  <Icon
                    name="check-circle"
                    style={[
                      styles.filterActionBtnIcon,
                      {
                        display:
                          this.state.filterType == "asce" ? "flex" : "none"
                      }
                    ]}
                  />
                </Button>
                <Button
                  style={styles.filterActionBtn}
                  onPress={() => this.filter("desc")}
                >
                  <Text style={styles.filterActionBtnText}>
                    {languageManager.translate(this, "SORT_OLDEST")}
                  </Text>
                  <Icon
                    name="check-circle"
                    style={[
                      styles.filterActionBtnIcon,
                      {
                        display:
                          this.state.filterType == "desc" ? "flex" : "none"
                      }
                    ]}
                  />
                </Button>
                <Button
                  style={styles.filterActionBtn}
                  onPress={() => this.filter("exp")}
                >
                  <Text style={styles.filterActionBtnText}>
                    {languageManager.translate(this, "SORT_MOST_EXPENSIVE")}
                  </Text>
                  <Icon
                    name="check-circle"
                    style={[
                      styles.filterActionBtnIcon,
                      {
                        display:
                          this.state.filterType == "exp" ? "flex" : "none"
                      }
                    ]}
                  />
                </Button>
                <Button
                  style={styles.filterActionBtn}
                  onPress={() => this.filter("cheap")}
                >
                  <Text style={styles.filterActionBtnText}>
                    {languageManager.translate(this, "SORT_CHEAPEST")}
                  </Text>
                  <Icon
                    name="check-circle"
                    style={[
                      styles.filterActionBtnIcon,
                      {
                        display:
                          this.state.filterType == "cheap" ? "flex" : "none"
                      }
                    ]}
                  />
                </Button>
              </Container>
            ) : null}
            <Text style={styles.qoutesTitle}>
              {languageManager.translate(this, "BROWSE")}
            </Text>
            <Swiper
              ref={swiper => {
                this.swiper = swiper;
              }}
              style={styles.swiper}
              showPagination={false}
              stack
              dragDownToBack
              swipeDirection="right"
              reset={this.state.resetSwiper}
              onSwipeEnd={card => {
                this.currentItem = card;
              }}
            >
              {this.state.data.map((item, index) => (
                <Widget key={index} data={item} unit="Rial" />
              ))}
            </Swiper>
          </Container>
        </Container>
        <Container style={styles.actions}>
          <Button
            style={[
              styles.actionBtn,
              ,
              {
                display:
                  this.state.selectedRequest.status == "accepted"
                    ? "none"
                    : "flex"
              }
            ]}
            onPress={this.match}
          >
            <Icon
              name="check"
              style={[styles.actionBtnIcon, { color: "green" }]}
            />
          </Button>

          <Button
            style={[styles.actionBtn, styles.centerActionBtn]}
            onPress={this.qouteInfo}
          >
            <Icon
              name="info"
              style={[styles.actionBtnIcon, styles.centerActionBtnIcon]}
            />
          </Button>
          <Button
            style={[
              styles.actionBtn,
              {
                display:
                  this.state.selectedRequest.status == "accepted"
                    ? "none"
                    : "flex"
              }
            ]}
            onPress={this.skip}
          >
            <Icon
              name="close"
              style={[styles.actionBtnIcon, { color: "red" }]}
            />
          </Button>
        </Container>
      </Container>
    );
  }
}
