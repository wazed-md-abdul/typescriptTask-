export { }

type User = {
    id: number,
    username: string,
    email: string,
    age: number,

}
type NewUser = Omit<User, "id">
const users: User[] = []
let lastId: number = 0
function addUser(newUser: NewUser) {
    const user: User = {
        id: ++lastId,
        ...newUser
    }
    users.push(user)
}
addUser({ username: "saima", email: "[EMAIL_ADDRESS]", age: 20 })
addUser({ username: "wazed", email: "[EMAIL_ADDRESS]", age: 30 })
console.log(users)

// function removeUser(id: number) {
//     const index = users.findIndex(user => user.id === id)
//     if (index !== -1) {
//         users.splice(index, 1)
//     }
// }