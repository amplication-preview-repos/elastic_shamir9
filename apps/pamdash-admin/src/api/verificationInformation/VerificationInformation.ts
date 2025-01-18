import { User } from "../user/User";

export type VerificationInformation = {
  cacDocument: string;
  countryOfIncorporation: string;
  createdAt: Date;
  currentOccupation: string | null;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  id: string;
  identificationDocument: string;
  identificationNumber: string;
  organisationAddress: string;
  organisationName: string;
  placeOfIssue: string;
  position: string;
  registrationNumber: string;
  updatedAt: Date;
  user?: User | null;
};
