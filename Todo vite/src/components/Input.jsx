import InputCSS from "./Input.module.css";

export default function Input ({ label, textarea }) {
    return (
        <p>
            <label>{label}</label>
            {textarea ? <textarea></textarea> : <input></input>}
        </p>
    )
}