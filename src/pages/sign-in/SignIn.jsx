import { Link } from "react-router-dom";
import "./signIn.scss";

export function SignIn() {
  return (
    <section className="sign-in">
      <div className="container">
        <div className="sign-in__wrapper">
          <h5>Sign In</h5>

          <form className="sign-in__form" action="#">
            <div className="sign-in__form-inputs">
              <input
                className="sign-in__form-input"
                type="email"
                placeholder="Email"
              />
              <input
                className="sign-in__form-input"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="sign-in__form-additional">
              <div className="sign-in__form-checkbox">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>

              <Link>
                <p>Forget Password</p>
              </Link>
            </div>
          </form>

          <button className="button">Login</button>

          <p className="sign-in__additional">
            Don’t have account? <Link to="/signUp">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
