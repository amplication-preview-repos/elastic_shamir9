import { ContactInformationWhereUniqueInput } from "../contactInformation/ContactInformationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PersonalInformationWhereUniqueInput } from "../personalInformation/PersonalInformationWhereUniqueInput";
import { VerificationInformationWhereUniqueInput } from "../verificationInformation/VerificationInformationWhereUniqueInput";

export type UserWhereInput = {
  contactInformation?: ContactInformationWhereUniqueInput;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  personalInformation?: PersonalInformationWhereUniqueInput;
  signUpCredentials?: StringNullableFilter;
  username?: StringFilter;
  verificationInformation?: VerificationInformationWhereUniqueInput;
};
