import styled from "styled-components";
import questionImg from "../../../images/Q.svg";

const PostBox = styled.div`
  background: #FFF;
  /* 네편 카드 */
  box-shadow: 0px 4px 10px -1px rgba(35, 48, 56, 0.08);
  // width: 100%;
  height: 15vh;
  padding: 1.25rem;
`

const QuestionText = styled.p`
  color: var(--system-color-system-black-900, #111);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.25rem; /* 150% */
`

const PostText = styled.p`
  // overflow: hidden;
  color: var(--system-color-system-black-700, #505050);
  text-overflow: ellipsis;
  // white-space: nowrap;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  margin-top: 1rem;
`

export default function PostComponent({title, text}) {
  return (
    <>
      <PostBox>
        <div style={{display: "flex", alignItems: "center", gap: "1vw"}} >
          <img src={questionImg} alt="questionImg" />
          <QuestionText>{title}</QuestionText>
        </div>
        <PostText>{text}</PostText>
      </PostBox>
    </>
  ) 
}