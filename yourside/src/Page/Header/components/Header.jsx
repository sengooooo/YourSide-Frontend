import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../img/logo.svg';
import login from '../img/login.svg';


const Header = () => {

  const location = useLocation();

  const HeaderContainer={
    width:"100%",
    display:"flex",
    justifyContent:"center",
    borderBottom: "2px solid var(--system-color-system-black-100, #E1E1E1)"
  }

  const HeaderStyle = {
    display: "flex",
    width: "80vw",
    height: "6.25rem",
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

  const HomeBtnStyle = {
    width : "5rem",
    height:"6.25rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color: location.pathname === "/" ? "#204598" : "black",
    borderBottom: location.pathname === "/" ? "3px solid #204598" : "3px solid transparent"
  }

  const NotificationBtnStyle={
    width:"6.875rem",
    height:"6.25rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color: location.pathname === "/Notation" ? "#204598" : "black", 
    borderBottom: location.pathname === "/Notation" ? "3px solid #204598" : "3px solid transparent"
  }

  const MyConBtnStyle={
    width:"9.375rem",
    height:"6.25rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color: location.pathname === "/ContractReview" ? "#204598" : "black",
    borderBottom: location.pathname === "/ContractReview" ? "3px solid #204598" : "3px solid transparent"
  }

  const MyWorkBtnStyle={
    width:"8.125rem",
    height:"6.25rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color: location.pathname === "/MyWork" ? "#204598" : "black",
    borderBottom: location.pathname === "/MyWork" ? "3px solid #204598" : "3px solid transparent"
  }

  const AnsBtnStyle={
    width:"8.125rem",
    height:"6.25rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color: location.pathname === "/QuestionAndAnswer" ? "#204598" : "black",
    borderBottom: location.pathname === "/QuestionAndAnswer" ? "3px solid #204598" : "3px solid transparent"
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
            <div className="button" style={HomeBtnStyle}>홈</div>
          </Link>
          <Link to="/Notation" className="link">
            <div className="button" style={NotificationBtnStyle}>공지사항</div>
          </Link>
          <Link to="/ContractReview" className="link">
            <div className="button" style={MyConBtnStyle} >내 계약서 검토</div>
          </Link>
          <Link to="/MyWork" className="link">
            <div className="button" style={MyWorkBtnStyle}>내 근로 정리</div>
          </Link>
          <Link to="/QuestionAndAnswer" className="link">
            <div className="button" style={AnsBtnStyle}>네편 현답</div>
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
