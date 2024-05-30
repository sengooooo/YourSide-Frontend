import { styled } from 'styled-components';
import Header from '../Header/components/Header';

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
` 

const BannerImg = styled.img`

`

export default function MyWork() {
  return (
    <>
      <Header />
      <Wrapper>
        <HeaderText>현재 <span>나의 근로 상황</span> <br /> 얼마나 알고 계시나요?</HeaderText>
        <BannerContainer>

        </BannerContainer>
      </Wrapper>  
    </>
  )
}