import questions from "./Object"
import React from "react";
import FlashCard from "./FlashCard";


export default function Questions() {
        
    return (
        <>
        
            {questions.map((o,index) => <FlashCard
             key={index} index = {index+1} question={o}> 
            </FlashCard>)}
        </>
    )
    
}


