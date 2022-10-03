import React from "react";
import styled from "styled-components"
import play from "./assets/img/seta_play.png"
import turn from "./assets/img/seta_virar.png"


export default function FlashCard({question, index}){
    
    const [quest, SetQuest] = React.useState(false);
    const[pergunta, SetPergunta] = React.useState(`Pergunta`);
    const[i, Seti] = React.useState(`${index}`);
    const [picture, setPicture] = React.useState(play)

   function anwser(){
    
    SetQuest(true);
    Seti("");
    SetPergunta(question.Q);
    if(picture === play){setPicture(turn);}
    if(picture === turn){
        SetPergunta(question.R);
        setPicture("");
    }
   }
    
    return(
        <>
        <QuestionClose quest = {quest}>
            <p>{`${pergunta} ${i}`}</p> 
            <img onClick={anwser} src={picture}/>
            
        </QuestionClose> 
        </>
    )

}

const QuestionClose = styled.div`
    width:  300px;
    ${(prop) => prop.quest ? `min-height: 100px;` : `height: 35px`};
    ${(prop) => prop.quest ? `background: #FFFFD5;` : `background-color: #FFFFFF;`};
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(prop) => prop.quest ? `font-family: 'Recursive', sans-serif;` : ``};
    ${(prop) => prop.quest ? `font-style: normal;` : ``};
    ${(prop) => prop.quest ? `font-weight: 400;` : ``};
    ${(prop) => prop.quest ? `font-size: 18px;` : ``};
    ${(prop) => prop.quest ? `line-height: 22px` : ``};
    ${(prop) => prop.quest ? `position: relative;` : ``};
    ${(prop) => prop.quest ? `flex-direction: column;` : ``};
p{
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    ${(prop) => prop.quest ? `margin-right: 200px;` : ``};
}

img{
    cursor: pointer;
    ${(prop) => prop.quest ? `position: absolute;` : ``};
    ${(prop) => prop.quest ? `bottom: 10px;` : ``};
    ${(prop) => prop.quest ? `right: 10px;` : ``};
}
`