import user from '../json/user.json';
import Profile from './Profile/Profile';
import data from '../json/data.json';
import Statistic from './Statistics/Statistics';
import friends from '../json/friends.json';
import FriendList from './FriendList/FriendList';

console.log(friends);

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
    </div>
  );
};

export default App;
