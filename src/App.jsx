// src/App.jsx - Remplacement complet
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/Portfolio_React">
      <div className="min-h-screen flex flex-col relative bg-white dark:bg-gray-900">
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full filter blur-[100px] animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-400/20 dark:bg-purple-600/20 rounded-full filter blur-[100px] animate-blob-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-400/15 dark:bg-indigo-600/15 rounded-full filter blur-[100px] animate-blob-slower"></div>
        </div>

        <Header />
        <main className="flex-grow pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
