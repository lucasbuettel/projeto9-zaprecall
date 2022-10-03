import styled from "styled-components"
import { GlobalStyle } from "./GlobalStyle"
import Header from "./Header"
import Content from "./Content"
import  Footer from "./Footer"
import React from "react"

export default function App(){
    const [contador, SetContador] = React.useState(0);
    const [n, SetN] = React.useState(0);
    return (<>
        <ScreenContainer>
        <GlobalStyle></GlobalStyle>
            <Header/>
            <Content SetContador = {SetContador} contador = {contador} SetN = {SetN}/>
            <Footer contador = {contador} n={n}/>
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



