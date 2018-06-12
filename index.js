// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(begin, end) {
  if (begin < end) {
    return (end-begin) * 264;
  } else {
    return (begin-end) * 264;
  }
}

function calculatesFarePrice() {

}
