export function decodedValue(color: string): number {
  if (color === 'black') return 0;
  if (color === 'brown') return 1;
  if (color === 'red') return 2;
  if (color === 'orange') return 3;
  if (color === 'yellow') return 4;
  if (color === 'green') return 5;
  if (color === 'blue') return 6;
  if (color === 'violet') return 7;
  if (color === 'grey') return 8;
  if (color === 'white') return 9;
  return -1;
}

export function decodedResistorValue(colors: string[]): string {
  let code = '';
  const LIMIT = 2;
  for (let index = 0; index < LIMIT; index++) {
    code += decodedValue(colors[index]);
  }
  // if there is a leading zero, it is deleted
  code = String(Number(code));
  // Calculating the size
  let size = decodedValue(colors[2]);
  if (code[1] === '0') {
    size++;
    code = code[0];
  }
  if (size < 3) {
    code = addZeros(size, code);
    code += ' ohms';
  } 
  if (size >= 3 && size < 6) {
    code = addZeros(size - 3, code);
    code += ' kiloohms';
  }
  if (size >= 6 && size < 9) {
    code = addZeros(size - 6, code);
    code += ' megaohms';
  }
  if (size >= 9) code += ' gigaohms';
  return code;
}

const addZeros = (size: number, code: string) => {
  if (size >= 1 && size <= 2) {
    let numberOfZeros = 0;
    while (numberOfZeros < size) {
      code += '0';
      numberOfZeros++;
    }
  }
  return code;
}