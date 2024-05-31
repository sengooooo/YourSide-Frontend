import styled from "styled-components";
import questionImg from "../../../images/Q.svg";

const PopularBox = styled.div`
  width: 28%;
  height: 22vh;
  background: #FFF;
  padding: 1.25rem;
`
// const QuestionImg = styled.img`

// `

const QuestionText = styled.p`
  overflow: hidden;
  color: var(--system-color-system-black-900, #111);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
` 

const AnswerText = styled.p`
  overflow: hidden;
  color: var(--system-color-system-black-700, #505050);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
  margin-top: 1rem;
`


export default function PopularPost({title, text}) {
  return (
    <>
      <PopularBox>
        <div style={{display: "flex", alignItems: "center", gap: "1vw"}}>
          <img src={questionImg} alt="questionImg" />
          <QuestionText>{title}</QuestionText>
        </div>
        <AnswerText>{text}</AnswerText>
      </PopularBox>
    </>
  )
}