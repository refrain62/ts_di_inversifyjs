import { injectable } from 'inversify'
import User, { IDatabase } from './user'

@injectable()
export default class Database implements IDatabase {
  saveUser(user: User) {
    console.log(`Saving user ${user.name} to the database with Inversify`)
  }
}

