import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../Contexts/AuthContext";
import axios from "axios";

const Login = () => {
  const { LoginWithEmailPass, GoogleRegister } = useContext(MyContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    LoginWithEmailPass(email, password)
      .then((result) => {
        const logedUser = result.user.email;
        console.log(logedUser);
        const user = { email };
        //  **getAccess token
        // axios
        //   .post("http://localhost:3000/jwt", user, { withCredentials: true })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.data.success) {
        //       navigate(location?.state ? location?.state : "/");
        //     }
        //   })
        //   .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleGoogleLogin = () => {
    GoogleRegister()
      .then((res) => {
         console.log(res.user)
         const email = res.user.email
         const user = {email}
        // axios
        //   .post("http://localhost:3000/jwt", user, {
        //     withCredentials: true,
        //   })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.data.success) {
        //       navigate(location?.state ? location?.state : "/");
        //     }
        //   })
        //   .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Have not a account? Register
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <div className="mx-auto">
            <div className="my-4">
              <button onClick={handleGoogleLogin} className="btn btn-outline">
                SignIn with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
