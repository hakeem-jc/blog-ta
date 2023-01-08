import { FC } from "react";
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    shape: string;
    color?: string;
    onClick?: () => void;
}

const Button:FC<ButtonProps> = (props) => {

    const setClass = (props:ButtonProps) => {
        let class_names = 'button';

        if (props.shape === 'circle') {
            class_names = class_names.concat(' button--circle');
        }

        if (props.color) {
            if (props.color === 'red') {
                class_names = class_names.concat(' button--red');
            }
        }
       
        return class_names;
    }

    return (<button 
                className={setClass(props)}
                type={props.type} onClick={props.onClick}>{props.text}</button>
    );
}

export default Button;