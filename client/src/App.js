
import './App.css';
import Home from './component/Home';
import Authenticate from './component/Authentication/Authenticate';
import Writeblog from './component/Writeblog';
import Userpage from './component/Userpage';
import Edituser from './component/Edituser';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Authenticate/>}/>
        <Route path={'/Home'} element={<Home/>}/>
        <Route path={'/CreateBlog'} element={<Writeblog/>}/>
        <Route path={'/User'} element={<Userpage/>}/>
        <Route path={'/Edituser/:id'} element={<Edituser/>}/>
      </Routes>
    </div>
  );
}

export default App;
