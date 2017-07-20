import { Highlight } from './highlight';

export class Step {

  highlights: Array<Highlight> = [];

  constructor() {}

  addHighlight(highlight: Highlight) {
    this.highlights.push(highlight);
  }
}
