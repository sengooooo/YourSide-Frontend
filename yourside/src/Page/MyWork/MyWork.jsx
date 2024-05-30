import { styled } from 'styled-components';
import { useState } from 'react';
import Header from '../Header/components/Header';
import bannerImg from "../../images/BannerImg.png";
import ResultComponents from './components/ResultComponents';

const Wrapper = styled.div`
  background: #EFF6FE;
  width: 80vw;
  margin: 0 auto;
`

const HeaderText = styled.p`
  margin-top: 5rem;
  color: var(--system-color-system-black-900, #111);
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3rem; /* 141.667% */
  letter-spacing: -0.075rem;

  & span {
    color: var(--main-color-Sub-color, #1BBFC1);
  }
`

const BannerContainer = styled.div`
  margin-top: 3.5rem;
  display: flex;
  gap: 2vw;
  height: max-content;
` 

const BannerImgBox = styled.img`
  width: 70%;
`
const BannerButton = styled.button`
  background: var(--main-color-Primary-color, #204598);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.625rem; /* 131.25% */
  cursor: pointer;
  // height: 100%;
  width: 20%;
  // flex-grow: 1;
  border: none;
`

export default function MyWork() {
  const [workSheet, setWorkSheet] = useState([]);
  const [more, setMore] = useState(false);

  return (
    <>
      <Header />
      <Wrapper>
        <HeaderText>현재 <span>나의 근로 상황</span> <br /> 얼마나 알고 계시나요?</HeaderText>
        <BannerContainer>
          <BannerImgBox src={bannerImg} alt='bannerImg' />
          <BannerButton>바로가기</BannerButton>
        </BannerContainer>
        <HeaderText>다른 결과지들은 어떨까?</HeaderText>
        {/* {more == false && {

        }} */}
        <ResultComponents />
      </Wrapper>  
    </>
  )
}