import questions from "./Object"
import React from "react";
import FlashCard from "./FlashCard";


export default function Questions({contador, SetContador, SetN}) {
        SetN(questions.length);
    return (
        <>
        
            {questions.map((o,index) => <FlashCard
             key={index} index = {index+1} question={o} SetContador = {SetContador} contador = {contador}> 
            </FlashCard>)}
        </>
    )
    
}


