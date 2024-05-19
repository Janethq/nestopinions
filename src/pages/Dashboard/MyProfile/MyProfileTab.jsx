import AcctInfoSection from "./AcctInfoSection";
import UpdatePwSection from "./UpdatePwSection";
import DeleteAcctSection from "./DeleteAcctSection";

const MyProfileTab = ({ email, username }) => {
  return (
    <div>
      <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold text-gray-900">
          Profile Settings
        </h1>
      </div>
      <hr className="mt-4 mb-8" />
      <AcctInfoSection email={email} username={username} />
      <hr className="mt-4 mb-8" />
      <UpdatePwSection />
      <hr className="mt-4 mb-8" />
      <DeleteAcctSection />
    </div>
  );
};

export default MyProfileTab;
