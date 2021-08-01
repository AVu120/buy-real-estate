import styles from "./App.module.css";
import { testState } from "../src/utils/testState";
import PropertyCard from "../src/components/property-card/PropertyCard";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.columns}>
        <div>
          <h2 className={styles.heading}>Results</h2>
          <div className={styles.results}>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
        <div>
          <h2 className={styles.heading}>Saved Properties</h2>
          <div className={styles.saved_properties}>
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
