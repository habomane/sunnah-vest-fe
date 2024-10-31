import { Link } from "react-router-dom";
import { TextPrimary } from "../typography/Text";

type LinkButtonProps = {
    label: string;
    link: string;
    callBack: () => void;
}

type ButtonProps = {
    label: string;
    callBack: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, callBack}) => {
    
    return (
        <button
        className="py-2 px-6 bg-green-800 text-gray-100 hover:bg-green-400 hover:text-gray-700"
        onClick={callBack}
        >
            <TextPrimary>{label}</TextPrimary>
        </button>
    )
}

export const LinkButton: React.FC<LinkButtonProps> = ({ label, callBack, link}) => {
    
    return (
        <Link to={link}>
        <button
        className="py-2 px-6 bg-green-800 text-gray-100 hover:bg-green-400 hover:text-gray-700"
        onClick={callBack}
        >
            {label}
        </button></Link>
    )
}