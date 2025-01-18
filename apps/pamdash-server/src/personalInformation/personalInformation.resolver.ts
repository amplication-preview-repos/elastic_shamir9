import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PersonalInformationResolverBase } from "./base/personalInformation.resolver.base";
import { PersonalInformation } from "./base/PersonalInformation";
import { PersonalInformationService } from "./personalInformation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PersonalInformation)
export class PersonalInformationResolver extends PersonalInformationResolverBase {
  constructor(
    protected readonly service: PersonalInformationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
