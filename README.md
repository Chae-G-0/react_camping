## react_Camping

공공데이터 포털 캠핑장 API를 이용한 캠핑장 정보 제공 SPA

### 프로젝트 실행 방법
`npm install`
`npm run dev`

배포주소
---

### skill
React Node.js Express MongoDB Redux-toolkit react-router-dom

### 기능
- 고캠핑에서 제공하는 캠핑장 API를 이용해 지역별 캠핑장의 정보를 제공합니다.
- MongoDB 데이터베이스에 회원가입/로그인한 회원 정보, 게시판 정보를 저장할 수 있습니다. 
- REST API를 제공해 게시판에서 CRUD(create, Read, Update, Delete) 기능을 이용할 수 있습니다.
- '지역별' 페이지에서 전국 캠핑장 정보를 지역으로 나누어 볼 수 있습니다.
- 해당 캠핑장 클릭시 자세한 정보와 위치(카카오맵 API 이용)를 알 수 있습니다.
- 많은 양의 정보를 페이지로 나누어 제공하기 위해 페이지네이션을 구현했습니다.
- 회원가입시 회원 정보가 MongoDB에 저장되고, 로그인시 발급된 token이 localStorage에 저장됩니다.
- 로그인한 회원에 한해 게시판에서 글을 작성, 수정, 삭제할 수 있습니다.
- 작성한 아이디와 일치하지 않는 아이디로 게시글을 열람할 때 수정하기/삭제하기 버튼이 보이지 않습니다.

### 사용 라이브러리
- react-router-dom
- redux-toolkit
- SCSS
- styled-component
- axios
- jsonwebtoken
- react-kakao-maps-sdk
- react-slick
- react-icons
- mongoose