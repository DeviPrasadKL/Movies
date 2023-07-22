import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

export default function AddMovie() {
  //This is used to redirect the page to home after submit
  let h = useHistory();

  // These Values are used to set the values from user input
  const [movieName, setMovieName] = useState("");
  const [hero, setHero] = useState("");
  const [gener, setGener] = useState("");
  const [rating, setRating] = useState();
  const [poster, setPoster] = useState("");

  //Code to Create an object of "Movie" and push into the Array in database
  let handleAddMovie = (e) => {
    //This is to prevent the reload of page when clicked on submit button
    e.preventDefault();
    let newMovie = { movieName, hero, gener, rating, poster }

    //Code used to add Object to the database
    fetch("https://moviesapi-cm0p.onrender.com/add-movie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie)
    })
      .then(() => {
        alert("new movie succesfully added")
        h.push("/Movies");
        
        // window.location.reload()   //If u want to Reload the page then
      })
  }


  return (
    <div className="add-movie">
      <h1>Add newMovie</h1>
      <hr />

      <form onSubmit={handleAddMovie}>
        <label>Movie Name: </label> <input type="text" value={movieName} onChange={(e) => { setMovieName(e.target.value) }} />
        <label>Hero Name: </label> <input type="text" value={hero} onChange={(e) => { setHero(e.target.value) }} />
        <label>Gener: </label> <input type="text" value={gener} onChange={(e) => { setGener(e.target.value) }} />
        <label>Rating: </label> <input type="number" min="0.1" max="5" step="0.1" value={rating} onChange={(e) => { setRating(e.target.value) }} />
        <label>Poster Url: </label> <input type="url" value={poster} onChange={(e) => { setPoster(e.target.value) }} />
        <input type="submit" value="Add Movie" id="submitbtn"/>
      </form>
    </div>
  );
}
