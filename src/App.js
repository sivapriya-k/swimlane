import './App.css';
import {Board} from "./components/Board";

const data = {
  ready: {
    1: {
      name: 'Fix CSS',
      desc: 'Fix the css style bugs'
    },
    2: {
      name: 'Add tests',
      desc: 'Add tests'
    }
  },
  progress: {
    3: {
      name: 'Add e2e',
      desc: 'Add e2e tests to run on PRs'
    },
    4: {
      name: 'Improve build times',
      desc: 'Investigate improving build times'
    },
  },
  review: {},
  completed: {}
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Board data={data} />
      </header>
    </div>
  );
}

export default App;
