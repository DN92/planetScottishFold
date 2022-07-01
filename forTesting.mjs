import process from 'node:process'

process.on('exit', () => {
  console.log('EXITING!')
})



// console.log(process.env.JWT)
// console.log('end')
