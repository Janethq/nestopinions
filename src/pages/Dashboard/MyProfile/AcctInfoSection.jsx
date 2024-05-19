const AcctInfoSection = ({ email, username }) => {
  return (
    <>
      <p className="py-2 text-xl font-semibold text-gray-900">
        Account Information
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-gray-600">
          Your email address is <strong>{email}</strong>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-gray-600">
          Your username is <strong>{username}</strong>
        </p>
        <button className="inline-flex text-sm font-semibold text-indigo-600 underline decoration-2">
          Change username
        </button>
      </div>
    </>
  );
};

export default AcctInfoSection;
