import React from "react";
import PigCard from "./PigCard";

function PigList({currentPigs, setCurrentPigs}){


    
    function displayPigs(){
        return currentPigs.map((pig) => (
                <PigCard className="ui eight wide column" key={pig.name} pig={pig} />
            ))
        }
        


    return(
        <div className="ui grid container">
            {displayPigs()}
        </div>
    )
}

export default PigList