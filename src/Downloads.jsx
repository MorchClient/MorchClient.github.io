/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Header from "./comp/Header";
import './Downloads.css';

function Downloads() {
    const versions = {
        "1.8.8": {
            versions: ["0.0.2", "0.0.1"],
            links: ["https://mega.nz/file/cj0nHBIA", "https://mega.nz/file/YmcxEJaQ"],
            isMega: true,
            keys: [
                "9DjIfMWM1DggIBfk1D9QchlaY4Tua7yRRZjL9UxUv2o",
                "ZVbCdstmZbMm4vRztWn44QaQMllThpfcyLp52YOxUWw",
            ],
        },
    };

    return (
        <>
            <Header />
            <h1>Downloads</h1>
            <div id="downloads">
                {Object.entries(versions).map(([version, data]) => (
                    <Version key={version} version={version} data={data} />
                ))}
            </div>
        </>
    );
}

function Version({ version, data }) {
    return (
        <div className="version-container">
            <h2>{`Minecraft ${version}`}</h2>
            <ul>
                {data.versions.map((v, index) => (
                    <li key={v}>
                        <span>{`v${v}: `}</span>
                        {data.isMega ? (
                            <Link
                                to={data.links[index] + data.keys[index]}>
                                <button>Download</button>
                            </Link>
                        ) : (
                            <Link
                                to={data.links[index]}>
                                <button>
                                    <a href={data.links[index]} download>
                                        Download
                                    </a>
                                </button>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Downloads;
