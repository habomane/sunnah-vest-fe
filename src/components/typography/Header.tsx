import { ReactNode } from "react"

type HeaderProps = {
    children: ReactNode;
}

export const HeaderPrimary: React.FC<HeaderProps> = ({children})  => <h1 className="color-[#2d2d2d] text-[36px] md:text-[42px] font-bold">{children}</h1>

export const HeaderSecondary: React.FC<HeaderProps> = ({ children }) => <h2 className="color-[#747474] text-[30px] md:text-[34px] font-bold">{children}</h2>;

export const HeaderTertiary: React.FC<HeaderProps> = ({ children }) => <h3 className="color-[#747474] text-[26px] md:text-[30px] font-bold">{children}</h3>