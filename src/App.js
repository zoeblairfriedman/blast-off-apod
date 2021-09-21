
import './App.css';
import RandomContainer from './RandomContainer';
import ChooseDate from './ChooseDate'
import Row from 'react-bootstrap/Row'
import Header from './Header'


function App() {
  return (
      <>
      <Header/>
      <Row >
        <ChooseDate/>
        <RandomContainer/>
      </Row>
      </>
  );
}

export default App;