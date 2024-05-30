import styled from "styled-components";
import { useState } from "react";

const ResultContainer = styled.div`
  margin-top: 3rem;
  width: 80vw;
  background: #FFF;
  padding: 3vw;
`

const ResultHeaderText = styled.p`
  color: var(--system-color-system-black-900, #111);
  font-family: Pretendard;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.625rem; /* 131.25% */
`

const DetailText = styled.p`
  color: var(--system-color-system-black-900, #111);
  font-family: Pretendard;
  font-size: 1.44006rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.05719rem; /* 142.857% */
  letter-spacing: -0.036rem;
  cursor: pointer;
`

const ResultText = styled.p`
  overflow: hidden;
  color: var(--system-color-system-black-600, #666);
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.375rem; /* 211.111% */
`

const Partition = styled.div`
  width: 0.125rem;
  height: 100%;
  background: #E5E5EC;
`

export default function ResultComponents() {
  const [resultTitleText, setResultTitleText] = useState("Title");
  const [resultText, setResultText] = useState("Text");

  return (
    <ResultContainer>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <ResultHeaderText>{resultTitleText} 근로 결과지</ResultHeaderText>
        <DetailText>상세보기 &gt;</DetailText>
      </div>
      <div>
        <ResultText>
          {resultText}
        </ResultText>
        <Partition />

      </div>

    </ResultContainer>
  )
}