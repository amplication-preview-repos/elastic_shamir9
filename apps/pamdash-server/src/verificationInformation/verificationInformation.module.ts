import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VerificationInformationModuleBase } from "./base/verificationInformation.module.base";
import { VerificationInformationService } from "./verificationInformation.service";
import { VerificationInformationController } from "./verificationInformation.controller";

@Module({
  imports: [VerificationInformationModuleBase, forwardRef(() => AuthModule)],
  controllers: [VerificationInformationController],
  providers: [VerificationInformationService],
  exports: [VerificationInformationService],
})
export class VerificationInformationModule {}
