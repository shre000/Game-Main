import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Records from './Records';

const Parity = ({ period, randomNumber, randomColor }) => {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const generateRandomPrice = () => {
    return Math.floor(Math.random() * (5000 - 1000 + 1) + 1000); // Generates a random price between 1000 and 5000
  };
  const getColorClass = (color) => {
    if (color === 'GREEN') {
      return 'text-success';
    } else if (color === 'RED') {
      return 'text-danger';
    } else if (color === 'BLUE') {
      return 'text-primary'; // Change 'text-primary' to the desired class for blue color
    } else {
      return ''; // Add a default class if none of the above colors match
    }
  };
  // Simulate adding a new record when the data changes
  useEffect(() => {
    if (period !== null) {
      // Create a new record object
      const newRecord = {
        period: period,
        price: generateRandomPrice(), // You can replace this with actual price data
        number: randomNumber,
        result: (
          <span className={`fs-3 ${randomColor === 'GREEN' ? 'text-success' : 'text-danger'}`}>
            &#9679;
          </span>
        ),
      };

      // Add the new record to the records list
      setRecords((prevRecords) => [newRecord, ...prevRecords]);
    }
  }, [period, randomNumber, randomColor]);

  // Paginate the records
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div>
        <p className='text-center my-3'><i className="fa-solid fa-trophy"></i><br /> Game Records</p>
      </div>
      <div className="container-fluid mb-5">
        <table className="table table-striped mb-4 text-center">
          <thead>
            <tr>
              <th scope="col">Period</th>
              <th scope="col">Price</th>
              <th scope="col">Number</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((record, index) => (
              <tr key={index}>
                <th scope="row">{record.period}</th>
                <td>{record.price}</td>
                <td>{record.number}</td>
                <td>
        <span className={`fs-3 ${getColorClass(record.randomColor)}`}>
          &#9679;
        </span>
      </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav aria-label="Page navigation example" className=''>
          <ul className="pagination mb-5">
            {Array.from({ length: Math.ceil(records.length / recordsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <Link className="page-link" onClick={() => paginate(index + 1)}>
                  {index + 1}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="container-fluid">
          <p className='text-center'><i className="fa-solid fa-book"></i> My Records</p>
          <Records />
        </div>
      </div>
    </>
  );
};

export default Parity;
