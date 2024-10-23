import { Link } from 'react-router-dom';

import blocks from '../assets/jpg/blocks.jpg'

function Welcome()
{
    return (
        <main className="mx-5 px-5 py-5">
            <h1 className="text-center text-2xl font-bold tracking-wide">Open your individual brokerage account</h1>
<div className="flex items-center justify-center">
<img src={blocks} alt="Building blocks." className="w-screen  md:h-[20vh] md:w-max" />
</div>
            <div className="flex flex-col items-center md:items-start mt-5">

                <p className="mt-3">Sunnah Vest will help you open an individual brokerage account and add money to the account. Users will need money in order to begin investing</p>

                <div className="mt-3">
                    <h3 className="font-semibold text-xl">Why a brokerage account?</h3>
                    <p className='mt-1'>A brokerage account will allow users to be able to buy and sell stocks, mutual funds, and other investments. Users can also plan for long term goals including retirement, college, and large expenses. </p>
                </div>

                <div className="mt-3">
                    <h3 className="font-semibold text-xl">How can I open an account?</h3>
                    <p className='mt-1'>Users can open a brokerage account as needed, no money needed.</p>
                </div>

                <div className="mt-3">
                    <h3 className="font-semibold text-xl">What data does Sunnah Vest need?</h3>
                    <p className='mt-1'>In order to open a brokerage account, users will need to provide the following documentation:</p>
                    <ol className="flex flex-col gap-y-1">
                        <li>
                            <span className="text-xl font-bold">1. </span>
                             Email address and mobile number</li>
                        <li>
                        <span className="text-xl font-bold">2. </span>
                             Social Security and/or Tax Identification Number</li>
                        <li>
                        <span className="text-xl font-bold">3. </span>
                         Employer's name and mailing address</li>
                    </ol>
                </div>
                <div className="text-center mt-6 w-full">
                <Link to="/signup">
        <button className="bg-green-700 hover:bg-green-800 px-5 text-white py-2">
          Get Started
        </button>
        </Link>
        <p className="text-slate-600 text-sm mt-2">Have an account? <Link to="/login"> <span className="underline hover:text-slate-800">Log In</span> </Link></p>
                </div>

            </div>
        </main>
    )
}

export default Welcome;