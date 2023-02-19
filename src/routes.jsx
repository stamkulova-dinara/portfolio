import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Experience}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};
