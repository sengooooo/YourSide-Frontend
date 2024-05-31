import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { defaultInstance } from '../../\bapis/utils/instance';
import QuestionAndAnswer from "./components/QuestionAndAnswer"
import styled from "styled-components"
import Header from "../Header/components/Header";
import Footer from "../Footer/components/Footer";


export default function YourSideAnswer() {
  const [answwerPopular, setAnswerPopular] = useState([]);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {

  //   const getPostData = async () => {
  //     try{
  //       const [responsePopular, responsePost] = await Promise.all([
  //         defaultInstance.get(`api/posting/list/popular/0`),
  //         defaultInstance.get(`api/posting/list/0`)
  //       ]);
  //       console.log(responsePopular);
  //       console.log(responsePost);
  //       setAnswerPopular(responsePopular.data.data);
  //       setPosts(responsePost.data.data);
  //     } catch (error) {
  //       console.error("데이터 받아들이지 못함", error);
  //     }
  //   }

  //   getPostData();

  // },[])

  
  return (
    <>
      <Header />
      <QuestionAndAnswer popularContent={answwerPopular} post={posts}/>
      <Footer />
    </>
  )
}