import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./page/Home";
import About from "./page/About";
import Anno from "./page/Announce";
import Activity from "./page/Activity";
import Evergreen from "./page/Evergreen";
import Gallery from "./page/Gallery";
import Contact from "./page/Contact";
import Admin from "./page/Admin";
import Directory from "./page/Directory";
import Support from "./page/Support";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./App.css";

function App() {
  const [cookies, setCookie] = useCookies(["language"]);
  if (cookies.language === undefined) {
    cookies.language = "en";
  }
  const [lang, setLang] = useState(cookies.language);

  return (
      <div className="app">
        <Router>
          <Navbar
            lang={lang}
            setLang={setLang}
            cookies={cookies}
            setCookie={setCookie}
          />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/announce" component={Anno}></Route>
            <Route path="/activity" component={Activity}></Route>
            <Route path="/evergreen" component={Evergreen}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/directory" component={Directory}></Route>
            <Route path="/support" component={Support}></Route>
            <Route path="/admin" component={Admin}></Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
