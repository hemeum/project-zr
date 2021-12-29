import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";

import Daum from "./Daum";

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

  const locationStateType = location.state as string[];

  const [value, setValue] = useState<Value[]>([{ name: "", symptom: "", hospital: "", medicine: "" }]);
  const [loading, setLoading] = useState(false);
  const [isAddress, setIsAddress] = useState(false);

  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [popUp, setPopUp] = useState(false);

  const handleAddress = (e: { target: { value: React.SetStateAction<string> } }) => {
    setAddress(e.target.value);
  };

  const handleAddressDetail = (e: { target: { value: React.SetStateAction<string> } }) => {
    setAddressDetail(e.target.value);
  };

  useEffect(() => {
    axios
      .post("/api/disease", { disease: locationStateType[0], body: locationStateType[1] })
      .then((res: AxiosResponse) => {
        setValue(res.data);
        setTimeout(() => {
          setLoading(true);
        }, 1500);
      });
  }, []);

  return (
    <>
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
              <Button
                type="button"
                onClick={() => {
                  setIsAddress(true);
                }}
              >
                집 근처
                <br /> 병원 추천
              </Button>
            </ButtonContain>
          </>
        ) : (
          <PulseLoader></PulseLoader>
        )}
      </Contain>
      {isAddress ? <Overay></Overay> : undefined}
      {isAddress ? (
        <>
          <AddresModal>
            <h2>주소를 입력해주세요.</h2>
            <span>※ 주소 근처 병원을 소개해드리기 위해 필요한 정보이며, 저장되지 않습니다.</span>
            <Form>
              <div>
                <p>주소</p>
                <input
                  type="text"
                  value={address}
                  onChange={handleAddress}
                  onClick={() => {
                    setPopUp(!popUp);
                  }}
                ></input>
              </div>
              <div>
                <p>상세주소</p>
                <input type="text" value={addressDetail} onChange={handleAddressDetail}></input>
              </div>
            </Form>
            <ModalButtonContain>
              <Button
                type="button"
                onClick={() => {
                  setIsAddress(false);
                }}
              >
                뒤로가기
              </Button>
              <Button
                type="button"
                onClick={() => {
                  console.log(address);
                  navigate("/hospital", { state: { address: address, hospital: value[0].hospital } });
                }}
              >
                추천받기
              </Button>
            </ModalButtonContain>
          </AddresModal>
          {popUp ? (
            <div>
              <Daum address={address} setAddress={setAddress} setPopUp={setPopUp}></Daum>
            </div>
          ) : undefined}
        </>
      ) : undefined}
    </>
  );
}

const Contain = styled.div<ContainType>`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  font-family: "SBAggroB";
  ${({ load }) => {
    return load ? "box-shadow: 1px 4px 3px #331b3f; border:1px solid #331b3f; background-color: #fff;" : "border:none";
  }};
`;

const Overay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
  z-index: 100;
`;

const TitleContain = styled.div`
  display: flex;
  div {
    width: 300px;
    h2 {
      margin-bottom: 10px;
      font-size: 25px;
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
  margin: 30px 30px 0px 70px;
  filter: drop-shadow(0px 5px 0px #331b3f);
`;

export const ButtonContain = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Button = styled.button`
  width: 120px;
  height: 60px;
  padding: 10px;
  margin-top: 50px;
  border: 3px solid #331b3f;
  border-radius: 5px;
  background: none;
  :hover {
    font-size: 18px;
    border: none;
    color: #fff;
    background-color: #331b3f;
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

const AddresModal = styled.div`
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  width: 550px;
  height: 550px;
  padding: 30px;
  font-family: "SBAggroB";
  border: 1px solid #331b3f;
  border-radius: 5px;
  box-shadow: 1px 4px 3px #331b3f;
  background-color: #fff;
  z-index: 1000;
  h2 {
    margin-bottom: 40px;
  }
  span {
    font-size: 16px;
    color: gray;
  }
`;

const ModalButtonContain = styled(ButtonContain)`
  position: absolute;
  bottom: 30px;
  left: 275px;
  transform: translateX(-50%);
`;

const Form = styled.form`
  width: 100%;
  div {
    width: 100%;
    margin: 40px 0;
  }
  input {
    width: 100%;
    height: 35px;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
  }
  p {
    width: 100px;
    font-size: 18px;
  }
`;

export default Disease;
