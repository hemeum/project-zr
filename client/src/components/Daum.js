import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Post = (props) => {
  const address = props.address;
  const setAddress = props.setAddress;
  const setPopUp = props.setPopUp;

  const onCompletePost = (data) => {
    console.log(data.address);
    setAddress(data.address);
    setPopUp(false);
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "3%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "600px",
    height: "600px",
    border: "1px solid black",
    zIndex: 1100,
  };

  return (
    <>
      <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} />
    </>
  );
};

export default Post;
