import './App.css';
import Dashboard from "./layouts/Dashboard";
import Navigation from "./layouts/Navigation";
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Container className="main">
      <Navigation />
      <Dashboard />
      </Container>
    </div>
  );
}
export default App;
