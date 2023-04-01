import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addItem } from "../store/mypageSlice";
import "../style/Detail.scss";

const NoImg = styled.div`
  flex: 1;
  width: 380px;
  height: 255px;
  border: 1px solid #ddd;
  margin: 0 0 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Detail = ({ campingData }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = campingData.filter(
    (it) => parseInt(id) === parseInt(it.contentId)
  );

  const { kakao } = window;
  const KakaoMapScript = () => {
    const container = document.getElementById("map");
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(detail[0].mapX, detail[0].mapY), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(detail[0].mapX, detail[0].mapY);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  };

  const handleBookmark = () => {
    dispatch(addItem(detail[0].facltNm));
    alert("즐겨찾기에 저장되었습니다.");
  };

  useEffect(() => {
    detail && KakaoMapScript();
  }, [detail]);

  return (
    detail && (
      <div className="Detail">
        {detail.map((it) => {
          return (
            <div className="infoBox" key={it.contentId}>
              <div className="topBox">
                <figure>
                  {it.firstImageUrl.length > 1 ? (
                    <img src={it.firstImageUrl} alt="" />
                  ) : (
                    <NoImg>등록된 사진이 없습니다.</NoImg>
                  )}
                </figure>
                <div className="textBox">
                  <h3>{it.facltNm}</h3>
                  <span>{it.lineIntro}</span>
                  <table>
                    <tbody>
                      <tr>
                        <th>주소</th>
                        <td>{it.addr1}</td>
                      </tr>
                      <tr>
                        <th>전화번호</th>
                        <td>{it.tel}</td>
                      </tr>
                      <tr>
                        <th>캠핑장 환경</th>
                        <td>{it.lctCl}</td>
                      </tr>
                      <tr>
                        <th>홈페이지</th>
                        <td>
                          <a href={it.homepage} target="_blank">
                            {it.homepage}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>예약 방법</th>
                        <td>{it.resveCl}</td>
                      </tr>
                      <tr>
                        <th>운영 기간</th>
                        <td>{it.operPdCl}</td>
                      </tr>
                      <tr>
                        <th>운영일</th>
                        <td>{it.operDeCl}</td>
                      </tr>
                      <tr>
                        <th>주변시설</th>
                        <td>{it.posblFcltyCl}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button onClick={handleBookmark}>즐겨찾기 등록</button>
                </div>
              </div>
              <div className="facInfo">
                <h4>캠핑장 시설 정보</h4>
                <p>{it.sbrsCl}</p>
                <p>화장실 개수 : {it.toiletCo}</p>
                <p>애견 동반 : {it.animalCmgCl}</p>
                <p>
                  개인 트레일러 사용 :
                  {it.trlerAcmpnyAt === "Y" ? "가능" : "불가능"}
                </p>
                <p>
                  개인 카라반 사용 :
                  {it.caravAcmpnyAt === "Y" ? "가능" : "불가능"}
                </p>
                <p>소화기 개수 :{it.extshrCo}</p>
              </div>
              <div className="siteBottom">
                <div className="bottom">
                  <span>잔디</span>
                  <p>{it.siteBottomCl1}</p>
                </div>
                <div className="bottom">
                  <span>파쇄석</span>
                  <p>{it.siteBottomC2}</p>
                </div>
                <div className="bottom">
                  <span>테크</span>
                  <p>{it.siteBottomCl3}</p>
                </div>
                <div className="bottom">
                  <span>자갈</span>
                  <p>{it.siteBottomCl4}</p>
                </div>
                <div className="bottom">
                  <span>맨흙</span>
                  <p>{it.siteBottomCl5}</p>
                </div>
              </div>
              <div
                id="map"
                style={{
                  width: "500px",
                  height: "350px",
                }}
              ></div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default React.memo(Detail);
