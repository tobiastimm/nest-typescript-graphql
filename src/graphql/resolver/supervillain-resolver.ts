import { Resolver, Query } from '@nestjs/graphql'
import { SupervillainService } from 'src/supervillain/supervillain.service'

@Resolver('Supervillain')
export class SupervillainResolver {
  constructor(private readonly supervillainService: SupervillainService) {}

  @Query()
  async allSupervillains() {
    return await this.supervillainService.findAll()
  }
}
