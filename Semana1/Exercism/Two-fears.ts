export function twoFer(name: string = 'you'): string {
    return `One for ${name}, one for me.`;
  }

  twoFer() // one for you  one for me
twoFer("Pepe") // one for pepe one for me
twoFer("") // one for  ,one for me 
