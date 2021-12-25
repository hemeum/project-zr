import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";

type Value = {
  [key: string]: string;
};

type ContainType = {
  load: boolean;
};

function Disease() {
  // 여기 레이아웃 맞추기
  const location = useLocation();
  const navigate = useNavigate();

  const [value, setValue] = useState<Value[]>([{ name: "", symptom: "", hospital: "", medicine: "" }]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.post("/api/disease", { disease: location.state }).then((res: AxiosResponse) => {
      setValue(res.data);
      setTimeout(() => {
        setLoading(true);
      }, 1500);
    });
  }, []);

  return (
    <Contain load={loading}>
      {loading ? (
        <>
          <TitleContain>
            <div>
              <h2>{`[ ${value === [] ? undefined : value[0].name} ]`}</h2>
              <p>: {value[0].symptom}</p>
            </div>
            <Img src={process.env.PUBLIC_URL + value[0].img} alt="이미지입니다"></Img>
          </TitleContain>
          <SubContain>
            <p>병원 : {value[0].hospital}</p>
            <p>약 : {value[0].medicine}</p>
          </SubContain>
          <ButtonContain>
            <Button
              type="button"
              onClick={() => {
                navigate("/");
              }}
            >
              처음으로
            </Button>
            <Button type="button">
              집 근처
              <br /> 병원 추천
            </Button>
          </ButtonContain>
        </>
      ) : (
        <PulseLoader></PulseLoader>
      )}
    </Contain>
  );
}

const Contain = styled.div<ContainType>`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "SBAggroB";
  padding: 30px;
  ${({ load }) => {
    return load ? "box-shadow: 1px 4px 3px #331b3f; border:1px solid #331b3f; background-color: #fff;" : "border:none";
  }};
`;

const TitleContain = styled.div`
  display: flex;
  div {
    width: 300px;
    h2 {
      margin-bottom: 10px;
      font-size: 35px;
    }
    p {
      width: 300px;
    }
  }
`;

const SubContain = styled.div`
  margin-top: 30px;
  p {
    margin-right: 20px;
    :first-child {
      margin-bottom: 10px;
    }
  }
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  margin-left: 100px;
  filter: drop-shadow(0px 5px 0px #331b3f);
`;

const ButtonContain = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Button = styled.button`
  width: 120px;
  height: 60px;
  padding: 10px;
  margin-top: 50px;
  background: none;
  border: 3px solid #331b3f;
  border-radius: 5px;
  :hover {
    border: none;
    background-color: #331b3f;
    color: #fff;
    font-size: 18px;
  }
  font-family: "SBAggroB";
  font-size: 16px;
  :first-child {
    margin-right: 5px;
  }
  :nth-of-type(2) {
    margin-left: 5px;
  }
`;

export default Disease;
