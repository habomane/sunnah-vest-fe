import { ReactNode } from "react"

type HeaderProps = {
    css?: string;
    children: ReactNode;
}

export const HeaderPrimary: React.FC<HeaderProps> = ({children, css})  => <h1 className={"color-[#2d2d2d] text-[36px] md:text-[42px] font-bold " + css }>{children}</h1>

export const HeaderSecondary: React.FC<HeaderProps> = ({ children, css }) => <h2 className={"color-[#747474] text-[30px] md:text-[34px] font-bold " + css }>{children}</h2>;

export const HeaderTertiary: React.FC<HeaderProps> = ({ children, css }) => <h3 className={"color-[#747474] text-[26px] md:text-[30px] font-bold " + css }>{children}</h3>