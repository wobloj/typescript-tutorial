import { HasFormater } from "../interfaces/hasformater.js";

export class ListTemplate{

    constructor(private container: HTMLUListElement){}

    render(item: HasFormater, heading: string, position: 'start' | 'end'){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p  = document.createElement('p');

        h4.innerText = heading;
        li.append(h4);
        p.innerHTML = item.format();
        
        li.append(p);

        
        if(position === 'start'){
            this.container.prepend(li);
        }
        else{
            this.container.append(li);
        }
    }
}