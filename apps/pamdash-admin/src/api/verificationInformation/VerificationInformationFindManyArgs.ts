import { VerificationInformationWhereInput } from "./VerificationInformationWhereInput";
import { VerificationInformationOrderByInput } from "./VerificationInformationOrderByInput";

export type VerificationInformationFindManyArgs = {
  where?: VerificationInformationWhereInput;
  orderBy?: Array<VerificationInformationOrderByInput>;
  skip?: number;
  take?: number;
};
