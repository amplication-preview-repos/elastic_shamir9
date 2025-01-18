import { ContactInformation } from "../contactInformation/ContactInformation";
import { PersonalInformation } from "../personalInformation/PersonalInformation";
import { JsonValue } from "type-fest";
import { VerificationInformation } from "../verificationInformation/VerificationInformation";

export type User = {
  contactInformation?: ContactInformation | null;
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  personalInformation?: PersonalInformation | null;
  roles: JsonValue;
  signUpCredentials: string | null;
  updatedAt: Date;
  username: string;
  verificationInformation?: VerificationInformation | null;
};
