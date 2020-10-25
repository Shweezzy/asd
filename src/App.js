import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Nav from "./components/nav/nav.jsx";
import Profile from "./components/profile/profile.jsx";
import Dialogs from "./components/dialogs/dialogs.jsx";
import News from "./components/news/news.jsx";
import Mussic from "./components/mussic/mussic.jsx";
import Settings from "./components/settings/settings.jsx";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-div">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/mussic" component={Mussic} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
