import React from "react";
import { withRouter } from "react-router-dom";
import axiosToken from "./helpers/axiosToken";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { username, password } = this.state;
      const result = await axiosToken.post("/auth/login", {
        username,
        password
      });
      localStorage.setItem("token", result.data.token);
      this.props.history.push("/users");
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <>
        <h3>Login</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />

          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default withRouter(Login);
