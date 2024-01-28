import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const RegisterScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen select-none" >
      <div className="rounded-2xl shadow-2xl p-16 w-1/3" >
        <h2 className="text-3xl font-SingleDay font-semibold mb-8 select-none">Sign Up </h2>
        <Input
          type="email"
          placeholder="Email"
          style={inputStyle}
        />
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            style={inputStyle}
          />
          <span
            style={iconStyle}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <Button className="w-1/2 p-5 bg-indigo-700 text-white border-none rounded-xl cursor-pointer transition duration-500 ease-in-out hover:bg-indigo-900">Register</Button>
      </div>
    </div>
  );
};

const iconStyle = {
  position: "absolute",
  top: "50%",
  right: "10px",
  transform: "translateY(-50%)",
  cursor: "pointer",
};

const inputStyle = {
  width: "100%",
  padding: "20px",
  margin: "30px 0",
  borderRadius: "10px",
  border: "2px solid #474F7A",
};


export default RegisterScreen;
