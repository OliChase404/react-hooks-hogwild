import React, { useState } from "react";
import Nav from "./Nav";
import PigList from "./PigList";
import hogs from "../porkers_data";
import AddPigForm from "./AddPigForm";
import FilterPigs from "./FilterPigs";

function App() {
	const [currentPigs, setCurrentPigs] = useState(hogs)
	return (
		<div className="App">
			<Nav />
			<AddPigForm setCurrentPigs={setCurrentPigs} />
			<FilterPigs hogs={hogs} setCurrentPigs={setCurrentPigs}/>
			<PigList currentPigs={currentPigs} setCurrentPigs={setCurrentPigs} />
		</div>
	);
}

export default App;
