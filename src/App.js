import styled from "styled-components"
import { GlobalStyle } from "./GlobalStyle"
import Header from "./Header"
import Content from "./Content"
import  Footer from "./Footer"

export default function App(){

    return (<>
        <GlobalStyle></GlobalStyle>
        <ScreenContainer>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </ScreenContainer>
    </>)
}
const ScreenContainer= styled.div` background-color: #FB6B6B;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
padding-bottom: 200px;`



