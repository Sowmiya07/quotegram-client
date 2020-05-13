import React from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  function createQuote() {
    console.log("Create Quote Button is Clicked")
  }

  function saveQuote() {
    console.log("Save Quote Button is Clicked")
    html2canvas(document.getElementById("capture"))
      .then(canvas => {
        let imageUrl = canvas.toDataURL('image/png');
        let image = new Image();
        image.src=imageUrl;
        let newTab = window.open()
        newTab.document.body.appendChild(image)
      }
      );
  }


  function openLink() {
    document.getElementById("download").click();
  }

  return (
    <div className="App">
      <button onClick={createQuote} >
        Create New Quote  
      </button>
      <div id="capture" style={{padding: "50px"}}>
        <h4>Hello World!!!</h4>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <button onClick={saveQuote}>
        Save The Quote
      </button>
    </div>
  );
}

export default App;
