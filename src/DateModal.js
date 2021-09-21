import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function DateModal(props){

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false)
  };

  const [apod, setApod] = useState([])

  const API = "qhNHOMx7QQSZkDczvvAZA29kejOCnBEUeeXXcqcb"
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API}&date=${props.date}`)
    .then(r => r.json())
    .then(d => setApod(d))
  }, [])
  
  let visual;
  if (apod.code === 400) {
    visual = <iframe src='https://gfycat.com/ifr/FixedIndolentIzuthrush' width="480" height="196" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  } else if (apod.media_type !== "image"){
    visual = <iframe src={apod.url} className="w-100 " allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  } else {
    visual = <img className="w-100 rounded" src={apod.url}></img>
  }


  return (
    <>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton className="bg-success text-white">
        <Modal.Title>{apod.title ? apod.title : apod.msg}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-primary">
        {visual}
        <h2 className="text-success mt-3">{apod.date}</h2>
       <p className="text-light">{apod.explanation}</p>
      </Modal.Body>
      <Modal.Footer className="bg-success">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}