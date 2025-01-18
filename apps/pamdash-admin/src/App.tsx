import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ContactInformationList } from "./contactInformation/ContactInformationList";
import { ContactInformationCreate } from "./contactInformation/ContactInformationCreate";
import { ContactInformationEdit } from "./contactInformation/ContactInformationEdit";
import { ContactInformationShow } from "./contactInformation/ContactInformationShow";
import { PersonalInformationList } from "./personalInformation/PersonalInformationList";
import { PersonalInformationCreate } from "./personalInformation/PersonalInformationCreate";
import { PersonalInformationEdit } from "./personalInformation/PersonalInformationEdit";
import { PersonalInformationShow } from "./personalInformation/PersonalInformationShow";
import { VerificationInformationList } from "./verificationInformation/VerificationInformationList";
import { VerificationInformationCreate } from "./verificationInformation/VerificationInformationCreate";
import { VerificationInformationEdit } from "./verificationInformation/VerificationInformationEdit";
import { VerificationInformationShow } from "./verificationInformation/VerificationInformationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Pamdash"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="ContactInformation"
          list={ContactInformationList}
          edit={ContactInformationEdit}
          create={ContactInformationCreate}
          show={ContactInformationShow}
        />
        <Resource
          name="PersonalInformation"
          list={PersonalInformationList}
          edit={PersonalInformationEdit}
          create={PersonalInformationCreate}
          show={PersonalInformationShow}
        />
        <Resource
          name="VerificationInformation"
          list={VerificationInformationList}
          edit={VerificationInformationEdit}
          create={VerificationInformationCreate}
          show={VerificationInformationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
