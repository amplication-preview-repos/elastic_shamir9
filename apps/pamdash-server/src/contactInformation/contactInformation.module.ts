import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContactInformationModuleBase } from "./base/contactInformation.module.base";
import { ContactInformationService } from "./contactInformation.service";
import { ContactInformationController } from "./contactInformation.controller";

@Module({
  imports: [ContactInformationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContactInformationController],
  providers: [ContactInformationService],
  exports: [ContactInformationService],
})
export class ContactInformationModule {}
