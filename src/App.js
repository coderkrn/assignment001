import './App.css';
import Leftbar from './components/Leftbar'
import MenuNav from './components/MenuNav'
import MenuNav2 from './components/MenuNav_2'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './components/Content';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/message-requests' element={<MenuNav2 /> }></Route>
          <Route path='/friends' element={<MenuNav />}></Route>
          <Route path='/' element={<MenuNav /> }></Route>
        </Routes>
        <Leftbar/>
       <Content/>
      </BrowserRouter>

    </>
  )
}

export default App