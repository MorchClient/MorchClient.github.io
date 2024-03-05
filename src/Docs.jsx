/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Header from './comp/Header';
import './Docs.css';
import './else/highlight.css';
import Highlight from 'react-highlight';

function Docs() {
  const [versions, setVersions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://morchclient.github.io/api/docs.json');
        const data = await response.json();
        setVersions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        return (
          <>
            <Header/>
            {error}
          </>
        )
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !versions) {
    return (
      <>
        <Header />
        <div>Loading...</div>
      </>
    );
  }

  const json = versions;
  return (
    <>
      <Header />
      <h1>Docs</h1>
      <div id="docs">
        <h1>Tutorials</h1>
        <TutorList className="How to run Morch (MultiMC)" />
        <TutorList className="How to run Morch (TLauncher)" />
        <h1>API</h1>
        <ClassList className="console" />
        <ClassList className="playerinv" />
        <ClassList className="player" />
        <ClassList className="chat" />
        <ClassList className="font" />
        <ClassList className="vars" />
        <ClassList className="client" />
        <h1>Tutorials</h1>
        <TutorDocumentation className="How to run Morch (MultiMC)" />
        <TutorDocumentation className="How to run Morch (TLauncher)" />
        <h1>API</h1>
        <ClassDocumentation className="console" />
        <ClassDocumentation className="playerinv" />
        <ClassDocumentation className="player" />
        <ClassDocumentation className="chat" />
        <ClassDocumentation className="font" />
        <ClassDocumentation className="vars" />
        <ClassDocumentation className="client" />
      </div>
    </>
  );

  function TutorList({ className }) {
    const tutorMethods = getTutorMethods(className);
    return (
      <div>
        <li>
          <Link to={`/docs#${className}`}>
            <code id={className + 'tree'} className="tu">
              {className}
            </code>
          </Link>
        </li>
        {tutorMethods.map((method, index) => (
          <li key={index} className="sub">
            <Link to={`/docs#${className + method}`}>
              <code className="tu" id={className + method + 'tree'}>
                {method}
              </code>
            </Link>
          </li>
        ))}
      </div>
    );
  }

  function getTutor(className, { id }) {
    const classMethodData = {
      "How to run Morch (MultiMC)": {
        Prerequisites: (
          <>
            <p>You need to have:</p>
            <ul>
              <li>
                <Link to="../downloads">Downloaded</Link> the latest version of Morch
              </li>
              <li>
                <a href="https://www.oracle.com/java/technologies/downloads/">Java</a> 20 or higher
              </li>
              <li>
                <a href="https://multimc.org/#Download">MultiMC</a> (Prism launcher also works)
              </li>
            </ul>
          </>
        ),
        'Setting up an Minecraft instance': (
          <>
            <p>Follow these steps:</p>
            <ul>
              <li>Open MultiMC</li>
              <li>
                Make a new Minecraft 1.8.8 instance
                <br />
                <img src="https://github.com/MorchClient/images/blob/main/obraz_2024-03-03_212628628.png?raw=true" />
              </li>
            </ul>
          </>
        ),
      },
      "How to run Morch (TLauncher)": {
        Prerequisites: (
          <>
            <p>You need to have:</p>
            <ul>
              <li>
                <Link to="../downloads">Downloaded</Link> the latest version of Morch
              </li>
              <li>
                <a href="https://tlauncher.org/en/">TLauncher</a>
              </li>
            </ul>
          </>
        ),
        'Downloading a version of Minecraft': (
          <>
            <p>Follow these steps:</p>
            <ul>
              <li>Open TLauncher</li>
              <li>
                Select version 1.8.8
                <br />
                <img src="https://github.com/MorchClient/images/blob/main/obraz_2024-03-05_180343116.png?raw=true" />
              </li>
            </ul>
          </>
        ),
      }
    };
    try {
      return React.createElement('div', null, classMethodData[className][id]);
    } catch (err) {
      return null;
    }
  }

  function getTutorMethods(className) {
    const classMethodData = {
      "How to run Morch (MultiMC)": [
        'Prerequisites', 'Setting up an Minecraft instance'
      ],
      "How to run Morch (TLauncher)": [
        'Prerequisites', 'Downloading a version of Minecraft'
      ]
    };
    return classMethodData[className] || [];
  }

  function TutorDocumentation({ className = '' }) {
    const tutorMethods = getTutorMethods(className);

    return (
      <div>
        <h1>
          <Link to={`/docs#${className}tree`}>
            <code id={className}>{className}</code>
          </Link>
        </h1>
        <ul>
          {tutorMethods.map((content, index) => (
            <div key={index} className="tutorials">
              <h2>
                <Link to={`/docs#${className + content}tree`}>
                  <code id={className + content}>{content}</code>
                </Link>
                <p>{getTutor(className, { id: content })}</p>
              </h2>
            </div>
          ))}
        </ul>
      </div>
    );
  }

  function ClassList({ className }) {
    const classMethods = getClassMethods(className);

    return (
      <div>
        <li>
          <Link to={`/docs#${className}`}>
            <code id={className + 'tree'}>{className}</code>
          </Link>
        </li>
        {classMethods.map((method) => (
          <li key={method} className="sub">
            <Link to={`/docs#${className + method}`}>
              <code id={className + method + 'tree'}>{method}</code>
            </Link>
          </li>
        ))}
      </div>
    );
  }

  function ClassDocumentation({ className = '' }) {
    const classMethods = getClassMethods(className);

    const handleCopy = (text) => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log('Text successfully copied to clipboard');
        })
        .catch((err) => {
          console.error('Unable to copy text to clipboard', err);
        });
    };

    useEffect(() => {
      return () => { };
    }, []);

    return (
      <div>
        <h1>
          <Link to={`/docs#${className}tree`}>
            <code id={className}>{className}</code>
          </Link>
        </h1>
        <ul>
          {classMethods.map((method) => (
            <div key={method}>
              <h2>
                <Link to={`/docs#${className + method}tree`}>
                  <code id={className + method}>{className + '.' + method}</code>
                </Link>
              </h2>
              <div className="copyButton" onClick={() => handleCopy(getInputTypes(className, method))}>
                <Highlight className="language-javascript jscode">{getInputTypes(className, method)}</Highlight>
              </div>
              <p>{getReturns(className, method)}</p>
              <p>{getMethodDescription(className, method)}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  }

  function getClassMethods(className) {
    /**const classMethodData = {
      console: ['syslog', 'log', 'error', 'warn'],
      playerinv: ['itemSlot', 'openInventory', 'hotbarSize', 'dropAllItems'],
      player: ['uuid', 'name', 'posX', 'posY', 'posZ', 'position', 'send', 'isSleeping', 'dimension', 'deathTime'],
      chat: ['send'],
      font: ['getStringWidth', 'addText', 'removeText'],
      vars: ['create', 'get', 'remove'],
      client: ['setSplash'],
    };
    return classMethodData[className] || [];*/
    try {
      return json.classMethodData[className] || "";
    } catch (err) {
      return "";
    }
  }


  function getInputTypes(className, paramName) {
    try {
      return json.types[className + paramName] || "";
    } catch (err) {
      return "";
    }
  }

  function getReturns(className, paramName) {
    /**const returns = {
      playerinvitemSlot: "The player's item slot",
      playerinvhotbarSize: "The player's hotbar size",
      playeruuid: "The player's UUID",
      playername: "The player's username/name",
      playerposX: "The player's X position.",
      playerposY: "The player's Y position.",
      playerposZ: "The player's Z position.",
      playerisSleeping: 'If the player is sleeping or not',
      playerdimension: "The player's dimension (-1 in the Nether, 0 in the overworld)",
      playerdeathTime: "The amount of time of the remaining player should act 'dead'",
      fontgetStringWidth: "The font's string width",
      varsget: "The variable's value that was set",
    };
    const returnText = returns[className + paramName];*/
    const returnText = json.returns[className + paramName];
    try {
      return returnText ? 'Returns: ' + returnText : '';
    } catch (err) {
      return "";
    }
  }

  function getMethodDescription(className, methodName) {
    /**const methodDescriptions = {
      consolesyslog: 'Logs a message to the system console with default Java logging',
      consolelog: 'Logs a message to the system console (with logger)',
      consolewarn: 'Logs a message as a warning to the system console (with logger)',
      consoleerror: 'Logs a message as an issue to the system console (with logger)',
      playerinvopenInventory: 'Opens the inventory (Doesn\'t work!)',
      playerinvdropAllItems: 'Drops all items as the player',
      playersend: 'Sends a message as the player',
      playerposition: "Moves the player position, note that this isn't teleportation, since you can't clip through blocks",
      chatsend: 'Logs information to chat',
      clientsetSplash: 'Allows you to replace the default splash with the provided string.',
      fontaddText: 'Adds text to the in-game screen',
      fontremoveText: 'Removes text from the in-game screen',
      varscreate: 'Creates a variable',
      varsremove: 'Creates a variable',
    };

    return methodDescriptions[className + methodName] || '';*/
    try {
      return json.methodDescriptions[className + methodName] || '';
    } catch (err) {
      return "";
    }
  }
}

export default Docs;
