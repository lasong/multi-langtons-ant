fs = require('fs');
const Ant = require('./ant');
const PlayingField = require('./playingField');

module.exports.run = function(fileName, iterations, verbose) {
  const startingConditions = require(`./${fileName}`);

  const ants = startingConditions.ants.map(ant => new Ant(ant.x, ant.y, ant.orientation));
  const playingField = new PlayingField(startingConditions.playingfield);
  let result = [];

  for (let i = 1; i <= iterations; i++) {
    for (let ant of ants) {
      const coord = [ant.x, ant.y];
      playingField.initialize(coord);

      playingField.isWhiteField(coord) ? ant.turnLeft() : ant.turnRight();
      playingField.changeColour(coord);

      playingField.setFieldToTouched(coord);
      ant.move();
    }

    if (verbose) result.push(outputResult(ants, playingField));
  }

  result.push(outputResult(ants, playingField));
  console.log(JSON.stringify(verbose ? result : result[0]));
};

let outputResult = function(ants, playingField) {
  [startX, startY, endX, endY] = playingField.extractCropCoords();

  const adjustedAnts = ants.map(ant => {
    return { x: ant.adjustX(startX), y: ant.adjustY(startY), orientation: ant.orientation };
  });

  return { ants: adjustedAnts, playingfield: playingField.crop() };
};
