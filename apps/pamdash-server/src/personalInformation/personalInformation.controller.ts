import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PersonalInformationService } from "./personalInformation.service";
import { PersonalInformationControllerBase } from "./base/personalInformation.controller.base";

@swagger.ApiTags("personalInformations")
@common.Controller("personalInformations")
export class PersonalInformationController extends PersonalInformationControllerBase {
  constructor(
    protected readonly service: PersonalInformationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
