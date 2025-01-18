import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const VerificationInformationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"VerificationInformations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="cacDocument" source="cacDocument" />
        <TextField
          label="countryOfIncorporation"
          source="countryOfIncorporation"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentOccupation" source="currentOccupation" />
        <TextField label="dateOfExpiry" source="dateOfExpiry" />
        <TextField label="dateOfIssue" source="dateOfIssue" />
        <TextField label="ID" source="id" />
        <TextField
          label="identificationDocument"
          source="identificationDocument"
        />
        <TextField label="identificationNumber" source="identificationNumber" />
        <TextField label="organisationAddress" source="organisationAddress" />
        <TextField label="organisationName" source="organisationName" />
        <TextField label="placeOfIssue" source="placeOfIssue" />
        <TextField label="position" source="position" />
        <TextField label="registrationNumber" source="registrationNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
