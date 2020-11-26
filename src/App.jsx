import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/statistical-data.json';

function App() {
    return <div>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats = {user.stats} 
        />
        <Statistics stats={data}
        />
        
    </div>;
}

export default App;