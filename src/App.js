import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Region from "./pages/Region";

function App() {
  const [camp, setCamp] = useState("");
  useEffect(() => {
    const url =
      "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=100&pageNo=1&MobileOS=WIN&MobileApp=camping&serviceKey=ywRlJa7ppqDu3r%2BZgaoE4hxgKL03rb%2FZH6YKSCyaOqRJZa%2B7MMiFJBXuSswp2Hph6Go86ji9%2BmET3T%2BKutJnFg%3D%3D&_type=json";
    axios.get(url).then((res) => {
      setCamp(res.data.response.body.items.item);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="container">
        {[...camp].map((it, idx) => {
          return (
            <div className="campTitle" key={idx}>
              <img src={it.firstImageUrl} alt="" />
              <h3>{it.facltNm}</h3>
              <p>{it.addr1}</p>
              <p>{it.tel}</p>
            </div>
          );
        })}
      </div>
      <Routes>
        <Route path="/region" element={<Region />} />
      </Routes>
    </div>
  );
}

export default App;
