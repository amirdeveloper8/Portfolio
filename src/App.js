import Body from "./components/body";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Movies from "./components/projects/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import LoginForm from "./components/movieForm";
import ToDoList from "./components/toDoList";
import quizApp from "./components/quizApp";
import quizContent from "./components/quizCont";
import QuizQuestions from "./components/quizQuestions";
import Recipe from "./components/recipe";

function App() {
  return (
    <main className="container-fluid App">
      <Switch>
        <Route path="/quiz-app/content" component={quizContent} />
        <Route path="/recipe" component={Recipe} />
        <Route path="/quiz-app/questions" component={QuizQuestions} />
        <Route path="/fav-movie/:id" component={LoginForm} />
        <Route path="/todolist" component={ToDoList} />
        <Route path="/quiz-app" component={quizApp} />
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
