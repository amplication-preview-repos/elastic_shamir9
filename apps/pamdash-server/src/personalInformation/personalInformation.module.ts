import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PersonalInformationModuleBase } from "./base/personalInformation.module.base";
import { PersonalInformationService } from "./personalInformation.service";
import { PersonalInformationController } from "./personalInformation.controller";
import { PersonalInformationResolver } from "./personalInformation.resolver";

@Module({
  imports: [PersonalInformationModuleBase, forwardRef(() => AuthModule)],
  controllers: [PersonalInformationController],
  providers: [PersonalInformationService, PersonalInformationResolver],
  exports: [PersonalInformationService],
})
export class PersonalInformationModule {}
