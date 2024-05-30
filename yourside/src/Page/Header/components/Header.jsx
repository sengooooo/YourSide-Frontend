import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import login from '../img/login.svg';

const Header = () => {

  const HeaderContainer={
    width:"100%",
    backgroundColor:"white",
    display:"flex",
    justifyContent:"center"
  }

  const HeaderStyle = {
    display: "flex",
    width: "80vw",
    height: "6.26rem",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "center",
  }

  const MenuStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",  
  }

  const NavStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4.5rem",
    marginLeft : "11.38rem",
    marginRight:"11.38rem"
  }

  const BtnStyle = {
    display: "flex",
    alignItems: "center"
  }

  const LogoStyle = {
    width: "8.125rem",
    height: "2.5rem",
    display: "flex",
    alignItems: "center"
  }

  return (
    <div style={HeaderContainer}>
    <div className="header" style={HeaderStyle}>
      <div className="header-menu" style={MenuStyle}>
        <div className="logo" style={LogoStyle}>
          <Link to="/" className="logo">
            <img src={logo} alt="" className="logo" />
            <span />
          </Link>
        </div>

        <div className="nav" style={NavStyle}>
          <Link to="/" className="link">
            <div className="button" style={BtnStyle}>홈</div>
          </Link>
          <Link to="/Notation" className="link">
            <div className="button" style={BtnStyle}>공지사항</div>
          </Link>
          <Link to="/ContractReview" className="link">
            <div className="button" style={BtnStyle}>내 계약서 검토</div>
          </Link>
          <Link to="/MyWork" className="link">
            <div className="button" style={BtnStyle}>내 근로 정리</div>
          </Link>
          <Link to="/QuestionAndAnswer" className="link">
            <div className="button" style={BtnStyle}>네편 현답</div>
          </Link>
        </div>

        <div className="user-icons">
          <Link to="/Login" className="link">
            <img src={login} alt="" className="icon" />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
