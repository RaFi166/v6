import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Posts from './Components/Posts';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SinglePost from './Components/SinglePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post" element={<Posts />}></Route>
          <Route path="/post/:id" element={<SinglePost></SinglePost>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
