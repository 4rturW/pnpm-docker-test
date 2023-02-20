import { Injectable } from '@nestjs/common';
import { helloBitches } from 'ntest';

@Injectable()
export class AppService {
  getHello(): string {
    // return 'Hello World! x';
    return helloBitches;
  }
}
