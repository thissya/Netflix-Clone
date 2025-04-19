import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Movie from './Movie';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results);
        })
    }, [fetchUrl]);

    

    return (
        <div>
            <h2 className="text-white font-bold md:text-xl p-4 ">{title}</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft className=" bg-white left-0 rounded-full absolute  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"  size={40}/>
                <div id={'slider'} className= "w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide" >
                    {
                        movies.map((item, id) => (
                            <Movie key={id} item={item} />
                        ))
                    }
                </div>
                <MdChevronRight className=" bg-white right-0 rounded-full  absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block " size={40} />
            </div>

        </div>
    )
}

export default Row;