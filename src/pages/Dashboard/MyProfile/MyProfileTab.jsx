import AcctInfoSection from "./AcctInfoSection";
import UpdatePwSection from "./UpdatePwSection";
import DeleteAcctSection from "./DeleteAcctSection";

const MyProfileTab = ({ email, username }) => {
  return (
    <div>
      <AcctInfoSection email={email} username={username} />
      <hr className="mt-4 mb-8" />
      <UpdatePwSection />
      <hr className="mt-4 mb-8" />
      <DeleteAcctSection />
    </div>
  );
};

export default MyProfileTab;
