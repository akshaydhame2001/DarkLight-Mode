import React from "react";
import image from "../assets/image.png";

const Home = () => {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Welcome to home Page</p>
        <div>
          <img src={image} alt="lightDark" />
        </div>
      </div>
    </div>
  );
};

export default Home;
