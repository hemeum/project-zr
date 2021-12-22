import React, { useState } from "react";
import styled from "styled-components";

function SymptomInput() {
  const [order, setOrder] = useState();

  const inputName = () => {
    // input 태그의 name 바꾸기 함수
  };

  const inputValue = () => {
    // input 태그의 value 바꾸기 함수
  };

  return (
    <Contain>
      <Title>어디가 아프신가요?</Title>
      <Form>
        <input type="radio" name="body" value="head" />
        <input type="radio" name="body" value="heart" />
        <input type="radio" name="body" value="stomach" />
        <input type="radio" name="body" value="arm" />
        <input type="radio" name="body" value="thigh" />
        <input type="radio" name="body" value="calf" />
        <input type="radio" name="body" value="finger and toes" />
      </Form>
      <Desc>
        <p>머리</p>
        <p>가슴</p>
        <p>배</p>
        <p>팔</p>
        <p>허벅지</p>
        <p>종아리</p>
        <p>손가락, 발가락</p>
      </Desc>
    </Contain>
  );
}

const Contain = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
`;

const Title = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 150px;
  text-align: center;
  line-height: 75px;
  color: #fff;
`;

const Form = styled.form`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 900px;
  input {
    width: 120px;
    margin: 0;
  }
`;

const Desc = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 900px;
  p {
    width: 120px;
    text-align: center;
    color: #fff;
    font-weight: bold;
  }
`;

export default SymptomInput;
