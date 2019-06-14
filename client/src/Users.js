import React from "react";
import axiosInstance from "./helpers/axiosToken";
import { withRouter } from "react-router-dom";

class Users extends React.Component {
  state = {
    users: []
  };
  async componentDidMount() {
    try {
      const result = await axiosInstance.get("/users");
      this.setState({ users: result.data });
      console.log(result);
    } catch (err) {
      console.error(err);
      if (err.response.status === 401 || err.response.status === 403) {
        this.props.history.push("/login");
      } else {
        console.error(err);
      }
    }
  }
  render() {
    return (
      <>
        <h3>Users</h3>
        <ul>
          {this.state.users.map((user, i) => {
            return <li key={i}>{user.username}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default withRouter(Users);
