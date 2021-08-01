import styles from "./App.module.css";
import { testState } from "../src/utils/testState";
import {
  default as ResultsColumn,
  default as SavedPropertiesColumn,
} from "./components/property-column/PropertyColumn";
import { useState, createContext } from "react";

export const StateContext = createContext<any>(null);

function App() {
  const [state, setState] = useState(testState);

  const addProperty = (id: string): void => {
    const addedProperty = state.results.find((result) => result.id === id);
    if (addedProperty)
      return setState({
        ...state,
        saved: [...state.saved, addedProperty],
      });
    alert("Error adding property, unable to find property in Results.");
  };

  const removeProperty = (id: string): void => {
    const removedProperty = state.saved.find((result) => result.id === id);
    if (removedProperty)
      return setState({
        ...state,
        saved: state.saved.filter((savedResult) => savedResult.id !== id),
      });
    alert(
      "Error removing property, unable to find property in 'Saved Properties'."
    );
  };

  return (
    <div className={styles.App}>
      <div className={styles.columns}>
        <StateContext.Provider value={{ state, setState }}>
          <ResultsColumn
            heading="Results"
            results={state.results}
            buttonActionType="add"
            buttonAction={addProperty}
          />
          <SavedPropertiesColumn
            heading="Saved Properties"
            results={state.saved}
            buttonActionType="remove"
            buttonAction={removeProperty}
          />
        </StateContext.Provider>
      </div>
    </div>
  );
}

export default App;
