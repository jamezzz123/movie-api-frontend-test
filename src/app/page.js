"use client";

import Image from "next/image";
// import styles from './page.module.css'
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  function getData(e) {
    setLoading(true);
    fetch(`https://localhost:7185/api/MovieItems?search=${value}`)
      .then((res) => res.json())
      .then((data) => {
        if(data.Search){
          setResult(data.Search);
        }else{
          setResult([]);
        }
      })
      .then(() => setLoading(false))
      .catch((e) => {
        setResult([]), setLoading(false);
      });
  }
  return (
    <div className="w-100">
      <div className="row g-3 w-100">
        <div className="col-10">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search by Name"
            type="text"
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            onClick={() => getData()}
            className="btn btn-lg btn-outline-primary mb-3"
          >
            Search
          </button>
        </div>
      </div>

      <div className="my-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <h1>LOADING...</h1>
              </tr>
            ) : result.length > 0 ? (
              result.map((item, index) => (
                <tr key={index}>
                  <td>{item.Title}</td>
                  <td>{item.Year}</td>
                  <td>
                    <Link href={`/details/${item.imdbID}`}>
                      <button className="btn btn-sm btn-outline-primary">
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <h1>NO RESULT FOUND</h1>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
