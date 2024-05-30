import React from 'react';
import { Link } from 'react-router-dom';
import instagram from '../img/instagram.svg';
import kakaotalk from '../img/kakaotalk.svg';

const Footer = () => {

  const FooterConStyle={
    width:"100%",
    margin:"0 auto",
    backgroundColor:"white",
    display:"flex",
    justifyContent:"center"
  }

  const FooterTopStyle={
    display: "flex",
    height:"4.75rem",
    alignItems:"center",
    gap:"25rem",
  }

  const FooterTopLeftStyle={
    gap:"1.5rem",
    display:"flex",
    flexDirection:"row"
  }

  const FooterTopRightStyle={
    display:"flex",
    gap:"1.5rem"
  }

  const LineStyle={
    border:"1px solid #D9D9D9",
    height:"1px"
  }
  const BottomFooterConStyle={
    width:"100%",
    backgroundColor:"white",
    display:"flex",
    justifyContent:"center",
    flexDirection:"row",
    gap:"38.25rem",
    paddingTop:"3.19rem",
    paddingBottom:"3.19rem"
  }

  const TitleStyle={
    color:"var(--system-color-system-black-900, #111)",
    fontFamily: "Pretendard",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2.125rem",
    letterSpacing: "-0.0375rem",
    marginBottom:"0.75rem"

  }

  const PStyle={
    color: "var(--system-color-system-black-700, #505050)",
    fontFamily: "Pretendard",
    fontSize: "0.8125rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.125rem",
    letterSpacing: "0.02031rem",
    marginBottom:"0.5rem"
  }

  const InfoStyle={
    display:"flex",
    alignItems:"flex-end",
    justifyContent:"center",
    flexDirection:"column"

  }

  return (
    <>
    <div style={FooterConStyle}>
    <footer>
      <div style={FooterTopStyle}>
        <div style={FooterTopLeftStyle}>
        <div>회사소개</div>
        <div style={{color:"#E5E5EC"}}>|</div>
        <div>개인정보처리방침</div>
        <div style={{color:"#E5E5EC"}}>|</div>
        <div>영상정보처리기기운영 관리방침</div>
        <div style={{color:"#E5E5EC"}}>|</div>
        <div>이용약관</div>
        <div style={{color:"#E5E5EC"}}>|</div>
        <div>청소년보호방침</div>
        </div>

        <div style={FooterTopRightStyle}>
        <Link to="http://www.instagram.com"><img src={instagram} alt="" className="icon" /></Link>
        <Link to="https://www.kakaotalk.com"><img src={kakaotalk} alt="" className="icon" /></Link>
        </div>
      </div>
      </footer>
      </div>

      <div style={LineStyle}/>
      
      <div style={BottomFooterConStyle}>
      <div style={{...BottomFooterConStyle,width:"80vw"}}>
        <div>
          <div style={TitleStyle}>네편</div>
          <p style={PStyle}>대표이사: OOO</p>
          <p style={PStyle}>서울특별시 OOO 구 OOO 로 123 (OOO동)</p>
          <p style={PStyle}>사업자등록번호: 123-45-67890 | 통신판매인신고: 9999-12345호</p>
          <p style={PStyle}>개인정보보호책임자: OOO</p>
          <p style={PStyle}>이메일: test@naver.com</p>
          <p style={PStyle}>Copyright © OOO DESIGNER ALL RIGHTS RESERVED.</p>
        </div>

        <div style={InfoStyle}>
          <p style={TitleStyle}>1234-5678</p>
          <p style={PStyle}>오전 9시 - 오후 6시(토요일, 공휴일 휴무)</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
