import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import ReportsPage from "./pages/ReportsPage";

export interface AppProps {}

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" component={ReportsPage} />
    </Switch>
  </Layout>
);

export default App;
