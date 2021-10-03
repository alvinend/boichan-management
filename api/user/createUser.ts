import { User } from "../../models/User"
import { v4 as uuidv4 } from 'uuid'

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  // TODO Validation

  // Check User
  const checkUser = await User.findOne({ email })

  if (checkUser) {
    throw 'User Already Exists'
  }

  // Create User
  const user = new User({
    name,
    email,
    password,
    session: uuidv4()
  })

  await user.save()

  // Return Session
  return { 'session': user.session }

  // bcrypt.genSalt(10, (_, salt) => {
  //   bcrypt.hash(newUser.password, salt, (err, hash) => {
  //     if (err) throw err;
  //     newUser.password = hash;
  //     newUser
  //       .save()
  //       .then(resUser => res.json(resUser))
  //       .catch(error => console.log(error));
  //   })
  // })
}
