import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CONTACTINFORMATION_TITLE_FIELD } from "../contactInformation/ContactInformationTitle";
import { PERSONALINFORMATION_TITLE_FIELD } from "../personalInformation/PersonalInformationTitle";
import { VERIFICATIONINFORMATION_TITLE_FIELD } from "../verificationInformation/VerificationInformationTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="contactInformation"
          source="contactinformation.id"
          reference="ContactInformation"
        >
          <TextField source={CONTACTINFORMATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <ReferenceField
          label="personalInformation"
          source="personalinformation.id"
          reference="PersonalInformation"
        >
          <TextField source={PERSONALINFORMATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Roles" source="roles" />
        <TextField label="signUpCredentials" source="signUpCredentials" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceField
          label="verificationInformation"
          source="verificationinformation.id"
          reference="VerificationInformation"
        >
          <TextField source={VERIFICATIONINFORMATION_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
