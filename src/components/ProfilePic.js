import React, { useState, useEffect } from "react";

const images = require.context("../../public/profile-pics", true);
const pic1 = images("./profile1.jpg");
const pic2 = images("./profile2.jpg");
const pic3 = images("./profile3.jpg");
const pic4 = images("./profile4.jpg");
const pic5 = images("./profile5.jpg");
const pic6 = images("./profile6.jpg");

const ProfilePic = () => {
  const [picNumber, setPicNumber] = useState(0);
  useEffect(() => {
    if (picNumber === 6) {
      setPicNumber(0);
    }
  });
  const picList = [pic1, pic2, pic3, pic4, pic5, pic6];
  const picImageStyle = i => {
    if (i === 5 || i === 4) {
      return {
        backgroundImage: "url(" + picList[i] + ")",
        backgroundPositionX: "right"
      };
    } else if (i === 2) {
      return { backgroundPositionY: "90%" };
    }
    return { backgroundImage: "url(" + picList[i] + ")" };
  };

  return (
    <div
      id={"profilepic"}
      onClick={() => setPicNumber(picNumber + 1)}
      style={picImageStyle(picNumber)}
    />
  );
};

export default ProfilePic;
