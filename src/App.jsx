import videoBg from "../src/assets/videpbg.mp4";
import TextEditor from "./components/TextEditor";

const App = () => {
  function getCurrentShamsiDate() {
    const persianDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date());

    return persianDate;
  }
  return (
    <>
      <main>
        <div className="video-container">
          <video src={videoBg} loop muted autoPlay />
        </div>
        <h1 className="header-text">Lets Write Memories...</h1>
        <div className="editor-container">
          <div className="info">
            <span contentEditable="true" id="editabletext">
              <strong>عنوان</strong>
            </span>
            <h3>{getCurrentShamsiDate()}</h3>
          </div>
          <TextEditor />
        </div>
      </main>
    </>
  );
};

export default App;
