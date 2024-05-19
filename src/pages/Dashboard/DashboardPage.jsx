import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import MyProfileTab from "./MyProfile/MyProfileTab";

const DashboardPage = () => {
  const { authUser } = useContext(AuthContext);

  return (
    <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
      <h1 className="border-b py-6 text-4xl font-semibold text-gray-900">
        My Dashboard
      </h1>
      <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
        <div className="relative my-4 w-56 sm:hidden">
          <input
            className="peer hidden"
            type="checkbox"
            name="select-1"
            id="select-1"
          />
          <label
            htmlFor="select-1"
            className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
          >
            Profile
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
            <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-red-300 hover:text-gray">
              My Reviews
            </li>
          </ul>
        </div>

        <div className="col-span-2 hidden sm:block">
          <ul>
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold text-indigo-600 transition hover:border-l-indigo-800 hover:text-indigo-800">
              My Reviews
            </li>
            <li className="mt-5 cursor-pointer border-l-2 border-l-indigo-600 px-2 py-2 font-semibold text-indigo-600 transition hover:border-l-indigo-800 hover:text-indigo-800">
              My Profile
            </li>
          </ul>
        </div>

        <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
          <div className="pt-4">
            <h1 className="py-2 text-2xl font-semibold text-gray-900">
              Profile Settings
            </h1>
          </div>
          <MyProfileTab email={authUser.email} username={authUser.username} />
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
