import React from 'react';
import { useState } from 'react';
import { signin } from '../../../apis/api/user'
import axios from "axios";
import '../css/login.css';
import SymbolLogo from '../img/symbol-logo.png';
import SymbolLogoText from '../img/symbol-logo-text.png';

const MyPage = () => {
  const [loginVal, setLoginVal] = useState({
    username: null,
    password: null,
  });

  const handleChangeId = (e) => {
    setLoginVal({ ...loginVal, username: e.target.value });
  };

  const handleChangePw = (e) => {
    setLoginVal({ ...loginVal, password: e.target.value });
  };
  const [alertMessage, setAlertMessage] = useState('');
  
  const handleSignIn = async () => {
    console.log(loginVal.username)
    try {
        const res = await signin({
            username: loginVal.username,
            password: loginVal.password,
        });
        console.log(res)
        if(axios.isAxiosError(res)){
          if(res.response.data.status === 404) setAlertMessage("아이디가 존재하지 않습니다.")
          else if(res.response.data.status === 400) setAlertMessage("비밀번호가 일치하지 않습니다.")
        }
        else{
          if(res.data.status === 200){
            localStorage.setItem("user_id", res.data.data.user_id)
            setAlertMessage()
          }
        }
    } catch (e) {
      // console.log(e);
    }
  };
  return (
    <div className="Login">
      <div className="container">
        <div className="symbol">
          <img src={SymbolLogo} alt="symbol-logo" />
          <p>더 이상, 혼자가 아닌 너를 위해</p>
          <img src={SymbolLogoText} alt="symbol-logo-text" />
        </div>

        <div className="id">
          <p>아이디</p>
          <input value={loginVal.username} onChange={handleChangeId} placeholder="아이디를 입력해 주세요" />
        </div>

        <div className="pw">
          <p>비밀번호</p>
          <input type="password" value={loginVal.password} onChange={handleChangePw} placeholder="비밀번호를 입력해 주세요" />
          {alertMessage && (
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '14px',
              fontSize: '13px',
              color: '#DC0000',
            }}
          >
            {alertMessage}
          </p>
        )}
        </div>

        <button id="login-button" onClick={handleSignIn}>로그인</button>
        <div className="sign-up">
          <p>아이디/비밀번호 찾기</p>
          <p style={{ color: 'black' }}>
            <strong>회원가입</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
