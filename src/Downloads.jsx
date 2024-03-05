/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './comp/Header';
import './Downloads.css';

function Downloads() {
  const [versions, setVersions] = useState(null);

  useEffect(() => {
    fetch('https://morchclient.github.io/api/installer.json')
      .then(response => response.json())
      .then(data => setVersions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!versions) {
    return (
    <>
      <Header/>
      <div>Loading...</div>
    </>
    );
  }

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
              <Link to={data.links[index] +"#"+ data.keys[index]}>
                <button>Download</button>
              </Link>
            ) : (
              <Link to={data.links[index]}>
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
