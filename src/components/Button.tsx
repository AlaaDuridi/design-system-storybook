import React from 'react';
import './Button.css';

export interface ButtonProps {
    variant: 'primary' | 'secondary' | 'text';
    size: 'small' | 'medium' | 'large';
    color: 'red' | 'blue' | 'green';
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, size, color, children, onClick }) => {
    return (
        <button
            className={`button ${variant} ${size} ${color}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
