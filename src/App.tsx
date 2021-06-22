import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import { Menu } from 'antd';
import routes from './routes';
import 'antd/dist/antd.css';

const App = () => (
  <BrowserRouter>
    <Menu mode="horizontal">
      {
        routes.map((v) => (
          <Menu.Item key={v.name}>
            <Link to={v.path}>{v.name}</Link>
          </Menu.Item>
        ))
      }
    </Menu>
    <Switch>
      {
        routes.map((v) => (
          <Route exact key={v.name} path={v.path} component={v.component} />
        ))
      }
    </Switch>
  </BrowserRouter>
);

export default App;
