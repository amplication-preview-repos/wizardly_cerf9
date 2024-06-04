import { Module } from "@nestjs/common";
import { ConfessionModuleBase } from "./base/confession.module.base";
import { ConfessionService } from "./confession.service";
import { ConfessionController } from "./confession.controller";
import { ConfessionResolver } from "./confession.resolver";

@Module({
  imports: [ConfessionModuleBase],
  controllers: [ConfessionController],
  providers: [ConfessionService, ConfessionResolver],
  exports: [ConfessionService],
})
export class ConfessionModule {}
