import { forwardRef , useImperativeHandle, useRef} from "react";
import { createPortal } from "react-dom";


//komponenta koju ćemo renderati nakon pogrešnog unosa korisnika (ukoliko je unos prazan)
const Modal = forwardRef(function Modal ({children}, ref) {

    //koristimo kako bi koristili built in metodu na refu 
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    const dialog = useRef();
    return createPortal(
        <dialog ref={dialog}>
            {/*prebacujemo tekst iz komponenti u kojima će biti pozvan Modal*/}
            {children}
            <form method="dialog">
                {/*posebna mogućnost gdje će se u modalu pojaviti gumb za zatvaranje*/}
                <button>Close</button>
            </form>
        </dialog> , document.getElementById("root")
    )
})

export default Modal;
