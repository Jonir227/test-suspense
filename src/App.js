import React, { useState } from "react";
import { DataFetching } from "./pages";

const DATA_FETCHING = 1;
const UI_PATTERNS = 2;

function App() {
  const [view, setView] = useState(DATA_FETCHING);
  return (
    <div>
      <div>
        <button onClick={() => setView(DATA_FETCHING)}>DATA_FETCHING</button>
        <button onClick={() => setView(UI_PATTERNS)}>UI_PATTERNS</button>
      </div>
      <br />
      <div>
        {view === DATA_FETCHING && <DataFetching />}
        {view === UI_PATTERNS && <div>UI_PATTERNS</div>}
      </div>
    </div>
  );
}

export default App;
