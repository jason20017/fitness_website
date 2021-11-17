import React from "react";
import "./Fontawesomeicons/font";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import QA from "./pages/QA";
import TDEE from "./pages/TDEE";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import "./styles/style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/courses" exact>
          <Courses />
        </Route>
        <Route path="/qa" exact>
          <QA />
        </Route>
        <Route path="/tdee" exact>
          <TDEE />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
