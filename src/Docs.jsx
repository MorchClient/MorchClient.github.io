/* eslint-disable react/prop-types */
import { HashLink as Link } from 'react-router-hash-link';
import Header from './comp/Header';
import './Docs.css';

/**
 * The main documentation component for displaying API documentation.
 */
function Docs() {
  return (
    <>
      <Header />
      <h1>Docs</h1>
      <div id="docs">
        <h1>API</h1>
        {/*
          Display a list of classes and their methods for navigation.
        */}
        <ClassList className="console" />
        <ClassList className="playerinv" />
        <ClassList className="player" />
        <ClassList className="chat" />
        <ClassList className="font" />
        <ClassList className="vars" />
        <ClassList className="client" />

        {/*
          Display detailed documentation for each class and its methods.
        */}
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
}

/**
 * A component that displays a list of class names and their methods for navigation.
 * @param {Object} props - The component props.
 * @param {string} props.className - The name of the class.
 */
function ClassList({ className }) {
  const classMethods = getClassMethods(className);

  return (
    <div>
      <li>
        <Link to={`/docs#${className}`}>
          <code>{className}</code>
        </Link>
      </li>
      {classMethods.map((method) => (
        <li key={method} className='sub'>
          <Link to={`/docs#${method}`}>
            <code>{method}</code>
          </Link>
        </li>
      ))}
    </div>
  );
}

/**
 * A component that displays detailed documentation for a specific class and its methods.
 * @param {Object} props - The component props.
 * @param {string} props.className - The name of the class.
 */
function ClassDocumentation({ className }) {
  // Generate class-specific documentation here
  const classMethods = getClassMethods(className);

  return (
    <div>
      <h1>
        <code id={className}>{className}</code>
      </h1>
      <ul>
        {classMethods.map((method) => (
          <div key={method}>
            <h2>
              <code id={method}>{method}</code>
            </h2>
            <p>
              {getReturns(className, method)}
            </p>
            <p>
              {getMethodDescription(className, method)}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
}

/**
 * Get the methods for a specific class.
 * @param {string} className - The name of the class.
 * @returns {string[]} - An array of method names for the given class.
 */
function getClassMethods(className) {
  // Dummy data, replace with actual data or API calls
  const classMethodData = {
    console: ['syslog', 'log', 'error', 'warn'],
    playerinv: ['itemSlot', 'openInventory', 'hotbarSize', 'dropAllItems'],
    player: ['uuid', 'name', 'posX', 'posY', 'posZ', 'position', 'send', 'isSleeping', 'dimension', 'deathTime'],
    chat: ['send'],
    font: ['getStringWidth', 'addText', 'removeText'],
    vars: ['create', 'get', 'remove'],
    client: ['setSplash'],
  };

  return classMethodData[className] || [];
}
function getReturns(className, paramName){
  const returns = {
    playerinvitemSlot:"The player's item slot",
    playerinvhotbarSize:"The player's hotbar size",
    playeruuid: "The player's UUID",
    playername: "The player's username/name",
    playerposX: "The player's X position.",
    playerposY: "The player's Y position.",
    playerposZ: "The player's Z position.",
    playerisSleeping: "If the player is sleeping or not",
    playerdimension: "The player's dimension (-1 in the Nether, 0 in the overworld)",
    playerdeathTime: "The amount of time of the remaining player should act 'dead'",
    fontgetStringWidth: "The font's string width",
    varsget: "The variable's value that was set",
  }
  if (returns[className+paramName] == undefined){return;}
  return "Returns: "+returns[className+paramName];
}
/**
 * Get the description for a specific method of a class.
 * @param {string} className - The name of the class.
 * @param {string} methodName - The name of the method.
 * @returns {string} - The method description.
 */
function getMethodDescription(className, methodName) {
  // Dummy data, replace with actual data or API documentation
  const methodDescriptions = {
    consolesyslog: 'Logs a message to the system console with default Java logging',
    consolelog: 'Logs a message to the system console (with logger)',
    consolewarn: 'Logs a message as warning to the system console (with logger)',
    consoleerror: 'Logs a message as an issue to the system console (with logger)',
    playerinvopenInventory: 'Opens the inventory (Dosen\'t work!)',
    playerinvdropAllItems: 'Drops all items as the player',
    playersend: 'Sends a message as the player',
    playerposition: 'Moves the player position, note that this isn\'t teleportation, since you can\'t clip through blocks',
    chatsend: 'Logs information to chat',
    clientsetSplash: 'Allows you to replace the default splash with the provided string.',
    fontaddText: "Adds text to the in-game screen",
    fontremoveText: "Removes text from the in-game screen",
    varscreate: "Creates a variable",
    varsremove: "Creates a variable",
    // Add descriptions for other methods as needed
  };

  return methodDescriptions[className+methodName] || "";
}


export default Docs;
