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
}
const PropertyColumn = ({ results, heading }: IPropertyColumn) => {
  return (
    <div className={styles.column}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.results}>
        {results?.map((result) => (
          <PropertyCard
            price={result.price}
            agencyColor={result.agency.brandingColors.primary}
            agencyLogoUrl={result.agency.logo}
            mainImageUrl={result.mainImage}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyColumn;