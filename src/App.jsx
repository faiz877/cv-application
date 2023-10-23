import Info from "./components/Info";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">CV Application</h1>
      <div className="w-full max-w-screen-lg p-4 bg-white rounded shadow">
        <Info />
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  );
}

export default App;
