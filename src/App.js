import './App.css';
import useMarkdown from './hooks/useMarkdown'

function App() {

  const { bind, markInput, markOutput } = useMarkdown()

  return (
    <div className='App'>
      <div>
        <label className="heading" for="mark-input">Enter Markdown Text here</label><br />
        <textarea
          id="mark-input"
          name=''
          value={markInput}
          placeholder='blahblahblah'
          {...bind}
        ></textarea>
      </div>

      <div>
        <h2 className="heading">Your formatted text :</h2>
        <div id='mark-output' dangerouslySetInnerHTML={markOutput(markInput)}></div>
      </div>
    </div>
  );
}


export default App;