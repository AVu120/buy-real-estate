import Button from "./Button";
import styles from "./PropertyCard.module.css";
interface IPropertyCard {
  price: string;
  agencyColor: string;
  agencyLogoUrl: string;
  mainImageUrl: string;
  buttonActionType: "add" | "remove";
  id: string;
  buttonAction: Function;
}
const PropertyCard = ({
  price,
  agencyColor,
  agencyLogoUrl,
  mainImageUrl,
  id,
  buttonActionType,
  buttonAction,
}: IPropertyCard) => {
  return (
    <div className={styles.card}>
      <header
        className={styles.header}
        style={{ backgroundColor: agencyColor }}
      >
        <img src={agencyLogoUrl} alt="Agency Logo" className={styles.logo} />
      </header>
      <img
        src={mainImageUrl}
        alt="house for sale"
        className={styles.house_photo}
      />

      <button
        type="button"
        className={
          buttonActionType === "add"
            ? styles.add_property_button
            : styles.remove_property_button
        }
        onClick={() => buttonAction(id)}
      >
        {buttonActionType === "add" ? "Add property" : "Remove property"}
      </button>
      <footer className={styles.footer}>
        <div className={styles.price}>{price}</div>
      </footer>
    </div>
  );
};

export default PropertyCard;
