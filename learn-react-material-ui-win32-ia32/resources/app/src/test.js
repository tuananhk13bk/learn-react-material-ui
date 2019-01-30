const excercises = [
   {
     id: 'overhead-press',
     title: 'Overhead Press',
     description: 'Delts exercise...',
     muscles: 'shoulders'
   },
   {
     id: 'dips',
     title: 'Dips',
     description: 'Triceps exercise...',
     muscles: 'arms'
   },
   {
     id: 'barbell-curls',
     title: 'Barbell Curls',
     description: 'Biceps exercise...',
     muscles: 'arms'
   },
   {
     'id': 'bench-press',
     title: 'Bench Press',
     description: 'Chest exercise...',
     muscles: 'chest'
   },
   {
     id: 'pull-ups',
     title: 'Pull Ups',
     description: 'Back and biceps exercise...',
     muscles: 'back'
   },
   {
     id: 'deadlifts',
     title: 'Deadlifts',
     description: 'Back and leg exercise...',
     muscles: 'back'
   },
   {
     id: 'squats',
     title: 'Squats',
     description: 'Legs exercise...',
     muscles: 'legs'
   },
]

const muscles = [
  'shoulders', 'arms', 'chest', 'back', 'legs'
]
// const excerciseReducer = Object.entries(excercises.reduce((accum, current) => {
//    let key = current['muscles']
//    if (!accum[key])
//       accum[key] = []
//    accum[key].push(current)
//    return accum 
// }, {})
// )

// const myMap = excerciseReducer.map(([group, excercises]) => {
//    return group
// })
// console.log(excerciseReducer)
let obj = {
  name: 'michael',
  value: [1, 2]
}

obj = {
  ...obj,
  value: obj.value.push(3)
}

console.log(obj)