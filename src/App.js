import './App.css';
import  Sidebar  from './components/Sidebar/Sidebar';
import UserProfile from './components/UserProfile/UserProfilePage';
import TrendingAndSuggested from './components/TrendingAndSuggested/TrendingAndSuggested.';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <UserProfile/>
      <TrendingAndSuggested/>
    </div>
  );
}

export default App;
