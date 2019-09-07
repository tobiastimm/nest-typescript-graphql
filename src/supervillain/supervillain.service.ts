import supervillains from 'supervillains'
import { Injectable } from '@nestjs/common'
import { Supervillain } from '../graphql'

@Injectable()
export class SupervillainService {
  findAll(): Supervillain[] {
    return supervillains.all.map((entry: string, index: number) => ({
      id: index,
      name: entry,
    }))
  }
}
