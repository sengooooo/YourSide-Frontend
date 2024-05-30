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
  width: 60%
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
  width: 5vw;
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

export default function ResultComponents() {
  const [resultTitleText, setResultTitleText] = useState("Title");
  const [resultText, setResultText] = useState(`상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이 없습니다.<br />
  주 근로 시간이 40시간이므로 주휴수당이 발생합니다.
  5인 미만 사업장에서 근무하시기에 연장근로수당은 발생하지 않습니다.
  5인 미만 사업장에서 근무하시기에 휴일근로수당은 발생하지 않습니다.
  따라서, 코카콜라 님의 월급은 800,000원 입니다.`);
  const [RequirementButtonText, setRequirementButtonText] = useState(["requirement", "requirement", "requirement"]);

  return (
    <ResultContainer>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <ResultHeaderText>{resultTitleText} 근로 결과지</ResultHeaderText>
        <DetailText>상세보기 &gt;</DetailText>
      </div>
      <div style={{height: "max-content", display: "flex", gap: "7rem"}}>
      <ResultText dangerouslySetInnerHTML={{ __html: resultText }} />
        <Partition />
        <RequirementBox>
          <RequirementText>발생 요건들</RequirementText>
          <RequirementButtonBox>
            {RequirementButtonText.map((text, index) => {
              return (
                <RequirementButton key={index}>{text}</RequirementButton>
              )
            })}
          </RequirementButtonBox>
        </RequirementBox>
      </div>

    </ResultContainer>
  )
}