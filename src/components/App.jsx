import user from '../json/user.json';
import Profile from './Profile/Profile';
import data from '../json/data.json';
import Statistic from './Statistics/Statistics';

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
    </div>
  );
};

export default App;
