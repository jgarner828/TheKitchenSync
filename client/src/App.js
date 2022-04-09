// import logo from './logo.svg';
import './App.css';
// import {Button} from '@material-ui/core';
// import {TextField} from '@material-ui/core';
import Header from './components/js/NavBar';
import Login from './components/js/Login';
import Home from './components/js/Home';
import Profile from './components/js/Profile';
import Blog from './components/js/Blog';
import SignUp from './components/js/SignUp';
import SpiceChart from './components/js/SpiceChart';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        
        <Router>
         
        <Header />
        {/* <SpiceChart /> */}
        {/* Add spice chart to profile page? */}
      
        <Routes>
            <Route path="/" element={<Home />} />           
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/spicechart" element={<SpiceChart />} />
        </Routes>
        
          {/* <Button color="primary" variant="contained"> Press me </Button>
          <TextField id="name" label="Name" variant="outlined" />
          <Login /> */}
       
       </Router>     
    </div>
  );
}

export default App;