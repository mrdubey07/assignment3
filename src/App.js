import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Direct from './routes/Direct';

function App() {
  return (
    <>
    <Provider store={store}>
      <Direct />
    </Provider>
    </>
  );
}

export default App;
