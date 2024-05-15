import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "tailwindcss/tailwind.css";

export default function AuthPage({ setUser }) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <LoginForm setUser={setUser} />
      <SignUpForm setUser={setUser} />
    </>
  );
}
