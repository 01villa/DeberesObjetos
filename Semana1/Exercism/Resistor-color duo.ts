const COLORS_CODE: any = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9
  }
  export function decodedValue(colors: Array<string>) {
    const firstColorCode = COLORS_CODE[colors[0]]
    const secondColorCode = COLORS_CODE[colors[1]]
    return (firstColorCode * 10) + secondColorCode
  } 