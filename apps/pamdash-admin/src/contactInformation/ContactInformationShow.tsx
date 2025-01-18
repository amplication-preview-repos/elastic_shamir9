import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ContactInformationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lga" source="lga" />
        <TextField label="lgaOfResidence" source="lgaOfResidence" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="residentialAddress" source="residentialAddress" />
        <TextField label="stateOfOrigin" source="stateOfOrigin" />
        <TextField label="stateOfResidence" source="stateOfResidence" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
