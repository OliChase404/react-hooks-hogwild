import React, { useState } from "react";

function PigCard({pig, hidePig}){

    const [pigHidden, setPigHidden] = useState(false)
    const [showDetails, setShowDetails] = useState(true)

    function showPigDetails(){
        setShowDetails(!showDetails)
    }

    function hidePig(){
        setPigHidden(!pigHidden)
        console.log(pigHidden)
    }


    return(
        <div>
            <div className={pigHidden ? 'hidden' : ''}>
                <h1>{pig.name}</h1>
                <img src={pig.image}></img>
                <div className={showDetails ? '' : 'hidden'}>
                    <h3>Specialty: {pig.specialty}</h3>
                    <p>Weight: {pig.weight}lbs</p>
                    <p>{pig.greased ? `${pig.name} is a very greasy pig` : `${pig.name} is not a greasy pig`}</p>
                    <p>Highest Medal Achieved:</p>
                    <p>{pig["highest medal achieved"]}</p>
                </div>
                <button onClick={showPigDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
            </div>
                <button onClick={hidePig}>{pigHidden ? `Show ${pig.name}` : `Hide ${pig.name}`}</button>
        </div>
    )
}




export default PigCard