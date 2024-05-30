import React from 'react';
import '../css/notation.css';
import Header from '../../Header/components/Header.jsx';
import Footer from '../../Footer/components/Footer.jsx';
import double from '../../../images/double.svg';
import single from '../../../images/single.svg';
import { Link } from 'react-router-dom';

const Notation = () => {

  const ViewStyle={
    display:"flex",
    justifyContent:"center"
  }

  const TitleStyle={
    marginTop:"5.62rem"
  }

  const ContainerStyle={
    width:"61.25rem"
    
  }

  const ContentStyle={
    backgroundColor:"white"
  }

  const LineContainer={
    display:"flex",
    height:"4rem",
    alignItems:"center",
    paddingLeft:"1rem",
    borderBottom:"1px solid var(--system-color-system-black-50, #F1F1F5)"
  }

  const WarnStyle={
    color: "var(--main-color-Primary-color, #204598)",
    fontFamily: "Pretendard",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "1.25rem",
    marginRight:"2.5rem",
    width:"2.375rem"
  }

  const ContentTitleStyle={
    width:"46.25rem",
    color: "var(--system-color-system-black-900, #111)",
fontFamily: "Pretendard",
fontSize: "0.875rem",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "1.25rem",
letterSpacing: "-0.02188rem",
marginRight:"2rem",
cursor:"Pointer",
textDecoration:"none"
  }

  const DateStyle={
    color: "var(--system-color-system-black-500, #767676)",
textAlign: "center",
fontFamily: "Pretendard",
fontSize: "0.875rem",
fontWeight: "400",
lineHeight: "1.25rem",
letterSpacing: "-0.02188rem"
  }


  const NumStyle={
    marginTop:"4.87rem",
    marginBottom:"4.87rem",
    display:"flex",
    color: "var(--system-color-system-black-500, #767676)",
    justifyContent:"center",
    gap:"1.81rem",
    fontSize: "0.8125rem",
    cursor:"pointer"
  }

  return (
    <div>
      <Header/>
      <div style={ViewStyle}>
      <div style={ContainerStyle}>
      <h1 style={TitleStyle}>공지사항</h1>
      <div style={{...ContentStyle, borderTop:"1px solid black"}}>
        <div style={LineContainer}>
          <p style={WarnStyle}>주요</p>
          <Link to="/Notation1" style={{textDecoration:"none"}}><p style={ContentTitleStyle}>네 편 설명서</p></Link>
          <p style={DateStyle}>2024.05.03</p>
        </div>
      </div>

      <div style={ContentStyle}>
        <div style={LineContainer}>
          <p style={WarnStyle}>주요</p>
          <p style={ContentTitleStyle}>열심히 일하는 당신을 위한 ‘네편’이 되겠습니다.</p>
          <p style={DateStyle}>2024.05.01</p>
        </div>
      </div>

      <div style={ContentStyle}>
        <div style={LineContainer}>
          <p style={{...WarnStyle, color:"black",fontWeight: "400"}}>01</p>
          <p style={ContentTitleStyle}>공지사항 1</p>
          <p style={DateStyle}>2023.12.25</p>
        </div>
      </div>

      <div style={ContentStyle}>
        <div style={LineContainer}>
          <p style={{...WarnStyle, color:"black",fontWeight: "400"}}>02</p>
          <p style={ContentTitleStyle}>공지사항 2</p>
          <p style={DateStyle}>2023.12.25</p>
        </div>
      </div>

      <div style={ContentStyle}>
        <div style={LineContainer}>
          <p style={{...WarnStyle, color:"black",fontWeight: "400"}}>03</p>
          <p style={ContentTitleStyle}>공지사항 3</p>
          <p style={DateStyle}>2023.12.25</p>
        </div>
      </div>

      <div style={ContentStyle}>
        <div style={LineContainer}>
          <p style={{...WarnStyle, color:"black",fontWeight: "400"}}>04</p>
          <p style={ContentTitleStyle}>공지사항 4</p>
          <p style={DateStyle}>2023.12.25</p>
        </div>
      </div>

      <div style={ContentStyle}>
        <div style={LineContainer}>
          <p style={{...WarnStyle, color:"black",fontWeight: "400"}}>05</p>
          <p style={ContentTitleStyle}>공지사항 5</p>
          <p style={DateStyle}>2023.12.25</p>
        </div>
      </div>


      <div style={NumStyle}>
        <p style={{color:"#204598"}}>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <img src={single}/>
        <img src={double}/>
      </div>

      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Notation;
