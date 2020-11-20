import { Route } from "react-router-dom";
import "./css/App.css";
import {
  Header,
  Content,
  HeroesMenu,
  HeroPage,
  HeroCategories,
} from "./components/index.js";

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
