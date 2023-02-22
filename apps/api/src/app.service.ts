import { Injectable } from '@nestjs/common';
import { IUser } from '@gob/test';

@Injectable()
export class AppService {
  getHello(): string {
    const user: IUser = {
      name: 'Artur',
      surname: 'Woźniak',
    };
    // return 'Hello World! x';
    return JSON.stringify(user);
    // return test;
  }
}
