/* global kakao */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonContain, Button } from "./Disease";

const { kakao } = window;

const Map = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [post, setPost] = useState("");
  const [url, setUrl] = useState("");
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
    };

    let map = new window.kakao.maps.Map(container, options);

    let ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(`${location.state.address + location.state.hospital + "의원"}`, placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      } else {
        alert("없습니다");
        navigate(-1);
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>");
        console.log(place);
        setName(place.place_name);
        setPost(place.address_name);
        setPhone(place.phone);
        setUrl(place.place_url);
        setIsClick(true);
        infowindow.open(map, marker);
      });
    }

    console.log("loading kakaomap");
  }, [isClick]);

  const containstyle = {
    display: "flex",
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "800px",
    boxShadow: "1px 4px 3px #331b3f",
    border: "1px solid #331b3f",
  };

  const styles = {
    width: `${isClick ? "50%" : "100%"}`,
    height: "350px",
  };

  return (
    <>
      <div style={containstyle}>
        <div id="map" style={styles}></div>
        {isClick ? (
          <Ul>
            <li>
              <img src={process.env.PUBLIC_URL + "img/hos-7.png"} />
              <h4>{name}</h4>
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "img/hom-5.png"} />
              <h4>{post}</h4>
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "img/pho-2.png"} />
              <h4>{phone ? phone : "비공개"}</h4>
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "img/u-2.png"} />
              <a href={url}>
                <h4>{url}</h4>
              </a>
            </li>
            <p>※ 홈페이지에 접속하시면 더 자세한 정보를 확인할 수 있습니다.</p>
          </Ul>
        ) : undefined}
        <BContain>
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
              navigate("/symptom");
            }}
          >
            증상 <br />
            다시 입력
          </Button>
        </BContain>
      </div>
    </>
  );
};

const BContain = styled(ButtonContain)`
  top: 95%;
`;

const Ul = styled.ul`
  width: 400px;
  height: 350px;
  background-color: #fff;
  padding: 20px;
  font-family: "SBAggroB";
  box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 10px inset;
  p {
    font-size: 13px;
    color: gray;
    padding-top: 15px;
    margin-left: 10px;
  }
  li {
    width: 400px;
    height: 60px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    :last-child {
      margin-bottom: 0px;
    }

    a {
      text-decoration: none;
      h4 {
        color: blue;
      }
    }

    img {
      width: 50px;
      height: 100%;
      font-size: 25px;
      margin-right: 10px;
    }
    h4 {
      width: 300px;
      font-size: 14px;
      word-wrap: break-word;
    }
  }
`;

export default Map;
