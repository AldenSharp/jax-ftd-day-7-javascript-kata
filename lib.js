/*
  TODO: Implement empty function bodies according to their requirements
*/

'use strict'

function createGrowthModel (lengthToWingspan, leavesEatenToWeight) {
  return {
    lengthToWingspan,
    leavesEatenToWeight
  }
}

function averageGrowthModel (growthModels) {
  if (growthModels.length === 0) {
    return undefined
  }
  let result = growthModels.reduce(
    (result, elem) => createGrowthModel(
      result['lengthToWingspan'] + elem['lengthToWingspan'],
      result['leavesEatenToWeight'] + elem['leavesEatenToWeight']
    ),
    createGrowthModel(0, 0)
  )
  result['lengthToWingspan'] /= growthModels.length
  result['leavesEatenToWeight'] /= growthModels.length
  return result
}

module.exports = {
  createGrowthModel,
  averageGrowthModel
}

/*
function reduce (arr, func, init) {
  let result = init
  for (let elem of arr) {
    result = func(result, elem)
  }
  return result
}
*/
