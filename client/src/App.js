import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import Header from './components/js/NavBar';
import Login from './components/js/Login';

function App() {
  return (
    <div className="App">
        <Header />
        <br />
       <Button color="primary" variant="contained"> Press me </Button>
       <br /><br />
       <TextField id="name" label="Name" variant="outlined" />
       <Login />
    </div>
  );
}

export default App;
