import { PersonalInformationWhereInput } from "./PersonalInformationWhereInput";
import { PersonalInformationOrderByInput } from "./PersonalInformationOrderByInput";

export type PersonalInformationFindManyArgs = {
  where?: PersonalInformationWhereInput;
  orderBy?: Array<PersonalInformationOrderByInput>;
  skip?: number;
  take?: number;
};
