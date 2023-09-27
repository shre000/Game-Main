import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [multiplier, setMultiplier] = useState(1);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div>
            <div className="fs-6 px-3 mb-3">
                <span>Contract Money</span>
            </div>
            <div className="d-flex mb-3">
                <span
                    className={`btn border-bottom text-dark ${multiplier === 10 ? 'selected' : ''}`}
                    onClick={() => setMultiplier(10)}
                >
                    10
                </span>
                <span
                    className={`btn border-bottom text-dark ${multiplier === 100 ? 'selected' : ''}`}
                    onClick={() => setMultiplier(100)}
                >
                    100
                </span>
                <span
                    className={`btn border-bottom text-dark ${multiplier === 1000 ? 'selected' : ''}`}
                    onClick={() => setMultiplier(1000)}
                >
                    1000
                </span>
                <span
                    className={`btn border-bottom text-dark ${multiplier === 10000 ? 'selected' : ''}`}
                    onClick={() => setMultiplier(10000)}
                >
                    10000
                </span>
            </div>
            <div className="text-center d-flex">
                <p className="fs-6 p-3">Number</p>
                <div className="border border-4 mx-5 px-2 py-3">
                    <button className="btn border border-3 text-dark mx-3" onClick={handleDecrement}>-</button>
                    <span className="fs-6 btn border border-3 text-dark mx-3"> {count} </span>
                    <button className="btn border border-3 text-dark mx-3" onClick={handleIncrement}>+</button>
                </div>
            </div>
            <div className="py-1 text-center">
                <p>Total Contract Money is {count * multiplier}</p>
            </div>
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        I Agree
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Counter;