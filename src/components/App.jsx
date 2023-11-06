import user from '../json/user.json';
import Profile from './Profile/Profile';
import data from '../json/data.json';
import Statistic from './Statistics/Statistics';
import friends from '../json/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from '../json/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
