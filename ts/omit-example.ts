export { }

type User = {
    id: number,
    username: string,
    email: string,
    age: number,

}
const users: User[] = []
let lastId: number = 0
function addUser(username: string, email: string, age: number) {
    const user: User = {
        id: ++lastId,
        username,
        email,
        age,
    }
    users.push(user)
}
addUser("sami", "[EMAIL_ADDRESS]", 20)
console.log(users)

// function removeUser(id: number) {
//     const index = users.findIndex(user => user.id === id)
//     if (index !== -1) {
//         users.splice(index, 1)
//     }
// }