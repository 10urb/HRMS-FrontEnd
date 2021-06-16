import './App.css';
import Dashboard from "./layouts/Dashboard";
import Navigation from "./layouts/Navigation";
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import SignUp from './layouts/SignUp';
import SignUpForm from './pages/SignUpForm';
import JobAdvertisementForm from './pages/JobAdvertisementForm';
import SearchBoxComponent from './layouts/SerchBoxComponent';




function App() {
  return (
    <div className="App">
      
      
      <Navigation/>
      <SearchBoxComponent/>
      <Container className="main">
        <Dashboard />
       
    <JobAdvertisementForm/>
     
      </Container>




    </div>
  );
}

export default App;
