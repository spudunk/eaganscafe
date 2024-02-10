export type Data = {
  updated?: number;
  description: string;
  title: string;
  url: string;
  ethelInfo: LocationInfo;
  teninoInfo: LocationInfo;
  ethelLunchMenu: Menu;
  ethelBreakfastMenu: Menu;
  teninoMenu: Menu;
};

export type LocationInfo = {
  route: string;
  url: string;
  heading: string;
  banner: string;
  address: string;
  navLink: string;
  telLink: string;
  tel: string;
  details: string[];
  facebookLink: string;
  facebookName: string;
  showPrices: boolean;
};

export type MenuItem = {
  name: string;
  description?: string | undefined;
  price?: number | undefined;
  sizes?: { size: string; price: number }[] | undefined;
};

export type MenuSection = {
  id: string;
  heading: string;
  description?: string[];
  items: MenuItem[];
};

export type Menu = {
  id: string;
  title: string;
  sections: MenuSection[];
};
