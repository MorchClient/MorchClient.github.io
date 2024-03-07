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
      <p>Discover Morch, a script loader revolutionizing your Minecraft experience.</p>
      <p>Seamlessly modify core game mechanics using the powerful <a href="https://openjdk.org/projects/nashorn/">JavaScript engine Nashorn</a>.</p>
      <p>Explore Morch&apos;s possibilities for in-game customization, going beyond traditional modding.</p>
      <p>Immerse yourself in its innovation, integrating advanced mod-like functionalities into the game environment.</p>
      <p>Morch, a vanguard in in-game scripting, alters Minecraft&apos;s mechanics without external tools.</p>
      <p>Harness Nashorn&apos;s power for real-time scripting, unleashing unparalleled creativity.</p>
    </>
  )
}

export default App
