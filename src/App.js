import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Camp from "./component/Camp";
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
      <Routes>
        <Route path="/" />
        <Route path="/region" element={<Region camp={camp} />} />
        <Route path="/camp" element={<Camp camp={camp} />} />
      </Routes>
    </div>
  );
}

export default App;
