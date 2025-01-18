import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PersonalInformationServiceBase } from "./base/personalInformation.service.base";

@Injectable()
export class PersonalInformationService extends PersonalInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
