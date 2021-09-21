import React, { useState } from 'react';
import DateModal from './DateModal'
import DateForm from './DateForm'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'



export default function ChooseDate(){


  const [date, setDate] = useState("");

  function handleSubmit(newDate){
    setDate(newDate)
  }


  
  return (
  <Container>
      <Row>
        <DateForm date={date} onSubmit={handleSubmit}/>
      </Row>
      { date ? <DateModal key={date} date={date} /> : null}
  </Container>
  )
}