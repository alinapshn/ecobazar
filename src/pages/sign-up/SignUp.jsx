import { Link } from "react-router-dom";
import "./signUp.scss";

export function SignUp() {
  return (
    <section className="sign-up">
      <div className="container">
        <div className="sign-up__wrapper">
          <h5>Create Account</h5>

          <form className="sign-up__form" action="#">
            <div className="sign-up__form-inputs">
              <input
                className="sign-up__form-input"
                type="email"
                placeholder="Email"
              />
              <input
                className="sign-up__form-input"
                type="password"
                placeholder="Password"
              />
              <input
                className="sign-up__form-input"
                type="password"
                placeholder="Confirm Password"
              />
            </div>

            <div className="sign-up__form-checkbox">
              <input type="checkbox" />
              <p>Accept all terms & Conditions</p>
            </div>
          </form>

          <button className="button">Create Account</button>

          <p className="sign-up__additional">
            Already have account? <Link to="/signIn"> Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
