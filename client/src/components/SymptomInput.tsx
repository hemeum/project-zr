import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// symptom 데이터 모듈로 분리하기, Form 스타일 order가 1이 되면 스타일 수정하게 하기

type FormType = {
  order: string;
};

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
      kbody: "어깨",
      body: "shoulder",
      symptom: [
        {
          id: 1,
          name: "오십견",
          desc: "팔을 들어 올리거나 뒤로 젖힐 때 삐끗하는 느낌이 있거나, 어깨를 쓰지 않을 때도 통증이 나타난다",
        },
        {
          id: 2,
          name: "회전근개파열",
          desc: "무리한 일이나 운동을 한 후에 어깨 통증이 생긴다.",
        },
        {
          id: 3,
          name: "석회화건염",
          desc: "어깨 힘줄이나 근육을 누르는 자세를 취했을 때 통증이 심해진다. 예를 들어 자려고 누웠을 때 통증이 심해진다.",
        },
        {
          id: 4,
          name: "목디스크",
          desc: "뒷목이 뻣뻣해지면서, 어깨가 무겁고, 어깨·팔·손 등이 저린다.",
        },
        {
          id: 5,
          name: "어깨충돌증후군",
          desc: "특정 방향으로 팔을 들 때 통증이 있고, 어깨 속에서 무엇인가 걸리는 느낌이 든다",
        },
      ],
    },
    {
      id: 4,
      kbody: "다리",
      body: "leg",
      symptom: [
        {
          id: 1,
          name: "고관절 근골격계 질환",
          desc: "골반과 다리가 이어지는 부분이 아프다.",
        },
        {
          id: 2,
          name: "무릎 관절 근골격계 질환",
          desc: "무릎 관절이 아프다.",
        },
        {
          id: 3,
          name: "발목 관절 근골격계 질환",
          desc: "발목 관절이 아프다.",
        },
        {
          id: 4,
          name: "혈관성 다리 통증",
          desc: "다리 전체가 아프며, 다리가 붓는다.",
        },
      ],
    },
    {
      id: 5,
      kbody: "손가락",
      body: "finger",
      symptom: [
        {
          id: 1,
          name: "퇴행성 관절염",
          desc: "손가락에 통증이 있으며, 손가락 끝마디가 예전보다 굵어지고 돌출되었다.",
        },
        {
          id: 2,
          name: "방아쇠수지",
          desc: "손가락을 움직일 때 총의 방아쇠를 당기는 것처럼 어느 순간 '딱'하는 소리가 나고 통증이 동반된다.",
        },
        {
          id: 3,
          name: "드퀘르벵 건염",
          desc: "엄지손가락 바깥에서 손목까지 이어지는 부위에만 통증이 나타난다.",
        },
        {
          id: 4,
          name: "류마티스 관절염",
          desc: "손가락 마디에 찌릿한 통증과 함께 뻣뻣함·미열·부기가 느껴진다.",
        },
        {
          id: 5,
          name: "통풍",
          desc: "손가락이 갑자기 퉁퉁 붓고, 열이 느껴지며, 극심한 통증이 나타난다. 뼈마디가 울퉁불퉁해지기도 한다.",
        },
      ],
    },
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
  console.log(order);

  return (
    <Contain>
      <Title>{order === 0 ? "어디가 아프신가요?" : "어떻게 아프신가요?"}</Title>
      <Arrows order={`${order}`}>
        <i
          className="fas fa-caret-left arrow-left"
          onClick={(): void => {
            if (order === 0) {
              return;
            } else {
              setOrder(order - 1);
              setRadioName("body");
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
              navigate("/disease", { state: [disease, radioName] });
            }
          }}
        ></i>
      </Arrows>
      <Form order={`${order}`}>{inputs(order)}</Form>
    </Contain>
  );
}

const Contain = styled.div`
  position: relative;
  width: 100%;
  height: 960px;
  font-family: "SBAggroB";
`;

const Title = styled.h1`
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 150px;
  text-align: center;
  line-height: 75px;
  color: #fff;
  font-size: 50px;
  text-shadow: 0 4px 0 #6ba992;
`;

const Form = styled.form<FormType>`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ order }): string => {
    return order !== "0" ? `display : block;` : `display : flex; justify-content: space-between;`;
  }};
  width: 960px;
  input {
    ${({ order }): string => {
      return order !== "0" ? "width:50px;" : "width:200px";
    }};
    margin: 0;
  }
  p {
    text-align: center;
    color: #331b3f;
    font-weight: bold;
    font-size: 18px;
    margin-top: 8px;
  }
  div {
    margin-bottom: 15px;
  }
  span {
    color: #331b3f;
    font-weight: bold;
    font-size: 18px;
  }
`;

const Arrows = styled.div<FormType>`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 960px;
  height: 74px;
  i {
    font-size: 50px;
    color: #fff;
  }
  .arrow-left {
    ${({ order }) => {
      return order === "0" ? "opacity:0; visibility:none;" : "opacity:1; visibility:visible";
    }};
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
