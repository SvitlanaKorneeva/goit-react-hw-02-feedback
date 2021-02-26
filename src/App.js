import "./App.css";
import Profile from "./components/Profile/Profile";
// import Statistics from "./components/Statistics/Statistics";
// import FriendList from "./components/FriendList/FriendList";
// import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import profileUser from "./db/user.json";
// import statisticalData from "./db/statistical-data.json";
// import friends from "./db/friends.json";
// import transactions from "./db/transactions.json";

const { name, tag, location, avatar, stats } = profileUser;

function App() {
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      {/* <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
      <h1>hello my lovely Fe-25</h1>
    </>
  );
}

export default App;
