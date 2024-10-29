import { Link } from "react-router-dom";
import { TextPrimary, TextSecondary } from "../typography/Text";

export const Footer: React.FC = () => {
    return (
      <footer className=" bg-slate-100 py-2">
        <div className="mx-5 px-5 py-3  text-md font-medium flex flex-col gap-y-2 md:flex-row md:justify-between">
        <div className="flex flex-col items-left">
          <TextPrimary> <span className="font-bold">Sunnah</span> <span className="font-bold text-[#dec535]">Vest</span>
          </TextPrimary>
        <TextSecondary>Copyright 2024</TextSecondary>
        <TextSecondary>All Rights Reserved</TextSecondary>
        </div>

        <div className="flex flex-col items-left">
        <Link to="/"><TextSecondary><span className="hover:text-[#685e21b5]">Privacy</span></TextSecondary></Link>
        <Link to="/"><TextSecondary><span className="hover:text-[#685e21b5]">Terms of Use</span></TextSecondary></Link>
        <Link to="/"><TextSecondary><span className="hover:text-[#685e21b5]">Security</span></TextSecondary></Link>
        </div>
        </div>

        
      </footer>
    );
  }
  
  