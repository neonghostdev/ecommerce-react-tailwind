import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App dark:bg-slate-800 min-h-screen px-4 pt-4">
      <header className="">
        <NavBar></NavBar>
      </header>
      <main>
        <br />
        <h1 className="dark:text-white text-3xl font-bold underline">
          Hello World!
        </h1>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
