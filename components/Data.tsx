import "fetch-everywhere";
import { useState, useEffect } from "react";

function Data() {
    const [color, setColor] = useState("red");
    const [clientSideData, setClientSideData] = useState(null);

    const handleClick = () => {
        if (color == "red") {
            setColor("blue");
        } else {
            setColor("red");
        }
    };

    useEffect(() => {
        fetch("https://xz4on0khc6.execute-api.eu-west-1.amazonaws.com/prod")
            .then((res) => res.json())
            .then((json) => {
                setClientSideData(json);
            });
    }, []);

    return (
        <div onClick={handleClick}>
            {clientSideData ? (
                <textarea
                    value={JSON.stringify(clientSideData, null, 2)}
                    disabled={true}
                />
            ) : null}
            <style jsx>{`
                textarea {
                    color: ${color};
                    width: 100%;
                    height: 200px;
                }
            `}</style>
        </div>
    );
}

export { Data };
