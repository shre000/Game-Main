import React, { useState } from "react";
import '../../../Comp-style/counter.css'

const Counter = () => {
    // Set the initial count state to zero, 0
    const [count, setCount] = useState(0);

    // Create handleIncrement event handler
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    //Create handleDecrement event handler
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };
    return (
        <div>
            <div className="fs-6 px-3 mb-3">
                <span>Contract Money</span>
            </div>
            <div className="d-flex mb-3">
            <span className="btn border-bottom text-dark ">10</span>
            <span className="btn border-bottom text-dark">100</span>
            <span className="btn border-bottom text-dark">1000</span>
            <span className="btn border-bottom text-dark">10000</span>
            </div>
            <div className="text-center d-flex ">
                <p className="fs-6 p-3">Number</p>
                <div className="border border-4 mx-5 px-2 py-3">
                    <button className="btn border border-3 text-dark mx-3" onClick={handleDecrement}>-</button>
                    <span className="fs-6 btn border border-3 text-dark mx-3"> {count} </span>
                    <button className="btn border border-3 text-dark mx-3" onClick={handleIncrement}>+</button>
                    {/* <button onClick={() => setCount(0)}>Reset</button> */}
                </div>

            </div>
            <div className="py-1 text-center">
                <p>Total Contract Money is {count}</p>
            </div>
            <div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            I Agree
                        </label>
                </div>
            </div>
        </div>
    )
}

export default Counter
