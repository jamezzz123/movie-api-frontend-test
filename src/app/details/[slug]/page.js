"use client";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home({ params }) {
    let [data, setData] = useState(null);
    let [dataKeys, setDataKeys] = useState(null);
    async function fetchData() {
        const res = await fetch(`https://localhost:7185/api/MovieItems/${params.slug}`)
        const data = await res.json();
        setData(data);
        setDataKeys(Object.keys(data))
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (data === null) {
        return (<h1>LOADING</h1>)
    }

    function loopFun() {
        let dataA = Object.keys(data).map((key) => (
            <tr key={key}>
                <td>{key}</td>
                <td>{data[key]}</td>
            </tr>
        ))
        console.log(dataA);
    }


    return (
        <>
            <Link href="/"><p>Back</p></Link>
            <div className="w-100 row">
                <div className="col-md-4">
                    <img className="w-auto" src={data.Poster} alt="1" />
                </div>
                <div className="col-md-8">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Title</th>
                                <td>{data.Title}</td>
                            </tr>
                            <tr>
                                <th>Year</th>
                                <td>{data.Year}</td>
                            </tr>
                            <tr>
                                <th>Rated</th>
                                <td>{data.Rated}</td>
                            </tr>
                            <tr>
                                <th>Released</th>
                                <td>{data.Released}</td>
                            </tr>
                            
                            <tr>
                                <th>Runtime</th>
                                <td>{data.Runtime}</td>
                            </tr>
                            
                            <tr>
                                <th>Genre</th>
                                <td>{data.Genre}</td>
                            </tr>
                            
                            <tr>
                                <th>Director</th>
                                <td>{data.Director}</td>
                            </tr>
                            <tr>
                                <th>Writer</th>
                                <td>{data.Writer}</td>
                            </tr>
                            <tr>
                                <th>Actors</th>
                                <td>{data.Actors}</td>
                            </tr>
                            <tr>
                                <th>Plot</th>
                                <td>{data.Plot}</td>
                            </tr>
                            <tr>
                                <th>Language</th>
                                <td>{data.Language}</td>
                            </tr>
                            <tr>
                                <th>Country</th>
                                <td>{data.Country}</td>
                            </tr>
                            <tr>
                                <th>Awards</th>
                                <td>{data.Awards}</td>
                            </tr>
                            
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
