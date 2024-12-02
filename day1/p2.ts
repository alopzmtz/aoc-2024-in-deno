const file = await Deno.readTextFile("./input.txt")

const right:number[] = []
const left:number[] = []

for (const line of file.split("\n")) {
    const [leftList, rightList] = line.split("   ")
    right.push(Number(rightList))
    left.push(Number(leftList))
}


const probability = left.map((value) => {
    const appearances = right.filter((val) => val === value).length
    return appearances * value
}).reduce((prev, curr) => prev + curr, 0)

console.log(probability)