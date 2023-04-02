import React from "react";

const MainContent = () => {
  return (
    <section className="mainContent">
      <div className="inner">
        <div className="titBox">
          <h2>안전수칙</h2>
          <p>안전한 캠핑 즐기기 위한 수칙들!</p>
        </div>
        <div className="safeBox">
          <div className="txtBox">
            <p>겨울철 캠핑 안전수칙</p>
            <ul>
              <li>
                난로 등 화기 난방기기 사용시 환기구를 반드시 확보하고 일산화탄소
                경보기도 필수로 준비해요
              </li>
              <li>전기용량을 체크하여 총 600W 미만으로 안전하게 사용해요</li>
              <li>텐트에서 취침시 가스랜턴 등을 반드시 소등해요</li>
              <li>난로 등 난방기기는 꼭 끄고 텐트 밖에 두고 자요</li>
              <li>
                휴대용 가스레인지는 꼭 화구보다 작은 조리기구를 사용하고 가스는
                화기 근처에 두지 않도록 해요
              </li>
            </ul>
          </div>
          <div className="txtBox">
            <p>여름철 캠핑 안전수칙</p>
            <ul>
              <li>
                더워진 날씨로 냉장, 냉동 시설이 부족한 캠핑장에서 식중독 위험이
                증가하고 있기 때문에 음식물 보관과 섭취에 유의해야 해요
              </li>
              <li>
                기후변화가 심한 여름철에는 일기예보를 확인하고 캠핑을 즐기는
                동안에도 날씨 체크를 해주세요
              </li>
              <li>
                날씨가 비교적 따뜻해지는 여름에는 차박의 수요가 늘어나니 차박
                수칙을 잘 지켜주세요
              </li>
              <li>비탈면 근처나 계곡지형은 피해서 텐트를 설치해주세요</li>
              <li>물에 휩쓸린 텐트, 장비는 절대로 꺼내려하지 마세요</li>
            </ul>
          </div>
          <div className="txtBox">
            <p>가을철 캠핑 안전수칙</p>
            <ul>
              <li>
                체온 유지에 더 신경써주세요 낮에는 가벼운 옷차림도 가능하지만
                밤이 되면 급격한 체온 저하를 겪을 수 있어요
              </li>
              <li>
                문어발식 콘센트 사용은 삼가주세요 전기 릴선을 충분히 풀어 사용하면 전기로 인한 화재를 예방할 수 있어요
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
