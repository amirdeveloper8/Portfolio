import React, { Component } from "react";
import FooterItems from "./common/footerItems";

class Footer extends Component {
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
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <FooterItems />
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
