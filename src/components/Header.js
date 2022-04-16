import React from "react";
import Image from "react-bootstrap/Image";
import codingBkg from "../assets/header.jpg";

const styles = {
  image: {
    width: "100%",
    height: "270px",
  },
};

function Header() {
  return (
    <div>
      <Image
        style={styles.image}
        alt="code on computer screen"
        src={codingBkg}
      />
    </div>
  );
}

export default Header;
