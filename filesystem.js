const fs = require('fs');

//   fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data)
// })

console.log(fs.readFileSync('file.txt').toString())

// console.log(fs.writeFile("file2.txt", "This is my seocnd file.", () => {
//     console.log("File run successfully.")
// }))

console.log(fs.writeFileSync("file2.txt", "This is my modified second file."))
console.log("finished !!!")