import styles from "./App.module.css";
import { testState } from "../src/utils/testState";
import PropertyColumn from "./components/property-column/PropertyColumn";
import { useState } from "react";

function App() {
  const [state, setState] = useState(testState);

  return (
    <div className={styles.App}>
      <div className={styles.columns}>
        <PropertyColumn heading="Results" results={state.results} />
        <PropertyColumn heading="Saved Properties" results={state.saved} />
      </div>
    </div>
  );
}

export default App;
