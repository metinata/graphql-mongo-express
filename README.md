Simple GraphQL integration on Express and MongoDB

Sample Query:

query{
  Users {
    _id
    name
    surname
    username
    email
    friends {
      username
      email
    }
  }
}
