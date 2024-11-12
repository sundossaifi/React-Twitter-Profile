import './App.css';
import  Sidebar  from './components/Sidebar/Sidebar';
import UserProfile from './components/UserProfile/UserProfilePage';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <UserProfile/>
      <div className='right'>right</div>

    </div>
  );
}

export default App;
