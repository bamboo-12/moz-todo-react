import "./App.css";

const subject = "React";

function App(props) {

  return (
    <>
      <header>
        {/* Hello, React :)! */}
        <h1>Hello, {subject + ' :)'}!</h1>
        {/* Hello, REACT */}
        <h1>Hello, {subject.toUpperCase()}</h1>
        {/* Hello, 4! */}
        <h1>Hello, {props.subject}!</h1>
        <button type="button" className="primary">
          Click me!
        </button>
{/* test */}
      </header>
    </>
  );
}

export default App;
