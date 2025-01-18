import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VerificationInformationResolverBase } from "./base/verificationInformation.resolver.base";
import { VerificationInformation } from "./base/VerificationInformation";
import { VerificationInformationService } from "./verificationInformation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VerificationInformation)
export class VerificationInformationResolver extends VerificationInformationResolverBase {
  constructor(
    protected readonly service: VerificationInformationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
