import { ReactNode } from "react"

type TextProps = {
    children: ReactNode;
}

export const TextPrimary: React.FC<TextProps> = ({ children }) => <p className="color-[#747474] text-[14px] md:text-[16px] font-semibold">{ children }</p>

export const TextSecondary: React.FC<TextProps> = ({ children }) => <p className="color-[#747474] text-[12px] md:text-[14px] font-semibold">{ children }</p>

export const TextTertiary: React.FC<TextProps> = ({ children }) => <p className="color-[#747474] text-[10px] md:text-[12px] font-semibold">{ children }</p>