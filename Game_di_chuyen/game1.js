
class Hero{
    image;
    top;
    left;
    size;

    constructor(image, top, left, size){
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }
    getHeroElement(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    moveRight(){
        this.left += 1;
        console.log("ok: " + this.left);
    }
    moveDown(){
        this.top += 1;
    }
    moveleft(){
        this.left -= 1;
    }
    moveup(){
        this.top -= 1;
    }
}

let hero = new Hero('anh/anh.png', 20, 30, 100);
function start(){
    if(hero.left < window.innerWidth - hero.size && hero.top <= 20){
        hero.moveRight();
        requestAnimationFrame(start);
    }else if(hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth - hero.size  ){
        hero.moveDown()
        requestAnimationFrame(start);
    }else if(hero.top >= window.innerHeight - hero.size && hero.left > 30 ){
        hero.moveleft()
        requestAnimationFrame(start);
    }else if(hero.top > 20){
        hero.moveup();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 70000)
}

start();