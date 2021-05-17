import "./App.css";
import Feed from "./components/feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/widgets/Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
