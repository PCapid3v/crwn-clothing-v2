import { Routes,Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
    return(<h1>I am the Shop page</h1>)
  }
/* do not put the first <Route path> as 
self closing tag otherwise you can't use 
the route element and it won't work*/
const App = () => {
  return (
  <Routes >
    <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
    </Route>
    </Routes> 
  )
};

export default App;
