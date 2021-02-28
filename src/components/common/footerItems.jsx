import React, { Component } from "react";

class FooterItems extends Component {
  state = {
    items: [
      "fa fa-facebook-f",
      "fa fa-twitter",
      "fa fa-google",
      "fa fa-instagram",
      "fa fa-linkedin",
      "fa fa-github",
    ],
  };
  render() {
    return (
      <section className="mb-4">
        {this.state.items.map((item) => (
          <a
            key={item}
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className={item}></i>
          </a>
        ))}
      </section>
    );
  }
}

export default FooterItems;
