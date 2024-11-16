import React, { Component } from "react";
import './Headline.css';

class Headline extends Component {
  // props viết tắt của properties (Thuộc tính)
  // Không cần thiết phải có constructor
  // Trừ trường hợp phải khởi tạo các thuộc tính cho lớp (ví dụ state)
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <p className="headline">Hello {this.props.value}</p>;
  }
}

export default Headline;
