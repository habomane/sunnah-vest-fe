import { Button } from "@/components/button/Button";
import {
  InputDropdown,
  InputEmail,
  InputPassword,
  InputRadio,
  InputText,
} from "@/components/form/Input";
import { HeaderSecondary } from "@/components/typography/Header";
import { TextSecondary } from "@/components/typography/Text";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState<string>();
  const accountTypes = ["Market", "Buyer"];
  const hello = () => alert("hello")

  return (
    <main className="mx-5 px-5 py-5">
      <HeaderSecondary css="text-center">Login</HeaderSecondary>
        <div className="flex flex-col mt-5 gap-y-5">
          <InputEmail labelText="Email" />
          <InputPassword labelText="Password" />
        </div>
        <div className="mt-5 flex flex-col gap-y-2 items-center">
            <Button label="Login" callBack={hello}/>
            <TextSecondary>Don't have an account? <Link to="/signup"><span className="text-slate-600 hover:text-green-700 underline">Sign up</span></Link></TextSecondary>
        </div>

        

    </main>
  );
}

export default Login;
