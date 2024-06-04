import * as graphql from "@nestjs/graphql";
import { ConfessionResolverBase } from "./base/confession.resolver.base";
import { Confession } from "./base/Confession";
import { ConfessionService } from "./confession.service";

@graphql.Resolver(() => Confession)
export class ConfessionResolver extends ConfessionResolverBase {
  constructor(protected readonly service: ConfessionService) {
    super(service);
  }
}
