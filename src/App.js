import logo from './logo.svg';
import './App.css';
import AppHeader from './components/appHeader/AppHeader';
import AppFooter from './components/appFooter/AppFooter';

function App() {
  return (
    <div className='app'>
      <AppHeader />
      <h3>prostack.com</h3>
      <AppFooter />
    </div>
  );
}

export default App;