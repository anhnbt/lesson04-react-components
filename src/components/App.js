import React, { Component } from "react";
import Headline from "./Headline/Headline";
import { names } from "./data/names";

class App extends Component {
  render() {
    return names.map((item) => <Headline value={item} />);
  }
}

export default App;
