
import './App.css';
import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import Statistics from './components/Statistics/Statistics'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

import profileUsers from './db/user.json'
import statisticsData from './db/statistical-data.json'

const {name, tag, location, avatar, stats } = profileUsers

function App() {
  return (
    <>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats}  />
      <Statistics title='statistics' stats={statisticsData}/>
      <FriendList />
      <TransactionHistory />
      <h1>hello my lovely Fe-25</h1>
    </>
  );
}

export default App;

