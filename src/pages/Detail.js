import React from "react";
// import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import { addItem } from "../store/mypageSlice";
import "../style/Detail.scss";
import { Map, MapMarker } from "react-kakao-maps-sdk";

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
  // const dispatch = useDispatch();
  const detail = campingData.filter(
    (it) => parseInt(id) === parseInt(it.contentId)
  );

  // const handleBookmark = () => {
  //   dispatch(addItem(detail[0].facltNm));
  //   alert("즐겨찾기에 저장되었습니다.");
  // };

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
                  {/* <button onClick={handleBookmark}>즐겨찾기 등록</button> */}
                </div>
              </div>
              <div className="facInfo">
                <div className="tit">
                  <h4>캠핑장 시설 정보</h4>
                  <p>{it.sbrsCl}</p>
                </div>
                <div className="infoList">
                  <div>
                    <span>{it.toiletCo}</span>
                    <p>화장실 개수</p>
                  </div>
                  <div>
                    <span>{it.wtrplCo}</span>
                    <p>개수대</p>
                  </div>
                  <div>
                    <span>{it.brazierCl}</span>
                    <p>화로대</p>
                  </div>
                  <div>
                    <span>{it.animalCmgCl}</span>
                    <p>애견 동반</p>
                  </div>
                  <div>
                    <span>{it.trlerAcmpnyAt === "Y" ? "가능" : "불가능"}</span>
                    <p>개인 트레일러 사용</p>
                  </div>
                  <div>
                    <span>{it.caravAcmpnyAt === "Y" ? "가능" : "불가능"}</span>
                    <p>개인 카라반 사용</p>
                  </div>
                  <div>
                    <span>{it.extshrCo}</span>
                    <p>소화기 개수</p>
                  </div>
                </div>
              </div>
              <Map
                center={{
                  lat: detail[0].mapX,
                  lng: detail[0].mapY,
                }}
                style={{
                  width: "1200px",
                  height: "350px",
                  border: "1px solid #ddd",
                }}
                level={3}
              >
                <MapMarker
                  position={{ lat: detail[0].mapX, lng: detail[0].mapY }}
                />
              </Map>
            </div>
          );
        })}
      </div>
    )
  );
};

export default React.memo(Detail);
