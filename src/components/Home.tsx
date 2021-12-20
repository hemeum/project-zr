import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleStart = (): void => {
    navigate("/symptom");
  };

  return (
    <Contain>
      <Title>
        증알 <br />
        증상을 알려줘!
      </Title>
      <Button type="button" onClick={handleStart}>
        시작하기
      </Button>
    </Contain>
  );
}

const Contain = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
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
  color: skyblue;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 70px;
  border: none;
  border-radius: 50%;
  background-color: hotpink;
  color: skyblue;
  font-size: 18px;
  font-weight: bold;
`;

export default Home;
