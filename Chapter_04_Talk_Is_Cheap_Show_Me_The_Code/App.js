import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

/*
Header
  Logo
  Search
  Nav Items
Body
  Restaurant Container
    RestoCards
      Name
      Cuisine
      Address
      Time
      rating
Footer
  copyright
  Address
  Contact Infor
*/

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://banner2.cleanpng.com/20190615/jza/kisspng-a2-late-night-food-delivery-restaurant-delivery-order-png-vector-clipart-psd-peoplepn-5d04f1d4640287.0660363915606051404097.jpg"
      />
      <div className="search">
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </div>

      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} />
        </li>
      </ul>
    </div>
  );
};

const RestaurantCard = (resData) => {
  // destructuring the object
  const { name, cloudinaryImageId, avgRating, cuisines, locality } =
    resData.resData.card.card.info;
  const { slaString } = resData.resData.card.card.info.sla;
  // console.log(resData.resData.card.card.info);
  return (
    <div className="Res-Container">
      <div className="Res-card">
        <img
          className="card-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
            cloudinaryImageId
          }
        />
        <div className="res-details">
          <h3 id="name">{name}</h3>
          <h4 id="rating">
            <FontAwesomeIcon icon={faStar} />
            {avgRating} <span id="time">&nbsp;&nbsp;&bull;{slaString}</span>
          </h4>
          <p id="cusine">{cuisines.join(",")}</p>
          <p id="Address">{locality}</p>
        </div>
      </div>
    </div>
  );
};

//swiggy api object
const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "252075",
          name: "Arya Bhavan",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/25/8553d98d-2294-42e5-8780-525074b12960_1fd593dd-5e08-4eca-9e85-cfaeec19424a.jpg",
          locality: "Vile Parle East",
          areaName: "Vile Parle",
          costForTwo: "₹400 for two",
          cuisines: ["Beverages", "South Indian"],
          avgRating: 4.6,
          veg: true,
          parentId: "7266",
          avgRatingString: "4.6",
          totalRatingsString: "24K+",
          promoted: true,
          adTrackingId:
            "cid=dfa6c283-e9dd-4fd5-b82f-4e164ca8de1c~p=0~adgrpid=dfa6c283-e9dd-4fd5-b82f-4e164ca8de1c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=252075~plpr=COLLECTION~eid=da98c6c8-7a9a-4a1d-a998-68ee4e471be5~srvts=1754803437834~collid=80424",
          sla: {
            deliveryTime: 57,
            lastMileTravel: 8.3,
            serviceability: "SERVICEABLE",
            slaString: "55-65 mins",
            lastMileTravelString: "8.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-10 22:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹549",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "2.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "dfa6c283-e9dd-4fd5-b82f-4e164ca8de1c",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=252075&source=collection&query=Dosa",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "11239",
          name: "Thambbi",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/28/d8c070a1-31e6-4f67-a2a4-f2201079d410_86a01a3a-e97f-4c70-9cfd-4cd96102e5f0.jpg",
          locality: "Kurla West",
          areaName: "Kurla West",
          costForTwo: "₹400 for two",
          cuisines: ["South Indian", "Punjabi", "Snacks", "Thalis"],
          avgRating: 4.6,
          veg: true,
          parentId: "2527",
          avgRatingString: "4.6",
          totalRatingsString: "23K+",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 1.7,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-10 23:00:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹49",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "3.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=11239&source=collection&query=Dosa",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "634012",
          name: "Santosham",
          cloudinaryImageId: "ebf3182e83bee6af00dac7c31b3a84b8",
          locality: "Chandivali",
          areaName: "Chandivali",
          costForTwo: "₹300 for two",
          cuisines: ["South Indian", "Beverages", "Desserts"],
          avgRating: 4.6,
          veg: true,
          parentId: "11340",
          avgRatingString: "4.6",
          totalRatingsString: "6.9K+",
          promoted: true,
          adTrackingId:
            "cid=230b80d4-bd04-406b-9280-44d7904ee5f7~p=3~adgrpid=230b80d4-bd04-406b-9280-44d7904ee5f7#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=634012~plpr=COLLECTION~eid=17194ec8-6d91-4036-8f86-74818fd9391c~srvts=1754803437834~collid=80424",
          sla: {
            deliveryTime: 48,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            slaString: "45-55 mins",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-10 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.4",
              ratingCount: "2.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "230b80d4-bd04-406b-9280-44d7904ee5f7",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=634012&source=collection&query=Dosa",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1012526",
          name: "Mani's Cafe",
          cloudinaryImageId: "gpvgh0bj35mqrghnkqqv",
          locality: "Scruz Bandra East",
          areaName: "Scruz Bandra East",
          costForTwo: "₹200 for two",
          cuisines: ["South Indian"],
          avgRating: 4.5,
          veg: true,
          parentId: "131857",
          avgRatingString: "4.5",
          totalRatingsString: "996",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-10 22:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹69",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1012526&source=collection&query=Dosa",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "46487",
          name: "Maheshwari Dosa",
          cloudinaryImageId: "3ac8c85495debe97da3a57914d106825",
          locality: "Chandivali",
          areaName: "Marol Sakinaka",
          costForTwo: "₹250 for two",
          cuisines: ["South Indian"],
          avgRating: 4.4,
          veg: true,
          parentId: "472342",
          avgRatingString: "4.4",
          totalRatingsString: "11K+",
          promoted: true,
          adTrackingId:
            "cid=8c011dea-18f8-4a91-817b-546972e82511~p=4~adgrpid=8c011dea-18f8-4a91-817b-546972e82511#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=46487~plpr=COLLECTION~eid=a0f51718-6e51-4143-92b1-5588cc449e80~srvts=1754803437834~collid=80424",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 5.7,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "5.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-10 22:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹75 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "8c011dea-18f8-4a91-817b-546972e82511",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=46487&source=collection&query=Dosa",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "988404",
          name: "Chaat Chatori ",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/12/12/4112cfeb-4d5f-409c-823d-d20433548a38_df5db12c-2a64-47a6-8778-8b2d634b0152.JPG_compressed",
          locality: "Scruz Bandra East",
          areaName: "Scruz Bandra East",
          costForTwo: "₹500 for two",
          cuisines: [
            "South Indian",
            "Chaat",
            "Juices",
            "Pizzas",
            "Pastas",
            "Healthy Food",
          ],
          avgRating: 4.6,
          veg: true,
          parentId: "576907",
          avgRatingString: "4.6",
          totalRatingsString: "191",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 2.6,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "2.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-10 11:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=988404&source=collection&query=Dosa",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "54662",
          name: "Ganga - Paradise ",
          cloudinaryImageId: "ae276662bd2046753a67a1009e390ede",
          locality: "M.I.D.C",
          areaName: "M.I.D.C",
          costForTwo: "₹350 for two",
          cuisines: ["South Indian", "North Indian", "Chinese", "Fast Food"],
          avgRating: 4.5,
          veg: true,
          parentId: "86059",
          avgRatingString: "4.5",
          totalRatingsString: "24K+",
          promoted: true,
          adTrackingId:
            "cid=07f1910b-814e-43fc-9fb7-70f5a92038d5~p=6~adgrpid=07f1910b-814e-43fc-9fb7-70f5a92038d5#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=54662~plpr=COLLECTION~eid=9c8a6703-ccf5-43a0-9700-8f71f7bd93ee~srvts=1754803437834~collid=80424",
          sla: {
            deliveryTime: 65,
            lastMileTravel: 8.1,
            serviceability: "SERVICEABLE",
            slaString: "60-70 mins",
            lastMileTravelString: "8.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-10 23:15:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹95",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "5.1K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "07f1910b-814e-43fc-9fb7-70f5a92038d5",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=54662&source=collection&query=Dosa",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "557005",
          name: "Ram Mahal Hotel",
          cloudinaryImageId: "64c405debad7e470773d5f5a4eb2bc0e",
          locality: "Kurla West",
          areaName: "Kurla",
          costForTwo: "₹500 for two",
          cuisines: ["Biryani", "Juices", "Indian", "Chinese", "South Indian"],
          avgRating: 4.4,
          parentId: "335037",
          avgRatingString: "4.4",
          totalRatingsString: "143",
          sla: {
            deliveryTime: 52,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "50-60 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-10 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.4",
              ratingCount: "1.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=557005&source=collection&query=Dosa",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "346562",
          name: "Hare Rama Hare ",
          cloudinaryImageId: "s7veggctgjzilanedgul",
          locality: "Chakala",
          areaName: "Chakala",
          costForTwo: "₹400 for two",
          cuisines: ["Indian"],
          avgRating: 4.5,
          parentId: "93749",
          avgRatingString: "4.5",
          totalRatingsString: "17K+",
          promoted: true,
          adTrackingId:
            "cid=2b722fac-fd22-46f9-a006-0e2cb540692e~p=8~adgrpid=2b722fac-fd22-46f9-a006-0e2cb540692e#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=346562~plpr=COLLECTION~eid=38dc2ca6-b319-4f85-936b-24b5ecf89897~srvts=1754803437834~collid=80424",
          sla: {
            deliveryTime: 53,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            slaString: "50-60 mins",
            lastMileTravelString: "8.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-10 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "4.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "2b722fac-fd22-46f9-a006-0e2cb540692e",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=346562&source=collection&query=Dosa",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "434237",
          name: "Lark Pure ",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/2/17/db7d4cac-c890-4318-889d-a172034d7554_9836a72a-5da7-49a5-9e7d-700c7b2db241.JPG",
          locality: "Ghatkopar East",
          areaName: "Ghatkopar East",
          costForTwo: "₹300 for two",
          cuisines: ["Indian", "Chinese", "Italian", "Beverages", "Pizzas"],
          avgRating: 4.3,
          veg: true,
          parentId: "261656",
          avgRatingString: "4.3",
          totalRatingsString: "369",
          sla: {
            deliveryTime: 43,
            lastMileTravel: 1.9,
            serviceability: "SERVICEABLE",
            slaString: "40-50 mins",
            lastMileTravelString: "1.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-10 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹50 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "618",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=434237&source=collection&query=Dosa",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

// displaying each resto present in resList Object
const Body = () => {
  return (
    <div className="body">
      <div className="resto-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

// displaying the header and component on root
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
