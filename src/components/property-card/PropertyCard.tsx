import styles from "./PropertyCard.module.css";

const testData = {
  price: "$726,500",
  agency: {
    brandingColors: {
      primary: "#ffe512",
    },
    logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif",
  },
  id: "1",
  mainImage:
    "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg",
};

interface IPropertyCard {
  price: string;
  agencyColor: string;
  agencyLogoUrl: string;
  mainImageUrl: string;
}
const PropertyCard = () =>
  //   {
  //   price,
  //   agencyColor,
  //   agencyLogoUrl,
  //   mainImageUrl,
  // }: IPropertyCard
  {
    return (
      <div className={styles.card}>
        <header
          className={styles.header}
          style={{ backgroundColor: testData.agency.brandingColors.primary }}
        >
          <img
            src={testData.agency.logo}
            alt="First National Real Estate Logo"
            className={styles.logo}
          />
        </header>
        <img
          src={testData.mainImage}
          alt="house for sale"
          className={styles.house_photo}
        />
        <footer className={styles.footer}>
          <div className={styles.price}>{testData.price}</div>
        </footer>
      </div>
    );
  };

export default PropertyCard;
