import React, {useState} from "react";

function ToyCard({toys, onLikes, onDonated}) {
  const{id, name, image, likes}=toys
  

  function addLike(){
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "PATCH",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        "likes": likes+1
      })
    })
    .then(res=>res.json())
    .then(data=>onLikes(data))
  }

  function donateToy(){
    fetch(`http://localhost:3001/toys/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(()=>onDonated(id))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={addLike} className="like-btn">Like {"<3"}</button>
      <button onClick={donateToy} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
