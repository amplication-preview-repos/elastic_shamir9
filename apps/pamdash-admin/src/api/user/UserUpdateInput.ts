import { ContactInformationWhereUniqueInput } from "../contactInformation/ContactInformationWhereUniqueInput";
import { PersonalInformationWhereUniqueInput } from "../personalInformation/PersonalInformationWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { VerificationInformationWhereUniqueInput } from "../verificationInformation/VerificationInformationWhereUniqueInput";

export type UserUpdateInput = {
  contactInformation?: ContactInformationWhereUniqueInput | null;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  personalInformation?: PersonalInformationWhereUniqueInput | null;
  roles?: InputJsonValue;
  signUpCredentials?: string | null;
  username?: string;
  verificationInformation?: VerificationInformationWhereUniqueInput | null;
};
