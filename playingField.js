const WHITE = 0;
const BLACK = 1;

class PlayingField {
  constructor(initPlayingField) {
    this.field = initPlayingField.reduce((acc, row, rowIndex) => {
      for (const columnIndex in row) {
        acc[[rowIndex, columnIndex]] = { touched: false, colour: row[columnIndex] };
      }

      return acc;
    }, {});
  }

  initialize(coord) {
    if (!this.field[coord]) this.field[coord] = { touched: false, colour: WHITE };
  }

  isWhiteField(coord) {
    return this.field[coord].colour === WHITE
  }

  changeColour(coord) {
    if (this.field[coord].touched) return;

    this.field[coord].colour = (this.field[coord].colour + 1) % 2;
  }

  setFieldToTouched(coord) {
    this.field[coord].touched = true;
  }

  extractCropCoords() {
    let minX = Number.MAX_SAFE_INTEGER, minY = Number.MAX_SAFE_INTEGER, maxX = 0, maxY = 0;
    for (var cord in this.field) {
      if (this.field[cord].colour === BLACK) {
        const xCoord = Number(cord[0]);
        const yCoord = Number(cord[2]);
        if (minX > xCoord) minX = xCoord;
        if (minY > yCoord) minY = yCoord;
        if (maxX < xCoord) maxX = xCoord;
        if (maxY < yCoord) maxY = yCoord;
      }
    }

    return [minX, minY, maxX, maxY];
  }

  crop() {
    const [startX, startY, endX, endY] = this.extractCropCoords();
    const croppedField = [];

    for (var i = startX; i <= endX; i++) {
      let row = [];
      for (var j = startY; j <= endY; j++) {
        const colour = this.field[[i, j]] && this.field[[i, j]].colour;
        row.push(colour || WHITE);
      }
      croppedField.push(row);
    }

    return croppedField;
  }
};

module.exports = PlayingField;
