import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import '../css/Main.css';
import main1 from '../../../images/main/main1.png';
import main2 from '../../../images/main/main2.png';
import main3 from '../../../images/main/main3.png';
import main4 from '../../../images/main/main4.png';
import main5 from '../../../images/main/main5.png';
import right from '../../../images/main/right.svg';
import left from '../../../images/main/left.svg';
import blackright from '../../../images/main/black_right.svg';
import menu1 from '../../../images/main/menu1.png';
import menu2 from '../../../images/main/menu2.png';
import menu3 from '../../../images/main/menu3.png';


const Main = () => {

  

  const ContainerStyle={
    width:"1180px",
    display:"flex",
    flexDirection:"row",
    height: "31.25rem"
  }
  const LeftStyle={
    width:"60rem"
  }
  const RightStyle={
    width:"60rem"
  }
  const CardNumber={
    background: "var(--main-color-Sub-color, #1BBFC1)",
    width: "3.125rem",
    height: "3.125rem",
    color: "var(--system-color-system-black-50, #F1F1F5)",
    fontFamily: "Pretendard",
    fontSize: "1.875rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2.125rem",
    letterSpacing: "-0.04688rem",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"1.5rem"
  }

  const CardTitle={
    color: "var(--system-color-system-black-900, #111)",
    fontFamily: "Pretendard",
    fontSize: "3rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "4.25rem", 
    letterSpacing: "-0.075rem",
    marginBottom:"1.5rem"
  }

  const CardSubTitle={
    color: "var(--system-color-system-black-900, #111)",
    fontFamily: "Pretendard",
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.625rem",
    letterSpacing: "-0.02813rem",
    marginBottom:"2.5rem"
  }

  const TitleStyle = {
    color: "var(--system-color-system-black-900, #111)",
    fontFamily: "Pretendard",
    fontSize: "3rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "4.25rem", 
    letterSpacing: "-0.075rem",
    marginBottom: "1.5rem",
    opacity: "0",
    transform: "translateY(20px)",
    animation: "fadeInUp 0.5s ease forwards",
  };
  
  const SubTitleStyle = {
    color: "var(--system-color-system-black-900, #111)",
    fontFamily: "Pretendard",
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.625rem",
    letterSpacing: "-0.02813rem",
    marginBottom: "2.5rem",
    opacity: "0",
    transform: "translateY(20px)",
    animation: "fadeInUp 0.5s ease forwards",
  };

  const ButtonStyle={
    width:"6.8125rem",
    height:"3rem",
    backgroundColor:"white",
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"5px",
    color:"black"
  }


  const img = [main1, main2, main3, main4, main5]
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  function prevImg() {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex(prevIndex => (prevIndex === 0 ? 4 : prevIndex - 1));
        setIsTransitioning(false);
      }, 300); 
    }
  }

  function nextImg() {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex(prevIndex => (prevIndex === 4 ? 0 : prevIndex + 1));
        setIsTransitioning(false);
      }, 300); 
    }
  }
  

  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="banner">
        <img
            src={img[index]}
            alt="Main Banner"
            className={isTransitioning ? "banner-img transitioning" : "banner-img"}
          />
          <button className="banner-button left" onClick={nextImg}><img src={left}/></button>
          <button className="banner-button right" onClick={prevImg}><img src={right}/></button>
        </div>
        <div className="section-title">
          <div>이렇게</div>
          <div>이용해보세요</div>
        </div>

        <div style={ContainerStyle}>
          <div style={{...LeftStyle, paddingTop:"6.69rem"}}>
            <div style={CardNumber}>1</div>
            <div style={CardTitle} className='title'>내 계약서 검토</div>
            <p style={CardSubTitle} className='subtitle'>지피지기 백전백승!<br/>근로 계약서에 유의깊게 봐야할 항목을 확인해봐요</p>
            <Link to="/ContractReview" className="link">
              <div style={ButtonStyle}>바로가기<img src={blackright}/></div>
            </Link>
          </div>
          <div style={RightStyle}><img src={menu1}/></div>
        </div>

        <div style={ContainerStyle}>
          <div style={{LeftStyle}}>
          <img src={menu2}/>
          </div>
          <div style={{...RightStyle,paddingTop:"6.69rem",paddingLeft:"5.62rem"}}>
          <div style={CardNumber}>2</div>
            <div style={CardTitle} className='title'>내 근로 정리</div>
            <p style={CardSubTitle} className='subtitle'>나의 근로 현황을 한 눈에!<br/>혹시 놓치고 있는 급여가 얼마를 받을 수 있는 지 확인해 봐요</p>
            <Link to="/MyWork" className="link">
              <div style={ButtonStyle}>바로가기<img src={blackright}/></div>
            </Link></div>
        </div>

        <div style={{...ContainerStyle, marginBottom:"7.5rem"}}>
          <div style={{...LeftStyle, paddingTop:"6.69rem"}}>
            <div style={CardNumber}>3</div>
            <div style={CardTitle} className='title'>네편 현답</div>
            <p style={CardSubTitle} className='subtitle'>도와줘요 네편!<br/>결과지를 토대로 나의 상황을 간단히 보여주고 궁금점에 대한 답을 알아가요!</p>
            <Link to="/YoursideAnswer" className="link">
              <div style={ButtonStyle}>바로가기<img src={blackright}/></div>
            </Link>
          </div>
          <div style={RightStyle}><img src={menu3}/></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
