//  this is super basic and assumes body pixel size is 16px (1rem = 16px)

export default function emRemToPix(input, base = 16) {
  if (typeof input === 'number') return input
  if (input.length < 2) {
    console.warn('emRemToPix received bad args')
    return input
  }
  const postSplit = input.split('')
  let currIdx = 0
  let numSeg = true
  let prefix = ''
  let suffix = ''

  for(let i = 0; i < postSplit.length; i++) {
    if(numSeg) {
      currIdx = i
      if (!isNaN(parseInt(postSplit[i]))) {
        prefix += postSplit[i]
      } else {
        numSeg = false
        suffix += postSplit[i]
      }
    } else {
      suffix += postSplit[i]
    }
  }
  if(!['em', 'rem'].includes(suffix) || prefix.length === 0) {
    console.warn('emRemToPix received bad args')
    return input
  }
  return parseInt(prefix) * base
}
