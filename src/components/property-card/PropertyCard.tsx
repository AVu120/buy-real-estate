import Button from "../buttons/Button";
import styles from "./PropertyCard.module.css";
interface IPropertyCard {
  price: string;
  agencyColor: string;
  agencyLogoUrl: string;
  mainImageUrl: string;
  buttonAction: "add" | "remove";
}
const PropertyCard = ({
  price,
  agencyColor,
  agencyLogoUrl,
  mainImageUrl,
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
      <Button action={buttonAction} />

      <footer className={styles.footer}>
        <div className={styles.price}>{price}</div>
      </footer>
    </div>
  );
};

export default PropertyCard;
