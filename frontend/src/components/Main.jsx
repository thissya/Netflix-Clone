import React, { useState, useEffect } from "react";
import requests from "../Request";
import axios from "axios";

function Main() {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results);
        });
    }, []);

    //console.log(movie);
    const truncateString = (str,num)=>{
        if(str?.length > num){
            return str.slice(0,num)+"...";
        }else{
            return str;
        }
    } 

    return (
        <div className="w-full h-[550px] text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                <img className="w-full h-full object-fit" src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.title} /> 
                {/*or poster_path instead of backdrop_path */}
                <div className=" absolute w-full top-[20%] p-4  md:p-8 ">
                    <div className="text-white font-bold text-3xl md:text-5xl">{movie?.title}</div>
                    <div className="my-4">
                        <button className="border bg-gray-100 text-black py-2 px-5 border-gray-300">Play</button>
                        <button className="border border-gray-300 py-2 px-5 ml-4">Watch Later</button>
                    </div>
                    <p className="my-4 text-gray-400 text-sm font-bold">Released: {movie?.release_date}</p>
                    <p className="text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] ">{truncateString(movie?.overview,250)}</p>
                </div>
            </div>
        </div>
    );
}

export default Main;
