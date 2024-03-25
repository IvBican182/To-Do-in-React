import { forwardRef } from "react";
import InputCSS from "./Input.module.css";

const Input = forwardRef(function Input ({ label, textarea, ...props }, ref) {
    return (
        <p>
            <label className={InputCSS.label}>{label}</label>
            {textarea ? <textarea className={InputCSS.input} ref={ref} {...props}/> : <input className={InputCSS.input} ref={ref} {...props}/>}
        </p>
    )
});

export default Input;