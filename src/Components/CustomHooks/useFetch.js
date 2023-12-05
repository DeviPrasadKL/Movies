import { useEffect, useState } from "react";

export default function useFetch(url) {
    let [movies, setmovies] = useState(null);
    let [pending, setpending] = useState(true);
    let [error, seterror] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (res.ok === false) {
                    throw Error("Searching data not found in this API")
                }
                return res.json()
            })
            .then((data) => { setmovies(data); setpending(false); })
            .catch((err) => { seterror(err.message); })
    }, [url]);

    return [movies, pending, error];
}
