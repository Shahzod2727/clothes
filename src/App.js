import React from "react";
import "./categories.styles.scss";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <div> <h1>Shop page</h1></div>;
};



const App = () => {
  return (
    // <Directory categories={categories} />
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="signIn" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
