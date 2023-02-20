import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./style/App.scss";
import Camp from "./component/Camp";
import Header from "./component/Header";
import Totop from "./component/Totop";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import Region from "./pages/Region";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Thema from "./pages/Thema";
import Notice from "./pages/Notice";
import Board from "./pages/Board/Board";
import Write from "./pages/Board/Write";

function App() {
  const [campingData, setCampingData] = useState([]);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL;
    axios.get(url).then((res) => {
      setCampingData(res.data.response.body.items.item);
      const doNm = res.data.response.body.items.item
        .map((it) => it.doNm)
        .sort();
      const doList = new Set(doNm);
      setCityList(doList);
    });
  }, []);
  return (
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
        <Route path="/thema" element={<Thema campingData={campingData} />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/board" element={<Board />} />
        <Route path="/write" element={<Write />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Totop />
    </div>
  );
}

export default App;
