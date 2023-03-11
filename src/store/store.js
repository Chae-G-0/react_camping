import { configureStore, createSlice } from "@reduxjs/toolkit";
import boardSlice from "./boardSlice";
import loginSlice from "./loginSlice"

const NOTICE = createSlice({
  name: "NOTICE",
  initialState: [
    {
      id: 1,
      tit: "해외구매대행으로 구입한 미인증 캠핑용 가스용품 사고 위험 높아..",
      view: "1127",
    },
    {
      id: 2,
      tit: "일산화탄소 사고 캠핑장에서 26% 발생 ‘주의 당부’",
      view: "232",
    },
    {
      id: 3,
      tit: "일산화탄소 중독 4건 중 1건은 캠핑시 발생…수시로 환기",
      view: "226",
    },
    {
      id: 4,
      tit: "캠핑족 식중독 위험↑…‘페트병‧해산물’ 보관 신경 써야",
      view: "1127",
    },
    {
      id: 5,
      tit: "등산·캠핑·물놀이에 평소 알아두면 사람 살리는 응급처치",
      view: "210",
    },
    {
      id: 6,
      tit: "경기도, 등록야영장 689개소 인증 현판 설치...안전 캠핑 문화 유도",
      view: "171",
    },
    {
      id: 7,
      tit: "공공기관 고객만족도 조사 관련 개인정보 제3자 제공사항 알림",
      view: "37",
    },
    {
      id: 8,
      tit: "코로나로 늘어난 캠핑족.. 카라반·용품 등 한자리에",
      view: "93",
    },
    {
      id: 9,
      tit: "[생활정보] 캠핑용품으로 인한 안전사고 예방법",
      view: "166",
    },
    {
      id: 10,
      tit: "캠핑 추억 산산조각 내는 '소리 없는 암살자' 일산화탄소",
      view: "119",
    },
  ],
});

export default configureStore({
  reducer: {
    NOTICE: NOTICE.reducer,
    login: loginSlice,
    logout: loginSlice,
    boardSlice: boardSlice,
  },
});
