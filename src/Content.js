import styled from "styled-components"
import Questions from "./Questions"

export default function Content({contador, SetContador, SetN}){
   return(
    <>
    <ContainerButtons>
        <Questions SetContador = {SetContador} contador = {contador} SetN = {SetN}/>
    </ContainerButtons>
    </>
   )
}

const ContainerButtons = styled.div`
button{ width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    
    border-radius: 5px;
   
    padding:5px;
    cursor: pointer;
}

`