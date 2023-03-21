import Home from "./routes/home/Home";
import { Route,Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/Sign-in";
const App = () => {
  
  return (<>
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
   
  </>
    
     
   
  );
};

export default App;
