import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import All_students from "./components/All_users/All_students";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<Home />}/>
            <Route path="All_students" element={<All_students />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
