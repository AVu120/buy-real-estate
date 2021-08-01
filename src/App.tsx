import styles from "./App.module.css";
import { testState } from "../src/utils/testState";
import PropertyCard from "../src/components/property-card/PropertyCard";
import { useState } from "react";

function App() {
  const [state, setState] = useState(testState);

  return (
    <div className={styles.App}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h2 className={styles.heading}>Results</h2>
          <div className={styles.results}>
            {state?.results.map((result) => (
              <PropertyCard
                price={result.price}
                agencyColor={result.agency.brandingColors.primary}
                agencyLogoUrl={result.agency.logo}
                mainImageUrl={result.mainImage}
              />
            ))}
          </div>
        </div>
        <div className={styles.column}>
          <h2 className={styles.heading}>Saved Properties</h2>
          <div className={styles.saved_properties}>
            {state?.saved.map((savedResult) => (
              <PropertyCard
                price={savedResult.price}
                agencyColor={savedResult.agency.brandingColors.primary}
                agencyLogoUrl={savedResult.agency.logo}
                mainImageUrl={savedResult.mainImage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
