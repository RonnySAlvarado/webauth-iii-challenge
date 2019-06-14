import React from "react";
import axiosToken from "./helpers/axiosToken";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    department: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { department, username, password } = this.state;
      const result = await axiosToken.post("/auth/register", {
        username,
        password,
        department
      });
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
        <h3>Signup</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="department"
            placeholder="Department"
            onChange={this.handleChange}
            value={this.state.department}
          />
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

          <button type="submit">Sign Up</button>
        </form>
      </>
    );
  }
}

export default Signup;
