import React from 'react';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import { Link } from 'react-router-dom';

const NotationExample = () => {

  const TitleContainer={
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between"
  }

  const TitleStyle={
    color: "var(--system-color-system-black-900, #111)",
fontFamily: "Pretendard",
fontSize: "1.5rem",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "2.125rem",
letterSpacing: "-0.0375rem",
marginBottom:"0.75rem"
  }

  const WarnStyle={
    color: "var(--main-color-Primary-color, #204598)",
fontFamily: "Pretendard",
fontSize: "0.875rem",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "1.75rem",
letterSpacing:"-0.02188rem"
  }

  const DateStyle={
    color: "var(--system-color-system-black-500, #767676)",
fontFamily: "Pretendard",
fontSize: "0.875rem",
fontWeight: "400",
lineHeight: "1.25rem",
letterSpacing: "-0.02188rem"
  }

  const ContentStyle={
    color: "var(--system-color-system-black-900, #111)",
fontFamily: "Pretendard",
fontSize: "1.125rem",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "1.875rem",
letterSpacing: "-0.02813rem"
  }

  const BtnStyle={
    background: "var(--main-color-Sub-color, #1BBFC1)",
    width:"23.75rem",
    height:"3.75rem",
    display:"flex",
alignItems:"center",
justifyContent:"center",
marginTop:"6.25rem",
cursor:"pointer"
  }
  const itemStyle={
    color: "#FFF",
textAlign: "center",
fontFamily: "Pretendard",
fontSize: "1.25rem",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "1.75rem" ,
letterSpacing: "-0.03125rem",
  }


  return (
    <>
    <Header/>
    <div className="NotationExample">
      <div className="container">
        <div style={TitleContainer}>
          <div style={TitleStyle}>네편 설명서</div>
          <div style={WarnStyle}>주요</div>
        </div>
        <div style={DateStyle}>2024.05.03</div>
        <hr />
        <div style={ContentStyle}>
          근로계약서 검토 너무 어려워요.
          <br />
          나는 지금 알맞은 월급을 받고 있을까요?
          <br />
          세세한 근로법이 어려운 ‘네편’ 이 되어줄게요! <br />
          <br />
          아르바이트 처음 시작하는 20대 초반에게 너무 어려운 근로계약서와 근로법
          <br />
          귀찮은 근로 수당 계산, 가산 수당 이번달 내가 받을 월급이 얼마였지?
          <br />
          주변에 아는 노무사가 없는데 빠르고 간단하게 해결법을 들을 순 없을까?
          <br />
          <br />
          그래서 준비했어요!
          <br />
          표준 근로계약서를 토대로 확인해야 할 중요한 점을 복기할 수 있고
          <br /> 월 근무 일수 시간 근무한 공휴일 등을 계산해 이번달 급여사항도
          확인 할 수 있는 건 물론!
          <br />
          실시간으로 고민을 올리고 빠르고 간편하게 경험자와 노무사의 답변도 받을
          수 있는 ‘네편’
          <br />
          <br /> 우리 ‘네편’은 이런 서비스예요!
          <br />
          <br />
          1. 내 계약서 재검토
          <br />
          교부 받은 근로계약서의 적법성을 확인할 수 있어요.
          <br />&nbsp;*  계약서에 작성된 항목이 적법한 내용인지 자세한 설명!
          <br />&nbsp;*  표준 근로계약서를 통해 필수 항목이 빠진 게 없는 지 확인 가능!
          <br />
          <br />
          2. 내 근로 정리
          <br />
          나의 근로 형태에 따른 근로 상황 정리를 할 수 있어요
          <br />&nbsp;* 번거롭게 근무 일정 확인하며 계산기 두드리던 날들은 안녕!
          <br />&nbsp;* 나의 급여를 세세하게 확인 가능한 것은 물론!
          <br />&nbsp;* 가산수당 / 주휴수당 / 연장근무수당 / 야근수당 / 휴일수당
          여부도 간략한 결과지로 확인!
          <br />&nbsp;* 다른 사람들은 어떨까? 공유된 근로 결과지를 보고 비교
          분석까지도 가능해요!
          <br />
          <br />
          3. 네편 현답
          <br />
          복잡한 설명 필요없어요! 나의 근로 결과지를 토대로 어려운 노동법 쉽게
          답하고 빠르게 정보 얻자!
          <br />&nbsp;* 나의 근로 결과지를 첨부해 간략하게 근로 상황을 보여줄 수
          있어요!
          <br />&nbsp;* 실시간으로 **‘네편’**들의 답변을 들을 수 있는 것은 물론
          <br />&nbsp;* 인증된 노무사 회원의 간단 명료한 답변도 빠르게!
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
        <Link to="/Notation" style={{textDecoration:"none"}}>
          <div style={BtnStyle} >
            <div style={itemStyle}>목록보기</div>
          </div>
        </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default NotationExample;
