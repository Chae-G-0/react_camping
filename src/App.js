import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./style/App.scss";
import Camp from "./component/Camp";
import Header from "./component/Header";
import Totop from "./component/Totop";
import Detail from "./pages/Detail";
import Main from "./pages/main/Main";
import Region from "./pages/Region";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Notice from "./pages/Notice";
import Board from "./pages/Board/Board";
import Write from "./pages/Board/Write";
import BDitem from "./pages/Board/BDitem";
import Footer from "./component/Footer";

function App() {
  const [campingData, setCampingData] = useState([]);
  const [cityList, setCityList] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=100&pageNo=1&MobileOS=WIN&MobileApp=camping&serviceKey=ywRlJa7ppqDu3r%2BZgaoE4hxgKL03rb%2FZH6YKSCyaOqRJZa%2B7MMiFJBXuSswp2Hph6Go86ji9%2BmET3T%2BKutJnFg%3D%3D&_type=json"
    );
    setCampingData(res.data.response.body.items.item);
    const doNm = res.data.response.body.items.item.map((it) => it.doNm).sort();
    const doList = new Set(doNm);
    setCityList(doList);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {campingData ? (
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/region"
              element={<Region campingData={campingData} cityList={cityList} />}
            >
              <Route
                path="camp/:doNm"
                element={<Camp campingData={campingData} cityList={cityList} />}
              />
            </Route>
            <Route
              path="/detail/:id"
              element={<Detail campingData={campingData} />}
            />
            <Route path="/notice" element={<Notice />} />
            <Route path="/board" element={<Board />} />
            <Route path="/boarditem/:id" element={<BDitem />} />
            <Route path="/write" element={<Write />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
          <Totop />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default App;
