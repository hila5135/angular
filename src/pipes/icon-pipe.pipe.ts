import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconPipe',
  standalone: true
})
export class IconPipePipe implements PipeTransform {
    // private iconMapping: { [key: string]: string } = { 
    //   'a':'😊', 'b':'😇',
    //   'c':'🙂','d':'🙃','e':'😉','f':'😍','g':'🥰','h':'😘','i':'😣',
    //   'j':'😖','k':'😩','l':'🥺','m':'😢' , 'n':'😮' ,'o':'😲','q':'🥱',
    //   'r':'😴','s':'🤤','t':'😪','u':'😷','v':'🤒','w':'🤕',
    //   'x':'😯','y':'😦','z':'😧'
    // }

    icons:{[key:string]:string}={ 
      happy: '😊',
      sad: '😢',
      love: '❤️',
      angry: '😡',
      star: '⭐',
      thumbsUp: '👍',
      thumbsDown: '👎',
      party: '🥳',
      sun: '☀️',
      moon: '🌙',
      cloud: '☁️',
      rain: '🌧️',
      snow: '❄️',
      fire: '🔥',
      heart: '💖',
      music: '🎵',
      food: '🍔',
      drink: '🥤',
      car: '🚗',
      airplane: '✈️',
      book: '📚',
      clock: '⏰',
      phone: '📱',
      laptop: '💻',
      money: '💰',
      shopping: '🛍️',
      gift: '🎁',
      trophy: '🏆',
      tree: '🌳',
      flower: '🌸',
      bike: '🚲',
    };
    transform(value: string): string{
    //   let result =''
    // for (let i = 0; i < value.length; i++) {
    //   const currentchar = value[i]
    //   result += this.iconMapping[currentchar] || currentchar
    // }
    // return result;
    return this.icons[value]||'not found'
  }
}
