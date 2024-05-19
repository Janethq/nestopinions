const UpdatePwSection = () => {
  return (
    <>
      <p className="py-2 text-xl font-semibold text-gray-900">
        Update Password
      </p>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-4 sm:space-y-0">
          <label htmlFor="current-password" className="flex-grow">
            <span className="text-sm text-gray-500">Current Password</span>
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="password"
                id="current-password"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="***********"
              />
            </div>
          </label>
          <label htmlFor="new-password" className="flex-grow">
            <span className="text-sm text-gray-500">New Password</span>
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="password"
                id="new-password"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="***********"
              />
            </div>
          </label>
        </div>
        <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white">
          Save Password
        </button>
      </div>
    </>
  );
};
export default UpdatePwSection;
