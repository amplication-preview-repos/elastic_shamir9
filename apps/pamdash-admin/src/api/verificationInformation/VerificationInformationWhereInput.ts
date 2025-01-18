import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VerificationInformationWhereInput = {
  cacDocument?: StringFilter;
  countryOfIncorporation?: StringFilter;
  currentOccupation?: StringNullableFilter;
  dateOfExpiry?: DateTimeFilter;
  dateOfIssue?: DateTimeFilter;
  id?: StringFilter;
  identificationDocument?: StringFilter;
  identificationNumber?: StringFilter;
  organisationAddress?: StringFilter;
  organisationName?: StringFilter;
  placeOfIssue?: StringFilter;
  position?: StringFilter;
  registrationNumber?: StringFilter;
  user?: UserWhereUniqueInput;
};
