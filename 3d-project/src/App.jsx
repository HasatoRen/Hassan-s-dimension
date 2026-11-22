import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//Creating the App Component.

const App = () => {
  return (
    <main className = "bg-slate-300/20">
      <Router>       
        Navbar
        <Routes>
          <Route path="/" element = {"home"}/>
          <Route path="/about" element = {"about"}/>
          <Route path="/projects" element = {"projects"}/>
          <Route path="/contact" element = {"contact"}/>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
