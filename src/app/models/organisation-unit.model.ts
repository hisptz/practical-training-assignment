export interface OrganisationUnit {
  id: string;
  name: string;
  level: number;
  type?: string;
}

export interface OrganisationUnitChildren {
  id: string;
  lastUpdated: string;
  level: number;
  name: string;
  code: string;
  shortName: string;
  leaf: boolean;
  displayName: string;
  contactPerson: string;
  email: string;
  address: string;
  comment: string;
  description: string;
  displayShortName: string;
  openingDate: string;
  closedDate: string;
  phoneNumber: string;
  url: string;
  coordinates: string;
  childern: OrganisationUnit[];
}
