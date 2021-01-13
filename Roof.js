class Roof{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(400,120,400,20,options);

 }
    display(){
        var pos = this.body.position;

        fill("grey");
        rect(pos.x,pos.y,400,20);

        
    }
}
