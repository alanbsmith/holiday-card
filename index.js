
import {generateCard}  from './src/treeArt.js';

export function printCard() {
  generateCard().forEach(line => {
    console.log(line);
  }) 
}
