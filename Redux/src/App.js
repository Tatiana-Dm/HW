import logo from './logo.svg';
import './App.css';
import { MyComponents } from './components/MyComponents';
import LifeCycles from './components/LifeCycles';
import CounterContainer from "./containers/CounterContainer";
import { ColorContainer } from "./components/index";

function App() {
    const getData = () => {
        return "Some data";
    };

  return (
    <div className="App">
      <MyComponents.Header logo={logo} />
      <MyComponents.Body />
      <MyComponents.Section
          text="Some text"
          isDefault={false}
          count={10}
          user={{ name: "John", age: 34 }}
          data={getData()}
      />
      <LifeCycles color="red"/>
      <CounterContainer />
      <ColorContainer />
    </div>
  );
}

export default App;
