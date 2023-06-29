import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, passLikes, passDonated}) {
  return (
    <div id="toy-collection">{
      toys.map(toy=>{
        return <ToyCard key={toy.name} toys={toy} onLikes={passLikes} onDonated={passDonated}/>
      })
    }</div>
  );
}

export default ToyContainer;
