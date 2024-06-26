import Dropzone from "../DropZone/dropzone";
import TestProgress from "../TestProgress/testprogress";
import { useState } from 'react';
import './sidebar.css';

export default function Sidebar({ setTestData, testData, correctCount, countdown, setCountdownOver, setCountdown, setStartTimer }) {
  const [showDropzone, setShowDropzone] = useState(false);
  const [isUploadClicked, setIsUploadClicked] = useState(false);
  const [isShowClicked, setIsShowClicked] = useState(true);

    return (
      <>
      <div>
      <div className="sidebar-head">
        <button
          onClick={() => {setShowDropzone(true);
            setIsUploadClicked(prevState => !prevState);
            setIsShowClicked(prevState => !prevState);}}
          disabled={showDropzone}
          className={`button-left ${isUploadClicked ? 'clicked' : ''}`}
        >
          New Test
        </button>
        <button
          onClick={() => {setShowDropzone(false);
            setIsUploadClicked(prevState => !prevState);
            setIsShowClicked(prevState => !prevState);}}
          disabled={!showDropzone}
          className={`button-right ${isShowClicked ? 'clicked' : ''}`}
        >
          Progress
        </button>
      </div>
      <div className="sidebar-content">
        {showDropzone ? (
          <div className="dropzone">
            <Dropzone setTestData={setTestData} setStartTimer={setStartTimer} setCountdownOver={setCountdownOver} setCountdown={setCountdown} countdown={countdown} setShowDropzone={setShowDropzone} setIsUploadClicked={setIsUploadClicked} setIsShowClicked={setIsShowClicked} />
          </div>
        ) : (
          <div className="test-progress">
            <TestProgress testData={testData} correctCount={correctCount} countdown={countdown} />
          </div>
        )}
        </div>
      </div>
      </>
    );
}
