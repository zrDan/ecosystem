import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./homePage";
import DescriptionPlace from "./descriptionPlace";

import "../styles/global.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:id" component={DescriptionPlace} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
