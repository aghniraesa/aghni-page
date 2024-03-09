import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Section from './components/section';
import './App.css';

function App() {
  return (
    <div>
      <Section>
        <Container>
          <Row>
            <h1>Hello World!</h1>
          </Row>
          <Row>
            <h2>It's ya boy, Aghni Raesa.</h2>
          </Row>
          <Row>
            <p>More things coming soon&trade;</p>
          </Row>
        </Container>
      </Section>
    </div>
  );
}

export default App;
