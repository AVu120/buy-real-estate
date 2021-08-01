import PropertyCard from "../property-card/PropertyCard";
import styles from "./PropertyColumn.module.css";
import { IPropertyResult } from "../../types/Property";
interface IPropertyColumn {
  results: IPropertyResult[];
  heading: string;
  buttonActionType: "add" | "remove";
  buttonAction: Function;
}
const PropertyColumn = ({
  results,
  heading,
  buttonActionType,
  buttonAction,
}: IPropertyColumn) => {
  return (
    <div>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.results}>
        {results?.length ? (
          results.map((result) => (
            <PropertyCard
              key={`property-card-id-${result.id}`}
              price={result.price}
              agencyColor={result.agency.brandingColors.primary}
              agencyLogoUrl={result.agency.logo}
              mainImageUrl={result.mainImage}
              id={result.id}
              buttonActionType={buttonActionType}
              buttonAction={buttonAction}
            />
          ))
        ) : (
          <div className={styles.no_results}></div>
        )}
      </div>
    </div>
  );
};

export default PropertyColumn;
