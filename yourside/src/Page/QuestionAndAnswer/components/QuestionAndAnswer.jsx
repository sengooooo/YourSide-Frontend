import { useState, useEffect } from "react";
import styled, {css} from "styled-components";
import { defaultInstance } from "../../../\bapis/utils/instance";
import PopularPost from "./PopularPost";
import PostComponent from "./PostComponent";

const Wrapper = styled.div`
  background: #EFF6FE;
  width: 80vw;
  margin: 0 auto;
`

const CategoryButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`

const CategoryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
  color: var(--system-color-system-black-700, #505050);
  border: none;
  width: 15vw;
  height: 5vh;
  cursor: pointer;

  ${({selected}) => 
    selected && 
    css `background: var(--main-color-Primary-color, #204598); color: #FFF; `};
`

const HeaderText = styled.p`
  color: var(--system-color-system-black-900, #111);
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 4.25rem; /* 141.667% */
  letter-spacing: -0.075rem;  
  margin-top: 5rem;
`

const PopularContanier = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`

const SubText = styled.p`
  color: var(--system-color-system-black-900, #111);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.125rem; /* 125% */
  letter-spacing: -0.0625rem;
`

const PostWriteButton = styled.button`
  background: var(--main-color-Sub-color, #1BBFC1);
  color: #FFF;
  // text-align: center;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.025rem;
  border: none;
  cursor: pointer;
`

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-bottom: 10rem;
`

export default function QuestionAndAnswer() {
  const [answer, setAnswer] = useState(true);
  const [info, setInfo] = useState(false);
  const [answerPopular, setAnswerPopular] = useState([]);
  const [postPopular, setPostPopular] = useState([]);

  const handleAnswer = () => {
    setAnswer(true);
    setInfo(false);
  }
  
  const handleInfo = () => {
    setAnswer(false);
    setInfo(true);
  }

  useEffect(() => {
    if (answer) {
      const getPostData = async () => {
        try {
          const [responsePopular, responsePost] = await Promise.all([
            defaultInstance.get(`api/posting/list/popular/0`),
            defaultInstance.get(`api/posting/list/0`)
          ]);
          setAnswerPopular(responsePopular.data.data);
          setPostPopular(responsePost.data.data);
        } catch (error) {
          console.error("데이터 받아들이지 못함", error);
        }
      };
      getPostData();
    }

    if (info) {
      const getPostData = async () => {
        try {
          const [responsePopular, responsePost] = await Promise.all([
            defaultInstance.get(`api/posting/list/popular/1`),
            defaultInstance.get(`api/posting/list/1`)
          ]);
          setAnswerPopular(responsePopular.data.data);
          setPostPopular(responsePost.data.data);
        } catch (error) {
          console.error("데이터 받아들이지 못함", error);
        }
      };
      getPostData();
    }
  }, [answer]);

  return (
    <>
      <Wrapper>
        <CategoryButtonBox>
          <CategoryButton selected={answer} onClick={handleAnswer} >네편 답변</CategoryButton>
          <CategoryButton selected={info} onClick={handleInfo} >네편 정보</CategoryButton>
        </CategoryButtonBox>
        <HeaderText>인기게시글</HeaderText>
        {answer && 
          <PopularContanier>
            {answerPopular.map((content, index) => {
              return (
                <PopularPost key={index} title={content.title} text={content.content}/>
              )
            })}
          </PopularContanier>
        }
        {info && 
          <PopularContanier>
            {answerPopular.map((content, index) => {
              return (
                <PopularPost key={index} title={content.title} text={content.content}/>
              )
            })}
          </PopularContanier>
        }
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "5rem", marginBottom: "3rem"}}>
          <SubText>게시글</SubText>
          <PostWriteButton>게시글 작성</PostWriteButton>
        </div>
        {answer && 
          <PostContainer>
            {postPopular.map((content, index) => {
              return (
                <PostComponent key={index} title={content.title} text={content.content} />
              )
            })}
          </PostContainer>
        }
        {info && 
          <PostContainer>
            {postPopular.map((content, index) => {
              return (
                <PostComponent key={index} title={content.title} text={content.content} />
              )
            })}
          </PostContainer>
        }
      </Wrapper>
    </>
  )
}
