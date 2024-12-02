const file = await Deno.readTextFile("./input.txt")

const right = []
const left = []

for (const line of file.split("\n")) {
    const [rightList, leftList] = line.split("   ")
    right.push(Number(rightList))
    left.push(Number(leftList))
}


const rightOrder = right.sort()
const leftOrder = left.sort()

let result = 0 

for (let i = 0; i < right.length; i++) {
    const distance = rightOrder[i] >= leftOrder[i] ?
        rightOrder[i] - leftOrder[i] :
        leftOrder[i] - rightOrder[i]

    result += distance
}

console.log(result)
