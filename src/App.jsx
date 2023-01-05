import { useState } from "react";
import Header from "./components/Header";
import Jotform from "react-jotform";

function App() {
  const [showSupportDevs, setShowSupportDevs] = useState(false);
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header></Header>
        <div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap flex-grow">
          <div className="w-fixed w-full flex-shrink flex-grow-0 px-4 border-r border-slate-100">
            <div className="sticky top-0 pt-1 w-full h-full">
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
            </div>
          </div>
          <main role="main" className="w-full flex-grow pt-1 px-3">
            <h1>Main Content</h1>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              necessitatibus quasi, sunt possimus unde quos numquam ratione,
              repellendus a sapiente aut molestiae. Earum sapiente ab velit
              ipsam nemo a molestiae?
            </div>
          </main>
          <div className="w-fixed w-full flex-shrink flex-grow-0 px-2 border-l border-slate-100">
            <div className="flex sm:flex-col px-2">Sidebar</div>
          </div>
        </div>
        <footer className="bg-gray-600 mt-auto text-white p-2">Footer</footer>
      </div>
    </>
  );
}

export default App;
