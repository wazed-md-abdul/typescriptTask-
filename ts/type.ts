type Users = {
    id: string
    name: string
    age: number
    isValide: boolean

}
const users: Users = {
    id: "1",
    name: "sami",
    age: 20,
    isValide: true
}

type Array2 = readonly [number, Number]; // tuple
const userss: Array2 = [1, 2]