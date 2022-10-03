import React from "react";
import styled from "styled-components"
import play from "./assets/img/seta_play.png"
import turn from "./assets/img/seta_virar.png"
import icone_certo from "./assets/img/icone_certo.png"
import icone_erro from "./assets/img/icone_erro.png"
import icone_quase from "./assets/img/icone_quase.png"


export default function FlashCard({question, index, contador, SetContador}){
    
    const [quest, SetQuest] = React.useState(false);
    const[pergunta, SetPergunta] = React.useState(`Pergunta`);
    const[i, Seti] = React.useState(`${index}`);
    const [picture, SetPicture] = React.useState(play)
    const [buttons, SetButtons] = React.useState("")
    const [color, SetColor]= React.useState("");
    const [through, Setthrough] = React.useState("");


    function naoLembrei(){
        SetPergunta('Pergunta');
        Seti(index);
        SetButtons("");
        SetQuest(false);
        SetColor("#FF3030");
        Setthrough("through");
        SetPicture(icone_erro);
        SetContador(contador+1);
    }

    function quase(){
        SetPergunta('Pergunta');
        Seti(index);
        SetButtons("");
        SetQuest(false);
        SetColor("#FF922E");
        Setthrough("through");
        SetPicture(icone_quase);
        SetContador(contador+1);
    }

    function zap(){
        SetPergunta('Pergunta');
        Seti(index);
        SetButtons("");
        SetQuest(false);
        SetColor("#2FBE34");
        Setthrough("through")
        SetPicture(icone_certo);
        SetContador(contador+1);
    }
   function anwser(){
    
    SetQuest(true);
    Seti("");
    SetPergunta(question.Q);  
    
    if(picture === play){SetPicture(turn);}
    if(picture === turn){
        SetPergunta(question.R);
        SetPicture("");
    SetButtons(<ButtonContainer data-identifier="flashcard-index-item" >
                <Button1 data-identifier="forgot-btn" onClick={naoLembrei}>Não lembrei</Button1>
                <Button2 data-identifier="almost-forgot-btn" onClick={quase}>Quase não lembrei</Button2>
                <Button3 data-identifier="zap-btn" onClick={zap}>Zap!</Button3>
    </ButtonContainer>)
    }
   }
    
    return(
        <>
        <QuestionClose data-identifier="flashcard" quest = {quest} color={color} through={through}>
            <p data-identifier="flashcard-question flashcard-answer" >{`${pergunta} ${i}`}</p> 
            <img onClick={anwser} data-identifier="flashcard-show-btn flashcard-turn-btn flashcard-status" src={picture}/>
            {buttons}
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
    width:250px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    ${(prop) => prop.color !== "" ? `color: ${prop.color}` : `color:#333333`};
    ${(prop) => prop.quest ? `margin-right: 50px;` : ``};
    ${(prop) => prop.through !== "" ? `text-decoration:line-through` : ``};
    ${(prop) => prop.through !== "" ? `text-decoration-color: ${prop.color}` : ``};
    
    
}

img{
    cursor: pointer;
    ${(prop) => prop.quest ? `position: absolute;` : ``};
    ${(prop) => prop.quest ? `bottom: 10px;` : ``};
    ${(prop) => prop.quest ? `right: 10px;` : ``};
}
`

const ButtonContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
    
`
const Button1 = styled.button`
    width: 90px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: #FF3030;
    border-radius: 5px;
    border: 1px solid #FF3030;
    padding:5px;
    cursor: pointer;
    margin-right:10px;
`
const Button2 = styled.button`
    width: 90px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: #FF922E;
    border-radius: 5px;
    border: 1px solid #FF922E;
    padding:5px;
    cursor: pointer;
    margin-right:10px;
`
const Button3 = styled.button`
    width: 90px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: #2FBE34;
    border-radius: 5px;
    border: 1px solid #2FBE34;
    padding:5px;
    cursor: pointer;
    
`