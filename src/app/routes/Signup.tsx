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



function Signup() {
  const [email, setEmail] = useState<string>();
  const accountTypes = ["Market", "Buyer"];
  const hello = () => alert("hello")

  return (
    <main className="mx-5 px-5 py-5">
      <HeaderSecondary css="text-center">Sign Up</HeaderSecondary>
        <div className="flex flex-col mt-5 gap-y-5">
          <InputText labelText="First Name" placeholder="Paddington " />
          <InputText labelText="Last Name" placeholder="Brown " />
          <InputEmail labelText="Email" />
          <InputPassword labelText="Password" />

          <InputDropdown options={accountTypes} labelText="Account Type" />

          <InputRadio
            labelText="I agree to the terms and conditions."
            isRequired={true}
          />
        </div>
        <div className="mt-1 flex flex-col gap-y-2 items-center">
            <Button label="Sign up" callBack={hello}/>
            <TextSecondary>Have an account? <Link to="/login"><span className="text-slate-600 hover:text-green-700 underline">Login</span></Link></TextSecondary>
        </div>

    </main>
  );
}

export default Signup;
