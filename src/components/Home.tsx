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
        <div>
          <i className="fas fa-search"></i>
        </div>
        증상을 알려줘!
      </Title>
      <Button type="button" onClick={handleStart}>
        시작
      </Button>
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
  font-family: "SBAggroB";
  font-size: 70px;
  text-shadow: 0 4px 0 #6ba992;
  div {
    margin-bottom: 30px;
  }
  i {
    color: #fff;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 50px;
  border: 5px solid #fff;
  border-radius: 5px;
  background: none;
  color: #fff;
  font-size: 23px;
  font-weight: bold;
  font-family: "SBAggroB";
  :hover {
    width: 130px;
    font-size: 30px;
  }
`;

export default Home;
