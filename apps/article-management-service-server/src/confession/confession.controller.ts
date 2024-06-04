import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConfessionService } from "./confession.service";
import { ConfessionControllerBase } from "./base/confession.controller.base";

@swagger.ApiTags("confessions")
@common.Controller("confessions")
export class ConfessionController extends ConfessionControllerBase {
  constructor(protected readonly service: ConfessionService) {
    super(service);
  }
}
