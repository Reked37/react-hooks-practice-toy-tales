import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const[toys, setToys]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/toys')
    .then(res=>res.json())
    .then(data=>setToys(data))
  },[])
  
  function addToy(newToy){
    setToys([...toys,newToy])
  }

  function updateLikes(updateLike){
    console.log(updateLike)
    const newLike=toys.map(toy=>{
      if(toy.id ===updateLike.id){return updateLike}
      return toy
    })
    setToys(newLike)
  }

  function donatedToy(deleteToy){
    console.log(deleteToy)
    const donatedToy=toys.filter(toy=>toy.id !==deleteToy)
    return setToys(donatedToy)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} passLikes={updateLikes} passDonated={donatedToy}/>
    </>
  );
}

export default App;
