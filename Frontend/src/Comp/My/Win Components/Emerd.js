import React from 'react'
import { Link } from 'react-router-dom'
import Records from './Records'

const Emerd = () => {
  return (
    <><div>
   <p className='text-center'><i class="fa-solid fa-trophy fa-bounce"><br /></i>Emerd Record</p>
</div>
    <div className="container mb-5">
        <table className="table table-striped mb-4">
            <thead>
                <tr>
                    <th scope="col">Period</th>
                    <th scope="col">Price</th>
                    <th scope="col">Number</th>
                    <th scope="col">red</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1000</th>
                    <td>2345</td>
                    <td>3</td>
                    <td>violet</td>

                </tr>
                <tr>
                    <th scope="row">999</th>
                    <td>67574</td>
                    <td>9</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">998</th>
                    <td>8565</td>
                    <td>2</td>
                    <td>red</td>
                </tr>
                <tr>
                    <th scope="row">997</th>
                    <td>4343</td>
                    <td>6</td>
                    <td>violet</td>
                </tr>
                <tr>
                    <th scope="row">996</th>
                    <td>6508</td>
                    <td>0</td>
                    <td>red</td>
                </tr>


            </tbody>
        </table>
        <nav aria-label="Page navigation example" className='align-content-end'>
                    <ul className="pagination mb-5 ">
                        <li className="page-item">
                            <Link aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </Link> &nbsp;
                        </li>
                        <li className="page-item mx-2"><Link>1</Link></li> 
                        <li className="page-item mx-2"><Link>2</Link></li>
                        <li className="page-item mx-2"><Link>3</Link></li>
                        <li className="page-item">
                            <Link> &nbsp;
                                <span aria-hidden="true">&raquo;</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <p className='text-center'><i class="fa-solid fa-book fa-bounce"></i>My Emerd Record</p>
                    <Records/>
                </div>
    </div>
</>
  )
}

export default Emerd
