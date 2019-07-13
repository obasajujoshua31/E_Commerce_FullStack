import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsService {
  getHello(): string {
    return 'Hello';
  }

  findById(id: number): object {
    return {
      id,
      firstName: 'Joshua',
    };
  }
}
