import { ReactNode } from "react";

interface ButtonProp {
    children: ReactNode;
    onClick:()=>void;
    color?: 'primary'|'secondary';
}
function Button({children, onClick, color}: ButtonProp){
    return (
        <button type="button" className={"btn btn-" + color } onClick = {onClick}>
            {children}
        </button>
    );

}

export default Button;