
import {Provider} from 'react-redux'
import store from "./redux/store/store";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}> 
    <div >
      <Routes />
    </div>
    </Provider>
  );
}

export default App;
