import { Component } from "react";
import "./signin.css";
import logo from "../CodeGym-Logo.webp";

class SignIn extends Component {
  render() {
    return (
      <div
        className="d-flex align-items-center py-4 bg-body-tertiary"
        style={{ height: "100vh" }}
      >
        <main className="form-signin w-100 m-auto">
          <form>
            <div className="text-center">
              <img className="mb-4" src={logo} alt="" width="100" />
            </div>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
          </form>
        </main>
      </div>
    );
  }
}

export default SignIn;
