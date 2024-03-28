import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Test from "./components/Test/test";
import Dropzone from "./components/DropZone/dropzone";

export default function App() {
  const [testData, setTestData] = React.useState(null);

  React.useEffect(() => {
    const url = "http://localhost:3000/api/v1/tests/77";
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setTestData(data);
    });
  }, []);

  return (
    <div className='app-frame'>
      <Navbar />
      <Dropzone setTestData={setTestData}/>
      <div className='app-body'>
        {console.log(testData)}
        {testData ? <Test test={testData} /> : 'Loading...'}
      </div>
    </div>
  );
}
