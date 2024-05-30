import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { defaultInstance } from '../../\bapis/utils/instance';
import axios from 'axios';
import Header from '../Header/components/Header';
import bannerImg from "../../images/BannerImg.png";
import ResultComponents from './components/ResultComponents';
import Footer from '../Footer/components/Footer';

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

const MoreButton = styled.button`
  background: var(--main-color-Sub-color, #1BBFC1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
  color: #FFF;
  /* Button/BUT1_Sb */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.025rem;
  border: none;
  cursor: pointer;
  float: right;
`

export default function MyWork() {
  const [workSheet, setWorkSheet] = useState([]);
  const [more, setMore] = useState(false);

  useEffect(() => {
    const getResult = async () => {
      try {
        const response = await defaultInstance.get(`api/worksheet/list`);
        console.log(response);
        setWorkSheet(response.data.data);
      } catch (error) {
        console.error("error", error);
      }
    }

    getResult();

  }, []);

  const handleShowMore = () => {
    setMore(!more);
  }

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
          {workSheet.slice(0, more ? workSheet.length : 3 ).map((data, index) => {
            return (
              <ResultComponents title={data.title} content={data.content} extra={data.extra_pay} holiday={data.holiday_pay} night={data.night_pay} overtime={data.overtime_pay} week={data.week_pay} key={index} />
            )
          })
        }
        <div style={{display: "flex", justifyContent: "flex-end"}}>
          {!more && <MoreButton onClick={handleShowMore}>더 보기</MoreButton>}
          {more && <MoreButton onClick={handleShowMore}>가리기</MoreButton>}
        </div>
      </Wrapper>  
      <Footer />
    </>
  )
}