import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VerificationInformationUpdateInput = {
  cacDocument?: string;
  countryOfIncorporation?: string;
  currentOccupation?: string | null;
  dateOfExpiry?: Date;
  dateOfIssue?: Date;
  identificationDocument?: string;
  identificationNumber?: string;
  organisationAddress?: string;
  organisationName?: string;
  placeOfIssue?: string;
  position?: string;
  registrationNumber?: string;
  user?: UserWhereUniqueInput | null;
};
