import PropertyCard from "../property-card/PropertyCard";
import styles from "./PropertyColumn.module.css";

interface IAgencyInfo {
  brandingColors: { primary: string };
  logo: string;
}

interface IPropertyResult {
  price: string;
  agency: IAgencyInfo;
  id: string;
  mainImage: string;
}
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
    <div style={{ minHeight: "150px", minWidth: "150px" }}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.results}>
        {results?.map((result) => (
          <PropertyCard
            price={result.price}
            agencyColor={result.agency.brandingColors.primary}
            agencyLogoUrl={result.agency.logo}
            mainImageUrl={result.mainImage}
            id={result.id}
            buttonActionType={buttonActionType}
            buttonAction={buttonAction}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyColumn;
