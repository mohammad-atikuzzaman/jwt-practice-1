import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Contexts/AuthContext";

const Nav = () => {
  const { user, LogOut, loading } = useContext(MyContext);
  // console.log(user)

  const handleLogOut = () => {
    LogOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <div className="flex justify-center items-center   mr-6">
            <span className="loading loading-bars loading-sm"></span>
          </div>
        ) : (
          <div>
            {user ? (
              <div className="flex items-center">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL ? user.photoURL : "err"}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <a className="justify-between">
                       {user?.displayName}
                      </a>
                    </li>
                    <li>
                      <a>{user?.email}</a>
                    </li>
                    <li>
                      <button onClick={handleLogOut}>Logout</button>
                    </li>
                  </ul>
                </div>
                <button onClick={handleLogOut} className="btn btn-outline">
                  Log Out
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn">
                Accoutnts
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
