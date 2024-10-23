import { Link } from "react-router-dom";


function Signup() {
  return (
    <main className="mx-5 px-5 py-5">
      <div className="flex gap-x-2">
        <div className="bg-green-700 text-white px-5 py-1">
          <p>Personal</p>
        </div>
        <div className="bg-slate-200 text-white px-5 py-1">
          <p>Regulatory</p>
        </div>
        <div className="bg-slate-200 text-white px-5 py-1">
          <p>Features</p>
        </div>
        <div className="bg-slate-200 text-white px-5 py-1 ">
          <p>Review</p>
        </div>
        <div className=" bg-slate-200 text-white px-5 py-1">
          <p>Agreements</p>
        </div>
      </div>

      <section className="mt-5">
        <h2 className="text-3xl tracking-widest">Who's opening the account?</h2>
        <p className="mt-5">Tell us a little about yourself.</p>
      </section>

      <section className="mt-6">
        <h3 className="text-xl font-bold">Personal Information</h3>

            <div className="mt-5 flex flex-col">
                <label htmlFor="">First Name</label>
                <input type="text" className="mt-2 border border-slate-700 px-1 py-2" />
            </div>

            <div className="mt-5 flex flex-col">
                <label htmlFor="">Last Name</label>
                <input type="text" className="mt-2 border border-slate-700 px-1 py-2" />
            </div>

            <div className="mt-5 flex flex-col">
                <label htmlFor="">Middle Name</label>
                <input type="text" className="mt-2 border border-slate-700 px-1 py-2" />
            </div>

            <div className="mt-5 flex flex-col">
                <label htmlFor="">Date of birth</label>
                <input type="date" className="mt-2 border border-slate-700 px-1 py-2" />
            </div>

            <div className="mt-5 flex flex-col">
                <label htmlFor="" className="font-semibold">Is your current home address in the United States, Peurto Rico, or the Virgin Islands? </label>
                <div className="mt-2 flex flex-row gap-x-2">
                <input type="radio" className="" />
<label htmlFor="">Yes</label>
                </div>

                <div className="flex flex-row gap-x-2">
                <input type="radio" className="" />
<label htmlFor="">No</label>
                </div>

            </div>

            <div className="mt-5 flex flex-col">
                <label htmlFor="">Social Security Number</label>
                <input type="password" className="mt-2 border border-slate-700 px-1 py-2" />
                <p className="text-slate-600 text-xs mt-1">All brokerage firms require this information for new accounts.</p>
            </div>

      </section>

      <section className="mt-6">
        <h3 className="text-xl font-bold">Contact Information</h3>

            <div className="mt-5 flex flex-col">
                <label htmlFor="">Email</label>
                <input type="text" className="mt-2 border border-slate-700 px-1 py-2" />
            </div>

            <div className="mt-5 flex flex-col">
                <label htmlFor="">Mobile Phone Number</label>
                <input type="number" className="mt-2 border border-slate-700 px-1 py-2" />
            </div>

<p className="text-slate-600 text-xs">To learn how your personal information may be used and how you may limit certain use, read Sunnah Vest's <Link to="/">Privacy Notice</Link>.</p>
            </section>

            <section className="mt-5 flex justify-end gap-x-5">
            <Link to="/signup">
        <button className="bg-slate-300 hover:bg-slate-400 px-5 py-2">
          Go Back
        </button></Link>
            <Link to="/signup">
        <button className="bg-green-700 hover:bg-green-800 px-5 text-white py-2">
          Continue
        </button></Link>
            </section>
    </main>
  );
}

export default Signup;
