import React, { useState } from 'react';
import './ContractComparison.css';
import one from '../../../images/first.png';
import two from '../../../images/second.png';
import three from '../../../images/third.png'; 
import four from '../../../images/fourth.png'; 
import five from '../../../images/fifth.png';  
import six from '../../../images/sixth.png'; 
import seven from '../../../images/seventh.png'; 
import eight from '../../../images/eight.png'; 
import nine from '../../../images/nine.png'; 
import ten from '../../../images/ten.png'; 
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';

const ContractComparison = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  
  const handleItemClick = (itemIndex) => {
    setSelectedItem(itemIndex);
  };

  const index = ["one","two","three","four","five","six","seven","eight","nine","ten"];

  const title = [
    "근로계약기간",
    "근무장소",
    "업무의 내용",
    "소정근로시간",
    "근무일 및 휴일",
    "임 금",
    "연차유급휴가",
    "사회보험 적응여부",
    "근로계약서 교부",
    "전체"
  ];


  const getImagePath = () => {
    if(selectedItem !== null && index[selectedItem]) {
      const selectedImage = index[selectedItem];
      switch(selectedImage) {
        case 'one':
          return one;
        case 'two':
          return two;
        case 'three':
          return three;
        case 'four':
          return four;
        case 'five':
          return five;
        case 'six':
          return six;
        case 'seven':
          return seven;
        case 'eight':
          return eight;
        case 'nine':
          return nine;
        case 'ten':
          return ten;
        default:
          return one;
      }
    } else {
      return one;
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <header className="headerCon">
          <h1><span>나의 근로계약서</span>를 가지고 </h1>
          <h1>화면에 <span>표준 근로계약서와</span> 비교해보세요</h1>
        </header>
        <main className="main">
          <nav className="navCon">
            <h3>항목</h3>
            <ul>
              {index.map((item, itemIndex) => (
                <li key={item} style={{ color: selectedItem === itemIndex ? '#204598' : 'black' }} onClick={() => handleItemClick(itemIndex)}>
                  {`${itemIndex + 1}. ${title[itemIndex]}`}
                </li>
              ))}
            </ul>
          </nav>
          <section className="contract">
            <img src={getImagePath()} alt="표준 근로계약서" className="contract-image" />
          </section>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default ContractComparison;
