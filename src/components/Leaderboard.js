import React, {Component} from 'react';
import './Leaderboard.css';

const User = (props) => (
  <tr>
    <td>{props.order}</td>
    <td>
      <a href={`https://www.freecodecamp.com/${props.username}`}>
        <div className="Leaderboard-avatar">
          <img src={props.img} alt="avatar" height="40px" width="40px"/>
        </div>
        <div className="Leaderboard-username">
          {props.username}
        </div>
      </a>
    </td>
    <td>{props.recent}</td>
    <td>{props.alltime}</td>
  </tr>
)

class Leaderboard extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <div>
          'Loading'
        </div>
      )
    }

    let i = 1;
    let users = this.props.data.map((user) => {
      return (
        <User key={i}
              order={i++}
              img={user.img}
              username={user.username}
              recent={user.recent}
              alltime={user.alltime}/>
          );
    });

    return (
      <div className='col-lg-6 col-lg-offset-3'>
        <table className='table table-striped table-bordered Leaderboard-table'>
          <thead className="Leaderboard-theader">
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th><a onClick={() => this.props.onChangeView('recent')}>Recent points</a></th>
              <th><a onClick={() => this.props.onChangeView('alltime')}>All time points</a></th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Leaderboard;
