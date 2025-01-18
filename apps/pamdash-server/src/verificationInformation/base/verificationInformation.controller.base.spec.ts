import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { VerificationInformationController } from "../verificationInformation.controller";
import { VerificationInformationService } from "../verificationInformation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cacDocument: "exampleCacDocument",
  countryOfIncorporation: "exampleCountryOfIncorporation",
  createdAt: new Date(),
  currentOccupation: "exampleCurrentOccupation",
  dateOfExpiry: new Date(),
  dateOfIssue: new Date(),
  id: "exampleId",
  identificationDocument: "exampleIdentificationDocument",
  identificationNumber: "exampleIdentificationNumber",
  organisationAddress: "exampleOrganisationAddress",
  organisationName: "exampleOrganisationName",
  placeOfIssue: "examplePlaceOfIssue",
  position: "examplePosition",
  registrationNumber: "exampleRegistrationNumber",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  cacDocument: "exampleCacDocument",
  countryOfIncorporation: "exampleCountryOfIncorporation",
  createdAt: new Date(),
  currentOccupation: "exampleCurrentOccupation",
  dateOfExpiry: new Date(),
  dateOfIssue: new Date(),
  id: "exampleId",
  identificationDocument: "exampleIdentificationDocument",
  identificationNumber: "exampleIdentificationNumber",
  organisationAddress: "exampleOrganisationAddress",
  organisationName: "exampleOrganisationName",
  placeOfIssue: "examplePlaceOfIssue",
  position: "examplePosition",
  registrationNumber: "exampleRegistrationNumber",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    cacDocument: "exampleCacDocument",
    countryOfIncorporation: "exampleCountryOfIncorporation",
    createdAt: new Date(),
    currentOccupation: "exampleCurrentOccupation",
    dateOfExpiry: new Date(),
    dateOfIssue: new Date(),
    id: "exampleId",
    identificationDocument: "exampleIdentificationDocument",
    identificationNumber: "exampleIdentificationNumber",
    organisationAddress: "exampleOrganisationAddress",
    organisationName: "exampleOrganisationName",
    placeOfIssue: "examplePlaceOfIssue",
    position: "examplePosition",
    registrationNumber: "exampleRegistrationNumber",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  cacDocument: "exampleCacDocument",
  countryOfIncorporation: "exampleCountryOfIncorporation",
  createdAt: new Date(),
  currentOccupation: "exampleCurrentOccupation",
  dateOfExpiry: new Date(),
  dateOfIssue: new Date(),
  id: "exampleId",
  identificationDocument: "exampleIdentificationDocument",
  identificationNumber: "exampleIdentificationNumber",
  organisationAddress: "exampleOrganisationAddress",
  organisationName: "exampleOrganisationName",
  placeOfIssue: "examplePlaceOfIssue",
  position: "examplePosition",
  registrationNumber: "exampleRegistrationNumber",
  updatedAt: new Date(),
};

const service = {
  createVerificationInformation() {
    return CREATE_RESULT;
  },
  verificationInformations: () => FIND_MANY_RESULT,
  verificationInformation: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("VerificationInformation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: VerificationInformationService,
          useValue: service,
        },
      ],
      controllers: [VerificationInformationController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /verificationInformations", async () => {
    await request(app.getHttpServer())
      .post("/verificationInformations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfExpiry: CREATE_RESULT.dateOfExpiry.toISOString(),
        dateOfIssue: CREATE_RESULT.dateOfIssue.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /verificationInformations", async () => {
    await request(app.getHttpServer())
      .get("/verificationInformations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateOfExpiry: FIND_MANY_RESULT[0].dateOfExpiry.toISOString(),
          dateOfIssue: FIND_MANY_RESULT[0].dateOfIssue.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /verificationInformations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/verificationInformations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /verificationInformations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/verificationInformations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateOfExpiry: FIND_ONE_RESULT.dateOfExpiry.toISOString(),
        dateOfIssue: FIND_ONE_RESULT.dateOfIssue.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /verificationInformations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/verificationInformations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfExpiry: CREATE_RESULT.dateOfExpiry.toISOString(),
        dateOfIssue: CREATE_RESULT.dateOfIssue.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/verificationInformations")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
