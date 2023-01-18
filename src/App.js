import axios from "axios";
import { useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  useEffect(() => {
    axios
      .get(
        "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=50&pageNo=5&MobileOS=WIN&MobileApp=camipng&serviceKey=ywRlJa7ppqDu3r%2BZgaoE4hxgKL03rb%2FZH6YKSCyaOqRJZa%2B7MMiFJBXuSswp2Hph6Go86ji9%2BmET3T%2BKutJnFg%3D%3D&_type=json"
      )
      .then((res) => {
        console.log(res.data.response.body.items.item);
      });
  });
  return (
    <div className="App">
      <header>
        <h1>캠핑장 프로젝트</h1>
      </header>
    </div>
  );
}

export default App;
