import React from "react";
import { Alert, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
import RNGooglePlaces from "react-native-google-places";
import Geocoder from "react-native-geocoder";
import {
  Header,
  Text,
  Container,
  Button,
  Spinner,
  BaseComponent
} from "@app-sdk/components";
import BackButton from "@app-sdk/advance-components/BackButton";
import styles from "./styles";
import translation from "./translation";
import { authManager, languageManager, apiManager } from "@app-sdk/services";

let { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.015; //Very high zoom level
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Location extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = {
      isRegionChanged: false,
      spinner: false,
      point: null,
      region: {
        latitude:
          authManager.instance.currentUser.location != undefined
            ? authManager.instance.currentUser.location.lat
            : 35.699646,
        longitude:
          authManager.instance.currentUser.location != undefined
            ? authManager.instance.currentUser.location.long
            : 51.347713,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      marker: {
        latitude:
          authManager.instance.currentUser.location != undefined
            ? authManager.instance.currentUser.location.lat
            : 35.699646,
        longitude:
          authManager.instance.currentUser.location != undefined
            ? authManager.instance.currentUser.location.long
            : 51.347713
      },
      address: ""
    };
    this.mapRef = null;
  }

  async componentDidMount() {
    if (authManager.instance.currentUser.location != undefined) {
      var obj = {
        lat: authManager.instance.currentUser.location.lat,
        lng: authManager.instance.currentUser.location.long
      };
      Geocoder.geocodePosition(obj)
        .then(res => {
          this.setState({ address: res[0].formattedAddress }, () => {});
        })
        .catch(err => Alert.alert(err));
    } else {
      this.setState({ address: "Your Location" });
    }
    //this._getCurrentPosition();
  }
  onPoiClick(e) {
    this.setState({
      isRegionChanged: true,
      marker: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude
      }
    });
    var obj = {
      lat: e.nativeEvent.coordinate.latitude,
      lng: e.nativeEvent.coordinate.longitude
    };
    Geocoder.geocodePosition(obj)
      .then(res => {
        this.setState({ address: res[0].formattedAddress });
      })
      .catch(err => Alert.alert(err));
  }

  openSearchModal = () => {
    RNGooglePlaces.openAutocompleteModal()
      .then(place => {
        this.setState({
          isRegionChanged: true,
          address: place.address,
          region: {
            ...this.state.region,
            latitude: place.latitude,
            longitude: place.longitude
          },
          marker: {
            latitude: place.latitude,
            longitude: place.longitude
          }
        });
        console.log(place);
      })
      .catch(error => console.log(error.message));
  };
  onRegionChanged(region) {
    this.setState({ region: region });
  }
  updateLocation = () => {
    this.alert(
      languageManager.translate(this, "PROFILE_LOCATION_UPDATE_ALERT_TITLE"),
      languageManager.translate(this, "PROFILE_LOCATION_UPDATE_ALERT_DESC"),
      languageManager.translate(this, "PROFILE_LOCATION_UPDATE_ALERT_BTN_OK"),
      languageManager.translate(this, "PROFILE_LOCATION_UPDATE_BTN_CANCEL"),
      () => {
        this.setState(prevState => ({
          ...prevState,
          spinner: true
        }));
        const changeLocation = apiManager.instance.get(
          "authentication",
          "changeLocation"
        );
        if (changeLocation) {
          changeLocation()
            .onServerError(() => {
              this.setState(prevState => ({
                ...prevState,
                spinner: false
              }));
              this.notifyError(
                languageManager.translate(this, "ERROR_INTERNAL_SERVER")
              );
            })
            .onConnectionError(() => {
              this.notifyError(
                languageManager.translate(this, "CONNECTION_ERROR")
              );
              this.setState(prevState => ({
                ...prevState,
                spinner: false
              }));
            })
            .onOk(() => {
              this.setState(prevState => ({
                ...prevState,
                spinner: false
              }));
            })
            .call(this.state.marker);
        }
      }
    );
  };
  render() {
    return (
      <Container style={styles.wrapper}>
        <MapView
          ref={ref => {
            this.mapRef = ref;
          }}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          provider={null}
          zoomEnabled={true}
          rotateEnabled={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          region={this.state.region}
          onRegionChangeComplete={regin => this.onRegionChanged(regin)}
          onPress={e => this.onPoiClick(e)}
        >
          <Marker coordinate={this.state.marker} />
        </MapView>
        {/* header */}
        <Header style={styles.header}>
          <Container style={styles.headerActions}>
            <BackButton navType="modal" />
            <Text style={styles.headerText}>
              {languageManager.translate(
                this,
                "PROFILE_MY_LOCATION_HEADER_TITLE"
              )}
            </Text>
            <Button style={styles.searchBtn} onPress={this.openSearchModal}>
              <Icon name="search" style={styles.searchBtnIcon} />
            </Button>
          </Container>
        </Header>
        <Container style={styles.action}>
          <Container style={styles.actionAddress}>
            <Text style={styles.actionAddressTitle}>
              {languageManager.translate(
                this,
                "PROFILE_LOCATION_CURRNT_LOCATION"
              )}
            </Text>
            <Container style={styles.actionAddressBottom}>
              <Icon name="map-marker" style={styles.actionAddressBottomIcon} />
              <Text style={styles.actionAddressBottomText}>
                {this.state.address}
              </Text>
            </Container>
          </Container>
          <Button style={styles.actionBtn} onPress={this.updateLocation}>
            <Spinner size="small" show={this.state.spinner} />
            <Text style={styles.actionBtnText}>
              {languageManager.translate(
                this,
                "PROFILE_LOCATION_BTN_CHOOSE_LOCATION"
              )}
            </Text>
          </Button>
        </Container>
      </Container>
    );
  }
}
