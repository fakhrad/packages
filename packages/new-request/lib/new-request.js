import React from "react";
import { StatusBar } from "react-native";
import {
  Header,
  Text,
  Container,
  Button,
  BaseComponent,
  SectionList
} from "@app-sdk/components";
import BackButton from "@app-sdk/advance-components/BackButton";
import styles from "./styles";
import translation from "./translation";
import { languageManager, themeManager, navManager } from "@app-sdk/services";
import item from "./widget";
import ProductInfo from "./ProductInfo";

export default class NewRequest extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = {
      data: [],
      selectedCategory: {},
      sectionData: []
    };
  }
  componentDidMount() {
    const d = [
      {
        items: [],
        data: [],
        _id: "5c71db37fb6fc0720127339f",
        code: 2,
        title: {
          fa: "میوه جات",
          en: "Fruitage"
        },
        shortDesc: {
          fa: "میوه های دسته میوه جات",
          en: "Fruits of fruitage"
        }
      },
      {
        items: [],
        data: [],
        _id: "5c71db8efb6fc072012733d8",
        code: 3,
        title: {
          fa: "صیفی جات",
          en: "ُُُُSeifijat"
        },
        shortDesc: {
          fa: "میوه های دسته صیفی جات",
          en: "Fruits of seifijat"
        }
      },
      {
        items: [
          {
            items: [],
            data: [
              {
                _id: "5c71ec48fb6fc07201273861",
                code: 1,
                name: { fa: "پرتقال تامسون جنوب", en: "South orange" },
                shortDesc: { fa: "انواع پرتقال", en: "Orange Models" },
                categoryId: "5c71e876fb6fc0720127377f",
                image:
                  "https://myresources1195.blob.core.windows.net/images/per.jpg",
                id: "5c71ec48fb6fc07201273866"
              },
              {
                _id: "5c71ec48fb6fc07201273862",
                code: 2,
                name: { fa: "پرتقال تامسون شمال", en: "Orange North" },
                shortDesc: { fa: "انواع پرتقال", en: "Orange Model" },
                categoryId: "5c71e876fb6fc0720127377f",
                image:
                  "https://myresources1195.blob.core.windows.net/images/per.jpg",
                id: "5c71ec48fb6fc07201273866"
              },
              {
                _id: "5c71ec48fb6fc07201273863",
                code: 3,
                name: { fa: "پرتقال آبگیری", en: "Orange Abgiri" },
                shortDesc: { fa: "انواع پرتقال", en: "Oranges models" },
                categoryId: "5c71e876fb6fc0720127377f",
                image:
                  "https://myresources1195.blob.core.windows.net/images/per.jpg",
                id: "5c71ec48fb6fc07201273866"
              },
              {
                _id: "5c71ec48fb6fc07201273864",
                code: 4,
                name: { fa: "پرتقال مصری", en: "Egypt Orange" },
                shortDesc: { fa: "انواع پرتقال", en: "Oranges models" },
                categoryId: "5c71e876fb6fc0720127377f",
                image:
                  "https://myresources1195.blob.core.windows.net/images/per.jpg",
                id: "5c71ec48fb6fc07201273866"
              }
            ],
            _id: "5c71e876fb6fc0720127377f",
            code: 4,
            title: { fa: "پرتقال", en: "Orange" },
            shortDesc: { fa: "انواع پرتقال", en: "Orange models" },
            parentId: "5c71daccfb6fc07201273383"
          }
        ],
        data: [],
        _id: "5c71daccfb6fc07201273383",
        code: 1,
        title: { fa: "مرکبات", en: "Morakabat" },
        shortDesc: { fa: "میوه های دسته مرکبات", en: "Fruits of morakabat" }
      }
    ];
    const data = d.sort((a, b) => {
      return a.code - b.code;
    });
    this.setState(
      prevState => ({
        ...prevState,
        data: data
      }),
      () => {
        this.setState(prevState => ({
          ...prevState,
          selectedCategory: this.state.data[0],
          sectionData: this.state.data[0].items
        }));
      }
    );
  }
  changeCategory = category => {
    this.setState(prevState => ({
      ...prevState,
      selectedCategory: category,
      sectionData: category.items
    }));
  };
  openProductInfo = selected => {
    navManager.showInModal(ProductInfo, selected);
  };

  render() {
    const selectedSegmentBg = themeManager.getAppTheme().$color2;
    const selectedSegmentTxt = themeManager.getAppTheme().$color1;
    const segmentTxtColor = themeManager.getAppTheme().$color2;
    return (
      <Container style={styles.wrapper}>
        {!this.props.config.statusBar ? <StatusBar hidden /> : undefined}
        <Header style={styles.header}>
          <Container style={styles.headerActions}>
            <BackButton style={styles.backButton} />
            <Container style={styles.headerSegment}>
              {this.state.data.map(category => {
                return (
                  <Container
                    key={
                      category.title[languageManager.getCurrentLanguage().name]
                        ? category.title[
                            languageManager.getCurrentLanguage().name
                          ]
                        : category.title
                    }
                    style={styles.segmentItem}
                  >
                    <Button
                      style={[
                        styles.segmentItemBtn,
                        {
                          backgroundColor:
                            category._id === this.state.selectedCategory._id
                              ? selectedSegmentBg
                              : undefined
                        }
                      ]}
                      onPress={() => this.changeCategory(category)}
                    >
                      <Text
                        style={[
                          styles.segmentItemBtnText,
                          {
                            color:
                              category._id === this.state.selectedCategory._id
                                ? selectedSegmentTxt
                                : segmentTxtColor
                          }
                        ]}
                      >
                        {category.title[
                          languageManager.getCurrentLanguage().name
                        ]
                          ? category.title[
                              languageManager.getCurrentLanguage().name
                            ]
                          : category.title}
                      </Text>
                    </Button>
                  </Container>
                );
              })}
            </Container>
          </Container>
        </Header>
        <SectionList
          style={styles.sectionList}
          sections={this.state.sectionData}
          header={({ ...props }) => {
            const { section } = props;
            return (
              <Container
                style={{
                  backgroundColor: "transparent",
                  flexDirection: "row",
                  margin: 10,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "left",
                    marginRight: 5
                  }}
                >
                  {section.title[languageManager.getCurrentLanguage().name]
                    ? section.title[languageManager.getCurrentLanguage().name]
                    : section.title}
                </Text>
                <Text>({section.data.length})</Text>
              </Container>
            );
          }}
          widget={item}
          numColumns={2}
          onItemLongPressed={selected => {
            this.openProductInfo(selected);
          }}
          onItemPressed={(selected, categoryItems) => {
            const obj = {
              selectedWidget: selected,
              categoryItems: categoryItems
            };
            navManager.startWizard(this.props.config.orderDetailPage, obj);
          }}
        />
      </Container>
    );
  }
}
