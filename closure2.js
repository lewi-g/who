function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;

  return function (location){
    warningCounter += 1;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const deerCrossing = hazardWarningCreator('Deer crossing Road');

rocksWarning('mountain');
rocksWarning('lake');

//hazardWarningCreator('Rocks on the Road');

examples to help understand above
function makeNoise(noiseType, noise) {
  console.log('Someone made a noise of', noiseType, 'and it sounded like:', noise)
}

makeNoise('Shout', 'Hooray!')
makeNoise('Shout', 'Ack!')
makeNoise('Shout', 'Yarg!')

// ----------------------------

// The factory creates new noise functions.
function noiseMaker(noiseType) {
  return function makeNoise(noise) {
    console.log('Someone made a noise of', noiseType, 'and it sounded like:', noise)
  }
}

// Shout stores the function created by the factory.
const shout = noiseMaker('Shout')

shout('Hooray!')
shout('Ack!')
shout('Yarg!')

const groan = noiseMaker('Groan')

groan('Ugh!')

// ----------------------------