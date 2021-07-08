import React from "react";
import { BlogDetail, Category, Home } from "./components";
import Layout from "./hocs/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./pages/Blog";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/category/:id" component={Category} />
          <Route exact path="/blog/:id" component={BlogDetail} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
