import { ReactNode } from "react"

type TextProps = {
    children: ReactNode;
    css?: string;
}

export const TextPrimary: React.FC<TextProps> = ({ children, css }) => <p className={"color-[#747474] text-[14px] md:text-[16px] font-semibold " + css }>{ children }</p>

export const TextSecondary: React.FC<TextProps> = ({ children, css }) => <p className={"color-[#747474] text-[12px] md:text-[14px] font-semibold " + css }>{ children }</p>

export const TextTertiary: React.FC<TextProps> = ({ children, css }) => <p className={"color-[#747474] text-[10px] md:text-[12px] font-semibold " + css }>{ children }</p>