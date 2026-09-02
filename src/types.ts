export type PageRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'property-facilities'
  | 'projects'
  | 'insights'
  | 'contact';

export interface NavLinkItem {
  name: string;
  id: PageRoute;
  href?: string;
  hasDropdown?: boolean;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  message: string;
}
