export class PolygonData {
  points: number[][];
  annotation: number;
  description: string;
  constructor(points: number[][], annotation: number, description: string) {
    this.points = points;
    this.annotation = annotation;
    this.description = description;
  }

  toString() {
    let str = '{';
    str += '\'points\':[';
    for (let i = 0; i < this.points.length; i++) {
      str += '[' + this.points[i][0] + ',' + this.points[i][1] + ']';
      if (i !== this.points.length - 1) {
        str += ',';
      }
    }
    str += '],\'annotation\':\'';
    str += this.annotation;
    str += '\',\'description\':\'';
    str += this.description;
    str += '\'}';
    return str;
  }


}
