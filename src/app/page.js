import Image from 'next/image'
// import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-100">
      <form class="row g-3 w-100">
        <div class="col-10">
          <input placeholder='Search by Name' type="text" className="form-control form-control-lg" />
        </div>
        <div class="col-2">
          <button type="submit" className="btn btn-lg btn-outline-primary mb-3">Search</button>
        </div>
      </form>

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
              <tr>
                <td>Otto</td>
                <td>@mdo</td>
                <td><Link href="/details/20">Heehe</Link><button className="btn btn-sm btn-outline-primary">View</button></td>
              </tr>
              <tr>
                <td>Thornton</td>
                <td>@fat</td>
                <td><button className="btn btn-sm btn-outline-primary">View</button></td>
              </tr>
              <tr>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><button className="btn btn-sm btn-outline-primary">View</button></td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}
