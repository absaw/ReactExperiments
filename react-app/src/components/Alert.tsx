import { Children, ReactNode } from "react";

interface AlertProp {
    children: ReactNode;
    onClose:()=>void;
    // alertShow: 'fade'|'show';
}
function Alert({children, onClose} : AlertProp) {
    return (
        <div className="alert alert-primary alert-dismissible" role="alert">
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
        </div>
    );
}
export default Alert;