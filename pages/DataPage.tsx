import "fetch-everywhere";
import { useState } from "react";
import { Data } from "../components/Data";
import { Header } from "../components/Header";

function DataPage({ serverSideData }: any) {
    const [color, setColor] = useState("orange");

    const handleClick = () => {
        if (color == "orange") {
            setColor("green");
        } else {
            setColor("orange");
        }
    };

    return (
        <>
            <Header />
            <div onClick={handleClick}>
                {serverSideData ? (
                    <textarea
                        value={JSON.stringify(serverSideData, null, 2)}
                        disabled={true}
                    />
                ) : null}
                <Data />
                <style jsx>{`
                    textarea {
                        color: ${color};
                        width: 100%;
                        height: 200px;
                        font-weight: bold;
                    }
                `}</style>
            </div>
        </>
    );
}

DataPage.getInitialProps = async () => {
    const serverSideData = await fetch(
        "https://xz4on0khc6.execute-api.eu-west-1.amazonaws.com/prod"
    ).then((res) => res.json());
    return { serverSideData };
};

export default DataPage;
