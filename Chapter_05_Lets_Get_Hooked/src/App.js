import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestoCards";

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

// displaying the header and body component on root
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
