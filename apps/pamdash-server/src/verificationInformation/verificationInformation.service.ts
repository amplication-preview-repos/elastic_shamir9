import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VerificationInformationServiceBase } from "./base/verificationInformation.service.base";

@Injectable()
export class VerificationInformationService extends VerificationInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
