import { useEffect, useState } from "react";
import RedButton from "../../components/RedButton";
import {
  rankButtonStyle,
  rankTitleNameStyle,
  sectionStyle,
  tableStyle,
  tdStyle,
  thStyle,
} from "./RankPageStyles";

function RankPage({ records, setRecords }) {
  let rankCount = 1;
  const [sortRecords, setSortRecords] = useState([]);
  const initRecord = () => {
    setRecords([]);
  }

  // 성공한 게임들 기록을 정렬
  useEffect(() => {
    setSortRecords(
      [...records].sort((a, b) => b.level - a.level || a.time - b.time)
    );
  }, [records]);

  return (
    <section css={sectionStyle}>
      <table css={tableStyle}>
        <caption css={rankTitleNameStyle}>랭킹 보드</caption>
        <thead>
          <tr>
            <th css={thStyle}>순위</th>
            <th css={thStyle}>레벨</th>
            <th css={thStyle}>플레이 시간</th>
            <th css={thStyle}>기록 시각</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(sortRecords) &&
            sortRecords.map((record) => (
              <tr key={record.time}>
                <td css={tdStyle}>{rankCount++}</td>
                <td css={tdStyle}>Level {record.level}</td>
                <td css={tdStyle}>{record.time}초</td>
                <td css={tdStyle}>{record.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <RedButton extraCss={rankButtonStyle} onClick={initRecord}>기록 초기화</RedButton>
    </section>
  );
}

export default RankPage;
