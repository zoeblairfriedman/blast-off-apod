import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export default function Header(){
  return (
    <Container>
    <Navbar.Brand>
      <img
        src="/tinyrocket.png"
        width="50"
        height="50"
        className="my-5"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Container>
  )
}