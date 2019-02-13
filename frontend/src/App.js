import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Form from "./views/Form";
import LastPage from "./views/Last";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='full-desktop-height'>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/make-suggestion' exact component={Form} />
            <Route path='/last' exact component={LastPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
