import { forwardRef } from "react";
import InputCSS from "./Input.module.css";

const Input = forwardRef(function Input ({ label, textarea, ...props }, ref) {
    return (
        <p className={InputCSS.input}>
            <label className={InputCSS.label}>{label}</label>
            {textarea ? <textarea ref={ref} {...props}/> : <input ref={ref} {...props}/>}
        </p>
    )
});

export default Input;