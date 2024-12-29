// export default function Todo({Task}) {
//   return (
//     <li>Task: {Task}</li>
//   )
// }


//conditional rendering using if else
// export default function Todo({Task, isDone}) {
//   if (isDone) {
//     return <li>finished: {Task}</li>
//   }
//   return <li>Worked More: {Task}</li>
// }


// conditional rendering using ternary operator
// export default function Todo ({Task, isDone}) {
//   return (
//     <li> {isDone? 'Finished': 'Practices More'} :{Task}</li>
//   )
// }



//conditional rendering using && operator (if true)
// export default function Todo ({Task, isDone}){
//   return (
//     <li>{isDone && 'Well Done'} :{Task}</li>
//   )
// }

//conditional rendering using || operator (if false)
export default function Todo({Task, isDone}){
  return (
    <li> {isDone || "More Practices"} : {Task}</li>
  )
}