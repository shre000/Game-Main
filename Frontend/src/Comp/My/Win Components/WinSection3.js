import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../Comp-style/winsection3.css";
import Joingreen from "./Joingreen";
import Joinblue from "./Joinblue";
import Joinred from "./Joinred";
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

const WinSection3 = () => {
  const initialCountdown = 180; // 180 seconds = 3 minutes
  const [countdown, setCountdown] = useState(initialCountdown);
  const minutes = String(Math.floor(countdown / 60)).padStart(2, "0");
  const seconds = countdown % 60;
  const disableSection = countdown <= 30;

  // Function to reset the countdown to the initial value
  const resetCountdown = () => {
    setCountdown(initialCountdown);
  };

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        // Reset the countdown when it reaches 0
        resetCountdown();
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown]);

  return (
    <div>
      <div className={`section-container disable-bg ${disableSection ? "disabled" : ""}`}>
        <div className="row my-2 disable-bg py-2">
          <div className="col mx-3 fs-5">
            Period <br /> 39293829
          </div>
          <div className="col text-end mx-3 fs-5">
            Countdown <br /> {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
          </div>
        </div>
        <div className="container-fluid py-1 ">
          <Row className="text-center">
            <Col>
              <Joingreen disabled={disableSection} />
            </Col>
            <Col>
              <Joinblue disabled={disableSection} />
            </Col>
            <Col>
              <Joinred disabled={disableSection} />
            </Col>
          </Row>
        </div>
        <br /> <br />
        <Row className="text-lg-center text-md-start text-sm-start text-xs-start">
          <Col>
            <span>
              <Zero disabled={disableSection} />
            </span>
          </Col>
          <Col>
            <span>
              <One disabled={disableSection} />
            </span>
          </Col>
          <Col>
            <span>
              <Two disabled={disableSection} />
            </span>
          </Col>
          <Col>
            <span>
              <Three disabled={disableSection} />
            </span>
          </Col>
          <Col>
            <span>
              <Four disabled={disableSection} />
            </span>
          </Col>
          <Col>
            <span>
              <Five disabled={disableSection} />
            </span>
          </Col>
          <Col>
            <span>
              <Six disabled={disableSection} />
            </span>
          </Col>
          <Col>
            <span>
              <Seven disabled={disableSection} />
            </span>
          </Col>
          <Col>
            <span>
              <Eight disabled={disableSection} />
            </span>
          </Col>
          <Col>
            <span>
              <Nine disabled={disableSection} />
            </span>
          </Col>
        </Row>
        <br />
        
      </div>
    </div>
  );
};

export default WinSection3;
