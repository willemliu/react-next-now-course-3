import { useState, useEffect } from "react";

interface Props {
    className?: string;
    text: string;
    [p: string]: any;
}

export default ({ text, className, style }: Props) => {
    const [clickCount, setClickCount] = useState(0);
    const [currentText, setCurrentText] = useState(text);
    const handleClick = () => {
        setClickCount(clickCount + 1);
    };

    useEffect(() => {
        if (clickCount) {
            setCurrentText(`You clicked me! ${clickCount} times!`);
        }
    }, [clickCount]);

    return (
        <p style={style} className={className} onClick={handleClick}>
            {currentText}
        </p>
    );
};
