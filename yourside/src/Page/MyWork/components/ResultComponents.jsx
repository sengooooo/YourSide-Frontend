import styled from "styled-components";
import { useState } from "react";

const ResultContainer = styled.div`
  margin-top: 3rem;
  width: 80vw;
  background: #FFF;
  padding: 3vw;
  margin-bottom: 2.5rem;
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
  line-height: 1.75rem; /* 211.111% */
  // width: 80%
`

const Partition = styled.div`
  width: 0.125rem;
  // height: 10vh;
  background: #E5E5EC;
`

const RequirementBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5vh;
`

const RequirementText = styled.p`
  color: #000;
  // text-align: center;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.75rem; /* 155.556% */
  letter-spacing: -0.02813rem;
`

const RequirementButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1vw;
`

const RequirementButton = styled.button`
  border-radius: 6.25rem;
  background: var(--main-color-Primary-color, #204598);
  width: 6vw;
  height: 4vh;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  // text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.01875rem;
`

export default function ResultComponents({title, content, week, holiday, extra, night, overtime}) {

  return (
    <ResultContainer>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <ResultHeaderText>{title}</ResultHeaderText>
        <DetailText>상세보기 &gt;</DetailText>
      </div>
      <div style={{height: "max-content", display: "flex", gap: "6rem"}}>
      <ResultText dangerouslySetInnerHTML={{ __html: content }} />
        <Partition />
        <RequirementBox>
          <RequirementText>발생 요건들</RequirementText>
          <RequirementButtonBox>
            {week && <RequirementButton>주휴수당</RequirementButton>}
            {extra && <RequirementButton>가산수당</RequirementButton>}
            {holiday && <RequirementButton>휴일근로수당</RequirementButton>}
            {night && <RequirementButton>야간근로수당</RequirementButton>}
            {overtime && <RequirementButton>연장근로수당</RequirementButton>}
          </RequirementButtonBox>
        </RequirementBox>
      </div>

    </ResultContainer>
  )
}