import React from "react";
import { useSelector } from "react-redux";
import "../style/notice.scss";

const Notice = () => {
  const { NOTICE } = useSelector((state) => state);
  const notice = [...NOTICE].reverse();
  return (
    <section className="Notice">
      <div className="inner">
        <h2>공지사항</h2>
        <table>
          <thead>
            <tr>
              <th className="num">번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일자</th>
            </tr>
          </thead>
          <tbody>
            {notice.map((it) => {
              return (
                <tr key={it.id}>
                  <td>{it.id}</td>
                  <td className="tit">{it.tit}</td>
                  <td>관리자</td>
                  <td>2023.02.23.</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Notice;
