import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

type Value = {
  [key: string]: string;
};

function Disease() {
  // 여기 레이아웃 맞추기
  const location = useLocation();
  console.log(location.state);

  const [value, setValue] = useState<Value[]>([{ name: "", symptom: "", hospital: "", medicine: "" }]);

  useEffect(() => {
    axios.get("/api/disease").then((res: AxiosResponse) => {
      setValue(res.data);
    });
  }, []);

  return <div>{value === [] ? undefined : value[0].name}</div>;
}

export default Disease;
