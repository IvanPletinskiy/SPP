import {NestFactory} from '@nestjs/core'
import {SubAppModule} from './module'

export default async function bootstrap () {
  return await NestFactory.create(SubAppModule)
}
