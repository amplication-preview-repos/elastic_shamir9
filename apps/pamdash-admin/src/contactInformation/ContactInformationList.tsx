import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ContactInformationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ContactInformations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
