import { inject, injectable } from 'inversify';
import { TYPES } from './types';

export interface IDatabase {
  saveUser(user: User): void;
}

@injectable()
export default class User {
  userId: number = 0
  name: string = 'taro'

  constructor(
    @inject(TYPES.IDatabase) private database: IDatabase,
  ) {
    this.userId = 1
    this.name = 'taro'
  }

  saveUser() {
    if (this.userId) {
      this.database.saveUser(this)
    }
  }
}
