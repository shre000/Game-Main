import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Records = () => {
  return (
    <div>
        <ul className="container-fluid">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> 32424 ~ Fail - 45 </Accordion.Header>
                                <Accordion.Body>
                                    Item 2
                                </Accordion.Body>
                                <Accordion.Body>
                                    Item 2
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                       
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="">
                                <Accordion.Header>96642 ~ Success 95 </Accordion.Header>
                                <Accordion.Body>
                                    Item 1
                                </Accordion.Body>
                            </Accordion.Item>
                            
                        </Accordion>
                      
                        

                    </ul>
    </div>
  )
}

export default Records
