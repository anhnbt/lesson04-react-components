import { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    // inline CSS
    // {expression}
    return (
      <h1
        style={{
          color: this.props.color,
          backgroundColor: this.props.background,
          border: "1px solid black",
        }}
      >
        Xin chào {this.props.name}
      </h1>
    );
  }
}

Welcome.defaultProps = {
  name: "Wanbi",
  color: "green",
  background: "yellow",
};

export default Welcome;
