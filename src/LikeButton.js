import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react';
import Heart from "react-animated-heart"


export default function LikeButton(props){
  
  
const [like, toggleLike] = useState(false)
const [isClick, setClick] = useState(false)
const handleClick = () => {
let likeBtn = document.getElementById(props.asset.title)
 if (like === true){
    toggleLike(false)
    likeBtn.className="btn btn-primary"
    likeBtn.innerText="Like"
 } else {
    toggleLike(true)
    likeBtn.className="btn btn-danger"
    likeBtn.innerText="Unlike"
 }
}

  return (
     <div className="align-items-center"> 
     <Row>
        <Col></Col>
        <Col>
           {/* <Button onClick={() => handleClick()} id={props.asset.title} className="btn btn-primary d-inline">Like</Button> */}
            <Heart className="d-inline" isClick={isClick} onClick={() => setClick(!isClick)}/>
        </Col>
        <Col></Col>
  
     </Row>
     </div>
  )
}