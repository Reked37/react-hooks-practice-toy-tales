import React, {useState} from "react";

function ToyForm({onAddToy}) {
  const[formData, setForm]=useState({
    name:"",
    image:"",
  })

  function handleSubmit(event){
    event.preventDefault()
    fetch('http://localhost:3001/toys',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        "name": formData.name,
        "image": formData.image,
        "likes":0
      })
    })
    .then(res=>res.json())
    .then(data=>onAddToy(data))
    setForm({
      name:"",
      image:""
    })
  }

  function handleChange(event){
    const name=event.target.name
    let value= event.target.value
    setForm({...formData, [name]:value})
  }
  console.log(formData)

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
        />
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
