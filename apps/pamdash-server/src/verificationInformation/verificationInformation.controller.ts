import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VerificationInformationService } from "./verificationInformation.service";
import { VerificationInformationControllerBase } from "./base/verificationInformation.controller.base";

@swagger.ApiTags("verificationInformations")
@common.Controller("verificationInformations")
export class VerificationInformationController extends VerificationInformationControllerBase {
  constructor(
    protected readonly service: VerificationInformationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
