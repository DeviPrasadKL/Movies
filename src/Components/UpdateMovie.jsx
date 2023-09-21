import React from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function UpdateMovie() {
    let { id } = useParams();
    let h = useHistory();


    let [movieName, setMovieName] = useState("");
    let [hero, setHero] = useState("");
    let [gener, setGener] = useState("");
    let [rating, setRating] = useState("");
    let [poster, setPoster] = useState("");

    useEffect(() => {
        fetch("https://moviesapi-cm0p.onrender.com/movie/" + id)
            .then((res) => {
                if (res.ok === false) {
                    throw Error("Searching data not found in this API")
                }
                return res.json()
            })
            .then((data) => {
                setMovieName(data.movieName);
                setHero(data.hero);
                setGener(data.gener);
                setRating(data.rating);
                setPoster(data.poster);
            })
    }, [id]);



    let handleUpdateMovie = (e) => {
        e.preventDefault();
        let updateMovie = { movieName, hero, gener, rating, poster };

        fetch("https://moviesapi-cm0p.onrender.com/movie/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateMovie),
        }).then(() => {
            alert("Updated movie succesfully");
            h.push("/Movies");
        });
    };

    return (
        <div className="update-movie">
            <h1>Update Movie</h1>
            <hr />

            <form onSubmit={handleUpdateMovie}>
                <label>Movie Name: </label>
                <input
                    type="text"
                    value={movieName}
                    onChange={(e) => {
                        setMovieName(e.target.value);
                    }}
                />
                <label>Hero Name: </label>
                <input
                    type="text"
                    value={hero}
                    onChange={(e) => {
                        setHero(e.target.value);
                    }}
                />
                <label>Gener: </label>
                <input
                    type="text"
                    value={gener}
                    onChange={(e) => {
                        setGener(e.target.value);
                    }}
                />
                <label>Rating: </label>
                <input
                    type="number"
                    min="0.1"
                    max="5"
                    step="0.1"
                    value={rating}
                    onChange={(e) => {
                        setRating(e.target.value);
                    }}
                />
                <label>Poster Url: </label>
                <input
                    type="url"
                    value={poster}
                    onChange={(e) => {
                        setPoster(e.target.value);
                    }}
                />
                <input type="submit" value="Update Movie" id="submitbtnupdate" />
            </form>
        </div>
    );
}
