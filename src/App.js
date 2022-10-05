import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { SiGmail } from "react-icons/si";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="icon-bar">
        <a
          href="https://github.com/honeyahmed"
          target={"_blanck"}
          className="github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/honey-ahmed-006801187/"
          target={"_blanck"}
          className="linkedin"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="mailto:honeyahmed77@gmail.com"
          target={"_blanck"}
          className="google"
        >
          <SiGmail />
        </a>
        <a
          href="https://www.facebook.com/Honey.Ahmed.Mohamed"
          target={"_blanck"}
          className="facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/HoneyAhmedm?fbclid=IwAR2oep9H0BMuwkoOaPKBXC7HSwgBKORaaDlo82Zct_bpYTcIYy3O_OM7d6g"
          target={"_blanck"}
          className="twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default App;
