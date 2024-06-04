import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConfessionServiceBase } from "./base/confession.service.base";

@Injectable()
export class ConfessionService extends ConfessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
