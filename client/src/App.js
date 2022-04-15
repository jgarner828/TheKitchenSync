// import logo from './logo.svg';
import './App.css';
// import {Button} from '@material-ui/core';
// import {TextField} from '@material-ui/core';
import Header from './components/js/NavBar';
import Login from './components/js/Login';
import Home from './components/js/Home';
import Profile from './components/js/Profile';
import CookBook from './components/js/CookBook';
import SignUp from './components/js/SignUp';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  console.log(token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <div className="App">
        <ApolloProvider client={client}>
        <Router>
         
        <Header />
      
        <Routes>
            <Route path="/" element={<Home />} />           
            <Route path="/profile" element={<Profile />} />
            <Route path="/cookbook" element={<CookBook />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
        
          {/* <Button color="primary" variant="contained"> Press me </Button>
          <TextField id="name" label="Name" variant="outlined" />
          <Login /> */}
       
       </Router>
       </ApolloProvider>
    </div>
  );
}

export default App;