import React, {Component} from 'react';
import axios from 'axios';
import Leaderboard from '../components/Leaderboard';

class LeaderboardContainer extends Component {
  constructor() {
    super();

    this.state = {
      isLoadingRecent: true,
      isLoadingAllTime: true,
      dataRecent: {},
      dataAllTime: {},
      view: 'recent',
    }

    this.handleChangeView = this.handleChangeView.bind(this);

    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then((response) => {
        this.setState({
          isLoadingRecent: false,
          dataRecent: response,
        });
      })
      .catch((error) => console.log(error));

    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then((response) => {
        this.setState({
          isLoadingAllTime: false,
          dataAllTime: response,
        });
      })
      .catch((error) => console.log(error));
  }

  handleChangeView(view) {
    if (this.state.view !== view) {
      if (this.state.view === 'recent') {
        this.setState({
          view: 'alltime',
        });
      } else {
        this.setState({
          view: 'recent'
        });
      }
    }
  }

  render() {
    let isLoading = this.state.view === 'recent' ?
      this.state.isLoadingRecent : this.state.isLoadingAllTime;
    let data = this.state.view === 'recent' ?
      this.state.dataRecent.data : this.state.dataAllTime.data;

    return (
      <Leaderboard isLoading={isLoading} data={data} onChangeView={this.handleChangeView} />
    )
  }
}

export default LeaderboardContainer;
