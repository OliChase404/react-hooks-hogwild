import React, { useState } from "react";

function AddPigForm({setCurrentPigs}){

    const [newPig, setNewPig] = useState(  {
        name: "",
        specialty: "",
        greased: true,
        weight: 0,
        "highest medal achieved": "",
        image: "",
      })

      function handleChange(event){
        setNewPig({...newPig, [event.target.name]: event.target.value})
      }


      console.log(newPig)

      function handleSubmit(event){
        event.preventDefault()
        setCurrentPigs((prevPigs) => {
            return [...prevPigs, newPig]
        })
      }

    return (
        <div>
            <form onChange={(event) => handleChange(event)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                
                <label htmlFor="specialty">Specialty:</label>
                <input type="text" id="specialty" name="specialty" required/>

                <label htmlFor="greased">Greased:</label>
                <select name="greased">
                    <option name="greased" value={true}>Yes</option>
                    <option name="greased" value={false}>No</option>
                </select>
                
                <label htmlFor="weight">Weight:</label>
                <input type="number" id="weight" name="weight" step="0.1" required/>
                
                <label htmlFor="medal">Highest Medal Achieved:</label>
                <select name="highest medal achieved">
                <option value="all">All Medals</option>
                <option value="wood">wood</option>
                <option value="bronze">bronze</option>
                <option value="silver">silver</option>
                <option value="gold">gold</option>
                <option value="platinum">platinum</option>
                <option value="diamond">diamond</option>
                </select>

                <label htmlFor="image">Image URL:</label>
                <input type="text" id="image" name="image" required/>
                
                <button onClick={(event) => handleSubmit(event)} type="submit">Add Hog</button>
            </form>
        </div>
    )
}

export default AddPigForm

        // <select id="3" onChange={(event) => handleChange(event)}>
        //     <option value="all">All Weights</option>
        //     <option value="heavy">Heavy First</option>
        //     <option value="light">Light First</option>
        // </select>
        // <select id="4" onChange={(event) => handleChange(event)}>
        //     <option value="all">All Medals</option>
        //     <option value="wood">wood</option>
        //     <option value="bronze">bronze</option>
        //     <option value="silver">silver</option>
        //     <option value="gold">gold</option>
        //     <option value="platinum">platinum</option>
        //     <option value="diamond">diamond</option>
        // </select>