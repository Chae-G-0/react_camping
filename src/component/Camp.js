import React from 'react'

const Camp = ({camp}) => {
  return (
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
  );
}

export default Camp