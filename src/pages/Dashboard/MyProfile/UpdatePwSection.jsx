import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePwSection = ({ currPw, setCurrPw, newPw, setNewPw }) => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleUpdatePw = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // retrieve token from local storage
      const response = await fetch("/api/users/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // using old JWT for authorization
        },
        body: JSON.stringify({
          userId: `${userId}`, // Replace with the actual user ID
          currentPassword: currPw, // Use currPw state value
          newPassword: newPw, // Use newPw state value
        }),
      });
      // eslint-disable-next-line no-unused-vars
      const data = await response.json();
      if (response.ok) {
        // Password update successful
        localStorage.removeItem("token"); // remove old JWT from local storage cos would cause auth issues
        // Redirect to login page or handle success message
        toast.success("Password updated successfully. Required to re-login.");
        navigate("/login");
      } else {
        // Password update failed, handle error
        toast.error("Failed to update password");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      // Handle network or server errors
      toast.error("Failed to update password due to server error");
    }
  };

  return (
    <form onSubmit={handleUpdatePw}>
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
                value={currPw}
                onChange={(e) => setCurrPw(e.target.value)}
                required
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
                value={newPw}
                onChange={(e) => setNewPw(e.target.value)}
                required
              />
            </div>
          </label>
        </div>
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
        >
          Save Password
        </button>
      </div>
    </form>
  );
};

export default UpdatePwSection;
