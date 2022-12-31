import React from 'react';
import { useState } from "react";
import { useHistory, useParams } from 'react-router-dom';

export default function UpdateMovie() {

    let { id } = useParams()
    let h = useHistory();

    const [movieName, setMovieName] = useState("");
    const [hero, setHero] = useState("");
    const [gener, setGener] = useState("");
    const [rating, setRating] = useState();
    const [poster, setPoster] = useState("");

    let handleUpdateMovie = (e) => {
        e.preventDefault();
        let updateMovie = { movieName, hero, gener, rating, poster }

        fetch("http://localhost:4000/movies/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateMovie)
        })
            .then(() => {
                alert("Updated movie succesfully")
                h.push("/")

            })
    }

    return (
        <div className="update-movie">
            <h1>Update Movie</h1>
            <hr />

            <form onSubmit={handleUpdateMovie}>
                <label>Movie Name: </label> <input type="text" value={movieName} onChange={(e) => { setMovieName(e.target.value) }} />
                <label>Hero Name: </label> <input type="text" value={hero} onChange={(e) => { setHero(e.target.value) }} />
                <label>Gener: </label> <input type="text" value={gener} onChange={(e) => { setGener(e.target.value) }} />
                <label>Rating: </label> <input type="number" min="0.1" max="5" step="0.1" value={rating} onChange={(e) => { setRating(e.target.value) }} />
                <label>Poster Url: </label> <input type="url" value={poster} onChange={(e) => { setPoster(e.target.value) }} />
                <input type="submit" value="Update Movie" id="submitbtnupdate" />
            </form>
        </div>
    );
}
