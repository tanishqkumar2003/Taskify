import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        username,
        firstName,
        lastName,
        password
      });

      localStorage.setItem("token", response.data.token);
      if (localStorage.length > 0) {
        navigate("/todos");
      } else {
        alert("Invalid inputs. Try again");
        console.log("Token not set in local storage.");
      }
    } catch (error) {
      alert("Invalid inputs. Please try again.");
      console.error("Sign-up error:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-screen flex items-center justify-center">
      <div className="rounded-lg shadow-lg bg-white w-96 p-6">
        <div className="text-center">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
        </div>

        <InputBox
          onChange={e => setFirstName(e.target.value)}
          placeholder="John"
          label={"First Name"}
        />

        <InputBox
          onChange={e => setLastName(e.target.value)}
          placeholder="Doe"
          label={"Last Name"}
        />

        <InputBox
          onChange={e => setUsername(e.target.value)}
          placeholder="abc@example.com"
          label={"Email"}
        />

        <InputBox
          onChange={e => setPassword(e.target.value)}
          placeholder="123456"
          label={"Password"}
        />

        <div className="pt-4">
          <Button
            onClick={handleSignUp}
            label={"Sign up"}
          />
        </div>

        <BottomWarning
          label={"Already have an account?"}
          buttonText={"Sign in"}
          to={"/signin"}
        />
      </div>
    </div>
  );
};
