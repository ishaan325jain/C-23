class Ground{

constructor(x,y,w,h){
    var o = {
       isStatic : true 
    };

    this.body = Bodies.rectangle(x,y,w,h,o);
    World.add(world,this.body);
    this.height = h ; 
    this.width = w ; 
}


display(){

    var pos = this.body.position ;

   rectMode(CENTER);
   fill("brown");
   rect(pos.x,pos.y,this.width,this.height);
   }

}