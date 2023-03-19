import React from "react";


let searchQuery = ''
let greasiness = 'all'
let sortByWeight = ''
let medal = 'all'
let filteredPigs = []


function FilterPigs({setCurrentPigs, hogs}){
    
    function handleChange(event){
        const {id, value} = event.target
        
        filteredPigs = [...hogs].sort((a, b) => (a.name > b.name) ? 1 : -1)
        
        if (id === '1'){
            searchQuery = value
        }
        if (searchQuery !== ''){
            filteredPigs = filteredPigs.filter((pig) => pig.name.toLowerCase().includes(searchQuery.toLowerCase()))
        }

        if (id === '2'){
            greasiness = value
        }
        if (greasiness === 'true'){
            filteredPigs = filteredPigs.filter(pig => pig.greased === true)
        } 
        if (greasiness === 'false'){
            filteredPigs = filteredPigs.filter(pig => pig.greased === false)
        }

        if(id === '3'){
            sortByWeight = value
        }
        if (sortByWeight === 'heavy'){
            filteredPigs = filteredPigs.sort((pig1, pig2) => pig2.weight - pig1.weight)
        }
        if (sortByWeight === 'light'){
            filteredPigs = filteredPigs.sort((pig1, pig2) => pig1.weight - pig2.weight)
        }

        if (id === '4'){
            medal = value
        }
        if (medal !== 'all'){
            filteredPigs = filteredPigs.filter((pig) => pig["highest medal achieved"] === medal)
        }
        
        setCurrentPigs(filteredPigs)       
    }
                    
    return (
    <div className='pigFilter'>
        <input id="1" onChange={(event) => handleChange(event)} type="text" placeholder="Search..."/>
        <select id="2" onChange={(event) => handleChange(event)}>
            <option value="all">All Grease Levels</option>
            <option value='true'>Greased Pigs</option>
            <option value='false'>Non-Greased Pigs</option>
        </select>
        <select id="3" onChange={(event) => handleChange(event)}>
            <option value="all">All Weights</option>
            <option value="heavy">Heavy First</option>
            <option value="light">Light First</option>
        </select>
        <select id="4" onChange={(event) => handleChange(event)}>
            <option value="all">All Medals</option>
            <option value="wood">wood</option>
            <option value="bronze">bronze</option>
            <option value="silver">silver</option>
            <option value="gold">gold</option>
            <option value="platinum">platinum</option>
            <option value="diamond">diamond</option>
        </select>
    </div>
    )
}

export default FilterPigs



