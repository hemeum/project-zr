import React from "react";
import styled from "styled-components";

function SymptomInput() {
  return (
    <Contain>
      <Title>증상을 입력해주세요</Title>
      <Input type="text" placeholder="ex.다리가 붓고 아파요."></Input>
      <Button type="button">전송</Button>
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

const Input = styled.input`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 40px;
  padding: 10px 20px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 50px;
  color: #fff;
  background-color: skyblue;
`;

export default SymptomInput;
