import Home from "./routes/home/Home";
import { Route,Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/shop";
import CheckOut from "./routes/checkout/checkout";
const App = () => {
  
  return (<>
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<CheckOut/>}/>
      </Route>
    </Routes>
   
  </>
    
     
   
  );
};

export default App;
