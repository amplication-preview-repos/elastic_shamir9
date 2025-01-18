import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContactInformationResolverBase } from "./base/contactInformation.resolver.base";
import { ContactInformation } from "./base/ContactInformation";
import { ContactInformationService } from "./contactInformation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContactInformation)
export class ContactInformationResolver extends ContactInformationResolverBase {
  constructor(
    protected readonly service: ContactInformationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
