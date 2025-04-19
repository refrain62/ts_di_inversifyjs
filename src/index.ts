import container from './inversify.config';

import { TYPES } from "./types";
import User from "./user";

const user = container.get<User>(TYPES.User)

user.userId = 100
user.name = "hanako"
user.saveUser()
// => Saved hanako! with inversify
