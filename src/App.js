import React from "react";
import "./categories.styles.scss";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <div> <h1>Shop page</h1></div>;
};



const App = () => {
  return (
    // <Directory categories={categories} />
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
