import Body from "./components/body";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Movies from "./components/projects/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import LoginForm from "./components/movieForm";
import ToDoList from "./components/toDoList";

function App() {
  return (
    <main className="container-fluid App">
      <Switch>
        <Route path="/fav-movie/:id" component={LoginForm} />
        <Route path="/todolist" component={ToDoList} />
        <Route path="/home" component={Body} />
        <Route path="/fav-movie" component={Movies} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/Home" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
