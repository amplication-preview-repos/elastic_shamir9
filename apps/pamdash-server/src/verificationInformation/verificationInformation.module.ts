import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VerificationInformationModuleBase } from "./base/verificationInformation.module.base";
import { VerificationInformationService } from "./verificationInformation.service";
import { VerificationInformationController } from "./verificationInformation.controller";
import { VerificationInformationResolver } from "./verificationInformation.resolver";

@Module({
  imports: [VerificationInformationModuleBase, forwardRef(() => AuthModule)],
  controllers: [VerificationInformationController],
  providers: [VerificationInformationService, VerificationInformationResolver],
  exports: [VerificationInformationService],
})
export class VerificationInformationModule {}
