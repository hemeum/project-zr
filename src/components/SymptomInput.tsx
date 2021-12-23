import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// symptom 데이터 모듈로 분리하기, Form 스타일 order가 1이 되면 스타일 수정하게 하기

function SymptomInput() {
  const [order, setOrder] = useState(0);
  const [radioName, setRadioName] = useState("body");
  const [disease, setDisease] = useState("");

  const navigate = useNavigate();

  const radioValue = [
    {
      id: 1,
      kbody: "머리",
      body: "head",
      symptom: [
        {
          id: 1,
          name: "긴장성 두통",
          desc: "주로 아침이나 밤에 이마, 볼, 목, 관자놀이의 통증이 느껴진다.",
        },
        {
          id: 2,
          name: "편두통",
          desc: "관자놀이가 욱신거리고 움직일 때 통증이 심하며, 구토가 동반된다.",
        },
        {
          id: 3,
          name: "군발두통",
          desc: "한쪽 눈, 관자놀이, 이마 주변이 아프다.",
        },
        {
          id: 4,
          name: "경추성두통",
          desc: "목 근처부터 머리 뒷 부분까지 통증이 느껴지며, 귀와 눈까지 아프다.",
        },
        {
          id: 5,
          name: "부비동두통",
          desc: "이마와 코 주변, 양쪽 눈이 아프다.",
        },
        { id: 6, name: "턱관절두통", desc: "관자놀이 부근, 음식물 씹을 때 두통이 느껴진다." },
      ],
    },
    {
      id: 2,
      kbody: "가슴",
      body: "heart",
      symptom: [
        {
          id: 1,
          name: "허혈성 심질환",
          desc: "가만히 있을 땐 괜찮다가 계단을 오르거나 무거운 짐을 들고 걸을 때 통증이 느껴진다.",
        },
        {
          id: 2,
          name: "소화기 심질환",
          desc: "앞가슴과 등쪽에서 통증, 타는 듯한 느낌이 든다.",
        },
        {
          id: 3,
          name: "신경계 심질환",
          desc: "갈비뼈 쪽 통증, 상체를 움직일 때 통증, 심호흡 시 따가운 통증이 느껴진다.",
        },
        {
          id: 4,
          name: "스트레스성 심질환",
          desc: "칼로 찌르는 느낌, 어지러움과 과호흡, 왼쪽 가슴 밑 통증이 느껴진다.",
        },
      ],
    },
    {
      id: 3,
      kbody: "배",
      body: "stomach",
    },
    { id: 4, kbody: "어깨", body: "shoulder" },
    { id: 5, kbody: "팔", body: "arm" },
    { id: 6, kbody: "허벅지", body: "thigh" },
    { id: 7, kbody: "종아리", body: "calf" },
    { id: 8, kbody: "손가락, 발가락", body: "finger and toes" },
  ];

  const inputs = (order: number) => {
    if (order === 0) {
      return radioValue.map((value) => (
        <label key={value.id}>
          <input
            type="radio"
            name={radioName}
            value={value.body}
            onClick={(e) => {
              console.log(e.currentTarget.value);
              setRadioName(e.currentTarget.value);
            }}
          />
          <p>{value.kbody}</p>
        </label>
      ));
    } else {
      let number = 0;
      for (let i = 0; i < radioValue.length; i++) {
        if (radioValue[i].body === radioName) {
          number = i;
          break;
        }
      }
      return radioValue[number].symptom?.map((value) => {
        return (
          <div key={value.id}>
            <label>
              <input
                type="radio"
                name={radioName}
                value={value.name}
                onClick={(e) => {
                  console.log(e.currentTarget.value);
                  setDisease(e.currentTarget.value);
                }}
              />
              <span>{value.desc}</span>
            </label>
          </div>
        );
      });
    }
  };

  return (
    <Contain>
      <Title>{order === 0 ? "어디가 아프신가요?" : "어떻게 아프신가요?"}</Title>
      <Arrows>
        <i
          className="fas fa-caret-left arrow-left"
          onClick={(): void => {
            if (order === 0) {
              return;
            } else {
              setOrder(order - 1);
            }
          }}
        ></i>
        <i
          className="fas fa-caret-right arrow-right"
          onClick={(): void => {
            if (radioName === "body") {
              alert("아프신 곳을 선택해주세요.");
            } else if (order === 0) {
              setOrder(order + 1);
            } else if (disease === "") {
              alert("증상을 선택해주세요.");
            } else if (disease !== "") {
              navigate("/disease", { state: disease });
            }
          }}
        ></i>
      </Arrows>
      <Form name={`${order}`}>{inputs(order)}</Form>
    </Contain>
  );
}

const Contain = styled.div`
  position: relative;
  width: 100%;
  height: 960px;
`;

const Title = styled.h1`
  position: absolute;
  top: 15%;
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
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ name }): string => {
    return name !== "0" ? `display : block;` : `display : flex; justify-content: space-between;`;
  }};
  width: 960px;
  input {
    ${({ name }): string => {
      return name !== "0" ? "width:50px;" : "width:120px";
    }};
    margin: 0;
  }
  p {
    text-align: center;
    color: #331b3f;
    font-weight: bold;
  }
  div {
    margin-bottom: 10px;
  }
  span {
    color: #331b3f;
    font-weight: bold;
  }
`;

const Arrows = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 960px;
  height: 74px;
  i {
    font-size: 50px;
    color: #fff;
  }
  .arrow-left {
    position: absolute;
    left: -70px;
    top: 5px;
  }
  .arrow-right {
    position: absolute;
    right: -70px;
    top: 5px;
  }
`;

export default SymptomInput;
