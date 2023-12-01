import {useEffect, useRef} from "react";

export default function Modal( {children, open, className = ''} ){
    const dialog = useRef();

    useEffect(()=>{
        const modal = dialog.current;
        if(open) {
            modal.showModal();
        }
        return ()=> dialog.current.close();////?? 这里不是很清楚
    },[open]);

    return (
        <dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>
    );
}