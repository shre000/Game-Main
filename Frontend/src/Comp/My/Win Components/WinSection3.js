import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Joingreen from "./Joingreen";
import Joinred from "./Joinred";
import Joinblue from "./Joinblue";
import Zero from "./Zero";

import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";
import Eight from "./Eight";
import Nine from "./Nine";

const WinSection3 = ({
  availableBalance,
  setAvailableBalance,
  selectedAmount,
  //period, // Receive the period prop
  //setPeriod, // Receive the setPeriod prop
  setRandomNumber,
  setRandomColor,

  
}) => {
  const initialCountdown = 180; // 180 seconds = 3 minutes
  const [countdown, setCountdown] = useState(initialCountdown);
  const minutes = String(Math.floor(countdown / 60)).padStart(2, "0");
  const seconds = countdown % 60;
  const disableSection = countdown <= 30;
  const [userPrediction, setUserPrediction] = useState(null); // Track color prediction
  const [userNumberPrediction, setUserNumberPrediction] = useState(null);
  const [countdownCompleted, setCountdownCompleted] = useState(false);
  const [period, setPeriod] = useState(2100); // Initial period
  

  const resetCountdown = () => {
    setCountdown(initialCountdown);
  };

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        resetCountdown();
        setCountdownCompleted(true); // Countdown completed
        setPeriod((prevPeriod) => prevPeriod + 1); // Increase the period by 1
        localStorage.setItem("period", period + 1);

      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown]);

  const handleColorPrediction = (color) => {
  
      console.log(color)
      // Generate a random color among "GREEN," "RED," and "VIOLET"
      const colors = ["GREEN", "RED", "BLUE"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      console.log(" RANDOM GENERATED Color are  " +randomColor)
      setUserPrediction(randomColor);
      //const randomColor = "RED"
      // Generate a random number from 0 to 9
      const randomResult = Math.floor(Math.random() * 10);
      console.log("Random number generated: " + randomResult);
      
      let reward = 0;
      
      if (randomColor === "GREEN") {
        if ([1, 3, 7, 9].includes(randomResult)) {
          reward = 98 * 2;
        } else if (randomResult === 5) {
          reward = 1.5 * 2;
        }else{
          reward = 10 *2;
        }
      } else if (randomColor === "RED") {
        if ([2, 4, 6, 8].includes(randomResult)) {{}
          reward = 98 * 2;
        } else if (randomResult === 0) {
          reward = 1.5 * 2;
        }else{
          reward = 10 *2;
        }
      } else if (randomColor === "BLUE") {
        if ([0, 5].includes(randomResult)) {
          reward = 4.5 * 2;
        }else{
          reward = 10 *2;
        }
      }
      
      // Update the balance by calling the updateBalance function
      const newBalance = availableBalance  + reward -2;
      console.log("New balance: " + newBalance);
      setAvailableBalance(newBalance);  // Deduct the prediction cost
    setRandomColor(randomColor);
  };
  
  const handleNumberPrediction = (number) => {

  console.log(countdownCompleted)
  console.log(number)
  setUserNumberPrediction(number);
   const randomResult = Math.floor(Math.random() * 10); // Random number from 0 to 9
   console.log( "Random number genrated  "+randomResult)
  let reward = 0;
  //const randomResult = "9"
  if (number === randomResult.toString()) {
    reward = 9 * 9;
    console.log("Correct prediction! Reward: " + reward);
  } else {
    console.log("Incorrect prediction. No reward.");
  }
  
  //setRandomColor(randomColor);
  // Update the balance by calling the updateBalance function
   // The cost of making a prediction
  const newBalance = availableBalance + reward - 2;
  console.log("New balance: " + newBalance);

  // Set the new available balance
  setAvailableBalance(newBalance); // Deduct the prediction cost
  setRandomNumber(randomResult);

     
  };

  return (
    <div>
      <div
        className={`section-container disable-bg ${
          disableSection ? "disabled" : ""
        }`}
      >
        {/* ... (existing code for Period and Countdown) */}
        <div className="row my-2 disable-bg py-2">
          <div className="col mx-3 fs-5">
          Period <br /> {period}
          </div>
          <div className="col text-end mx-3 fs-5">
            Countdown <br /> {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
          </div>
        </div>
        <div className="container-fluid py-1 ">
          <Row className="text-center">
            <Col>
              <Joingreen
                disabled={disableSection}
                handleColorPrediction ={handleColorPrediction}
                availableBalance={availableBalance}
                setAvailableBalance={setAvailableBalance} 
              />
            </Col>
            <Col>
              <Joinred
                disabled={disableSection}
                handleColorPrediction ={handleColorPrediction}
                availableBalance={availableBalance}
                setAvailableBalance={setAvailableBalance} 
              />
            </Col>

            <Col>
              <Joinblue
                disabled={disableSection}
                handleColorPrediction ={handleColorPrediction}
                availableBalance={availableBalance}
                setAvailableBalance={setAvailableBalance} 
              />
            </Col>
          </Row>
        </div>
        <br />
        <Row className="text-lg-center text-md-start text-sm-start text-xs-start">
          <Col>
            <span>
              <Zero
               disabled={disableSection}
                availableBalance={availableBalance}
                setAvailableBalance={setAvailableBalance} 
                handleNumberPrediction={handleNumberPrediction}// This is passed to Zero
                 //("0")
              />
            </span>
          </Col>
          <Col>
            <span>
              <One
                  disabled={disableSection}
                  availableBalance={availableBalance}
                  setAvailableBalance={setAvailableBalance}  // This is passed to Zero
                  handleNumberPrediction={handleNumberPrediction}
              />
            </span>
          </Col>
          <Col>
            <span>
              <Two
                 disabled={disableSection}
                 availableBalance={availableBalance}
                 setAvailableBalance={setAvailableBalance}  // This is passed to Zero
                 handleNumberPrediction={handleNumberPrediction}
          

              />
            </span>
          </Col>
          <Col>
            <span>
              <Three
                 disabled={disableSection}
                 availableBalance={availableBalance}
                 setAvailableBalance={setAvailableBalance}  // This is passed to Zero
                 handleNumberPrediction={handleNumberPrediction}
             
              />
            </span>
          </Col>
          <Col>
            <span>
              <Four
                  disabled={disableSection}
                  availableBalance={availableBalance}
                  setAvailableBalance={setAvailableBalance}  // This is passed to Zero
                  handleNumberPrediction={handleNumberPrediction}
                
              />
            </span>
          </Col>
          <Col>
            <span>
              <Five
                  disabled={disableSection}
                  availableBalance={availableBalance}
                  setAvailableBalance={setAvailableBalance}  // This is passed to Zero
                  handleNumberPrediction={handleNumberPrediction}
              />
            </span>
          </Col>
          <Col>
            <span>
              <Six
                  disabled={disableSection}
                  availableBalance={availableBalance}
                  setAvailableBalance={setAvailableBalance}  // This is passed to Zero
                  handleNumberPrediction={handleNumberPrediction}
              />
            </span>
          </Col>
          <Col>
            <span>
              <Seven
                  disabled={disableSection}
                  availableBalance={availableBalance}
                  setAvailableBalance={setAvailableBalance}  // This is passed to Zero
          
                  handleNumberPrediction={handleNumberPrediction}
                />
            </span>
          </Col>
          <Col>
            <span>
              <Eight
                 disabled={disableSection}
                 availableBalance={availableBalance}
                 setAvailableBalance={setAvailableBalance}  // This is passed to Zero
                 handleNumberPrediction={handleNumberPrediction}
              />
            </span>
          </Col>
          <Col>
            <span>
              <Nine
                disabled={disableSection}
                 availableBalance={availableBalance}
                 setAvailableBalance={setAvailableBalance}
                 handleNumberPrediction={handleNumberPrediction}
              />
            </span>
          </Col>
        </Row>
        <br />
        {/* <p>Available Balance: &#x20B9;{" "}
  {typeof availableBalance === "number" ? availableBalance.toFixed(2) : "N/A"}</p> */}
  
        <p>User Color Prediction: {userPrediction}</p>
        <p>User Number Prediction: {userNumberPrediction}</p>
      </div>
    </div>
  );
};

export default WinSection3;
