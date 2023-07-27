import Image from 'next/image'
// import styles from './page.module.css'

export default function Home() {
    return (
        <>
            <button className="btn btn-primary my-3">Back</button>
            <div className="w-100 row">
                <div className="col-md-4">
                    <img className="w-auto" src="https://m.media-amazon.com/images/M/MV5BZWNkNDkzNjUtZWEwMy00YWIyLWFmNzctNjY5N2YyNDA5OGZmXkEyXkFqcGdeQXVyNDkyMzMyODM@._V1_SX300.jpg" alt="1" />
                </div>
                <div className="col-md-8">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
