import logo from './logo.svg';
import './App.css';
import AppHeader from './components/appHeader/AppHeader';
import AppFooter from './components/appFooter/AppFooter';

function App() {
  return (
    <div className='app'>
      <AppHeader />
      <h3>prostack.com</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Deserunt quod vitae possimus nisi cumque ad laboriosam praesentium molestiae
        commodi sed!</p>
      <AppFooter />
    </div>
  );
}

export default App;