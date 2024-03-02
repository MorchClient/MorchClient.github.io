import './App.css';
import Header from './comp/Header';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <h1>Morch Client</h1>
      <div>
        <Link to={"/docs"}><button >Docs</button></Link>
        <Link to={"/downloads"}><button >Downloads</button></Link>
        <Link to={"https://github.com/morchclient"}><button >GitHub</button></Link>
      </div>
      <p>Discover Morch, a script loader revolutionizing your Minecraft experience. Seamlessly modify core game mechanics using the powerful JavaScript engine <a href="https://openjdk.org/projects/nashorn/">Nashorn</a>.</p>
      <p>Explore Morch&apos;s possibilities for in-game customization, going beyond traditional modding. Immerse yourself in its innovation, integrating advanced mod-like functionalities into the game environment.</p>
      <p>Morch, a vanguard in in-game scripting, alters Minecraft&apos;s mechanics without external tools. Harness Nashorn&apos;s power for real-time scripting, unleashing unparalleled creativity.</p>
      <p>Engage with Morch for boundless customization. Script your way to interactive gameplay, adapting on the fly to reflect your style. Each Minecraft session becomes a canvas for your imagination.</p>
      <p>Unleash creativity and reshape your Minecraft experience with Morch, where scripting meets gaming in a symphony of possibilities.</p>
    </>
  )
}

export default App
