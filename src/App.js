import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import HeroesMenu from "./components/HeroesMenu";
import HeroPage from "./components/HeroPage";
import HeroCategories from "./components/HeroCategories";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Route path="/heroes" component={HeroCategories} exact />
      <Route path="/" component={Content} exact />
      <Route path="/heroes" component={HeroesMenu} exact />
      <Route path="/heroes/:name" component={HeroPage} exact />
    </div>
  );
}

export default App;
