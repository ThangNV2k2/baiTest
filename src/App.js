import "./App.css";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
