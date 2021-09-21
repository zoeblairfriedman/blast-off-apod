import React, { useState, useEffect } from 'react';
import Random from './Random'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default function CardContainer(){

  const [state, setState] = useState([])

  const API = "qhNHOMx7QQSZkDczvvAZA29kejOCnBEUeeXXcqcb"
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API}&count=10`)
    .then(r => r.json())
    .then(d => setState(d))
  }, [])
 

  return (
  <Container>
    <Row className="justify-content-center">
      {state.map((asset, i) => <Random key={i} asset={asset}/>)}
    </Row>
  </Container>
  )
}
