import { styled } from 'styled-components';

const Wrapper = styled.div`
  background: #EFF6FE;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderText = styled.p`
  color: var(--system-color-system-black-900, #111);
  font-family: Pretendard;
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 4.25rem; /* 141.667% */
  letter-spacing: -0.075rem;

  & span {
    color: var(--main-color-Sub-color, #1BBFC1);
  }
`

export default function MyWork() {
  return (
    <Wrapper>
      <HeaderText>현재 <span>나의 근로 상황</span> <br /> 얼마나 알고 계시나요?</HeaderText>
    </Wrapper>  
  )
}