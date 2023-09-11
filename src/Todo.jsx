// normal task assigning
// export default function Todo({task, isDone}) {
//   return (
//     <li>Task 1: {task}</li>
//   )
// }

// way 1 (if else)
// Conditional Rendering
// export default function Todo({taskNumber, task, isDone}) {
//   if(isDone) {
//     return (
//       <li style={{textDecoration: 'line-through'}}>Task {taskNumber}: {task}</li>
//     )
//   } else {
//     return (
//       <li>Task {taskNumber}: {task}</li>
//     )
//   }
// }

// way 2 (if else shortcut)
// Conditional Rendering
// export default function Todo({taskNumber, task, isDone}) {
//   if(isDone) {
//     return (
//       <li style={{textDecoration: 'line-through'}}>Task {taskNumber}: {task}</li>
//     )
//   }
//   return (
//     <li>Task {taskNumber}: {task}</li>
//   )

// }

// way 3 (ternary operator)
// export default function Todo({taskNumber, task, isDone}) {
//   const textDecoration = isDone ? 'line-through' : 'none';
//     return (
//       <li style={{textDecoration}}>
//         Task {taskNumber}: {task} - {isDone?'Completed':'Work on'}</li>
//     )
//   }

// way 4 (&& operator)
// export default function Todo ({taskNumber, task, isDone}) {
//   return (
//     <li>Task {taskNumber}: {task} {isDone && '- Done'}</li>
//   )
// }

// way 5 (|| operator)
// export default function Todo ({taskNumber, task, isDone}) {
//   return (
//     <li>Task {taskNumber}: {task} {isDone || '- Do it!'}</li>
//   )
// }

// way 6
export default function Todo({taskNumber, task, isDone}) {
  let listItem;
    if(isDone) {
      listItem = <li style={{textDecoration: 'line-through'}}>Task {taskNumber}: {task}</li>
      return listItem;
    }
    listItem = <li>Task {taskNumber}: {task}</li>
    return listItem;
  }