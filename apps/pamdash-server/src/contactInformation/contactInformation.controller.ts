import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContactInformationService } from "./contactInformation.service";
import { ContactInformationControllerBase } from "./base/contactInformation.controller.base";

@swagger.ApiTags("contactInformations")
@common.Controller("contactInformations")
export class ContactInformationController extends ContactInformationControllerBase {
  constructor(
    protected readonly service: ContactInformationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
