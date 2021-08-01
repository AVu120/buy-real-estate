// Common property-related types go here.
interface IAgencyInfo {
  brandingColors: { primary: string };
  logo: string;
}

export interface IPropertyResult {
  price: string;
  agency: IAgencyInfo;
  id: string;
  mainImage: string;
}
