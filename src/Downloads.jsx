/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './comp/Header';
import './Downloads.css';

function Downloads() {
  const [versions, setVersions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/MorchClient/resources/json/installer.json', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        });
        const data = await response.json();
        setVersions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        return (
          <>
            <Header />
            {error}
          </>
        )
      }
    };
    fetchData();
  });
  if (!versions) {
    return (
      <>
        <Header />
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <Header />
      <h1>Downloads</h1>
      <div id="downloads">
        <div id="downloads-client">
          <h1>Client</h1><br />
          <div className='versions'>
            {Object.entries(versions.client).map(([version, data]) => (
              <Version key={version} version={version} data={data} />
            ))}
          </div>
        </div>
        <div id="downloads-installer">
          <h1>Installer</h1><br />
          <div className='versions'>
            <div className="version-container">
              <h2>Installer v{Object.keys(versions.installer)[0]}</h2>
              {Object.entries(versions.installer).map(([version, data]) => (
                <Installer key={version} version={version} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Installer({ version, data }) {
  if (data.released) {
    return (
      <ul>
        <span>{`v${version}: `}</span>
        {data.isMega ? (
          <Link to={data.link[0] + "#" + data.key[0]}>
            <button>Download</button>
          </Link>
        ) : (
          <Link to={data.links[0]}>
            <button>
              <a href={data.links[0]} download>
                Download
              </a>
            </button>
          </Link>
        )}
      </ul>
    )
  } else {
    return (
      <ul>
        <span>{`v${version}: `}</span>
        <button>Coming soon!</button>
      </ul>
    )
  }
}

function Version({ version, data }) {
  if (data.released) {
    return (
      <div className="version-container">
        <h2>{`Minecraft ${version}`}</h2>
        <ul>
          {data.versions.map((v, index) => (
            <li key={v}>
              <span>{`v${v}: `}</span>
              {data.isMega ? (
                <Link to={data.links[index] + "#" + data.keys[index]}>
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
    )
  } else {
    return (
      <>
        <div className="version-container">
          <h2>{`Minecraft ${version}`}</h2>
          <ul>
            {data.versions.map((v) => (
              <li key={v}>
                <span>{`v${v}: `}</span>
                <button>Coming soon!</button>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default Downloads;
