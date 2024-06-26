import { useContext, useState } from "react";
import "tailwindcss/tailwind.css";
import debug from "debug";
import { register } from "../../utils/services/auth";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

const log = debug("mern:AuthPages:Register");

export default function Register() {
  const { setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    log("registerUser: %o", userInfo);
    const formData = { ...userInfo }; //create shallow copy
    log("formData: %o", formData);
    delete formData.error; // remove unnecassary info //--> db

    try {
      const user = await register(formData);
      log("user: %o", user);

      if (user.error) {
        toast.error(user.error);
      } else {
        setAuthUser(user); //update state with new user
        toast.success("Registration successful!");
        // navigate(`/dashboard`); //redundant line

        //enabling property--> add review --> login --> register --> add review OR dashboard
        const from = sessionStorage.getItem("from"); //get stored destination

        if (from && from.includes("reviews")) {
          sessionStorage.removeItem("from"); // clear stored destination after retrieval
          navigate(`${from}/new`); // redirect to the intended destination
        } else {
          navigate(`/dashboard`);
        }
      }
    } catch (error) {
      setUserInfo({ ...userInfo, error: "Registration Failed" });
      toast.error(
        "Registration unsuccessful! You may already have an account registered."
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="public/images/logo/icons8-real-estate-96.png"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Become a NestOpinion Member
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action=""
            method="POST"
            onSubmit={registerUser}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={userInfo.username}
                  onChange={handleChange}
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={userInfo.email}
                  onChange={handleChange}
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  minLength={3}
                  autoComplete="current-password"
                  required
                  value={userInfo.password}
                  onChange={handleChange}
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
