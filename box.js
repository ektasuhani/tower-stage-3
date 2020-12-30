class Box{
   constructor(x,y){
   var options ={
  
    restitution:0,
    friction:1,
    density:1.2
}  
this.body=Bodies.rectangle(x,y,50,50,options);
this.width=50
this.height=50
this.visibility=255
World.add(world,this.body);
  
}
display(){
  console.log(this.body.speed)
  if(this.body.speed<11){
  
  
  push ();
 translate (this.body.position.x,this.body.position.y);
 rotate (this.body.angle );
   rectMode (CENTER);
  
   rect (0,0,50,50);
   pop ();
  }
  else{
    World.remove(world,this.body);
    this.visibility=this.visibility-5
  }
}
score(){
  if(this.visibility<0&&this.visibility>-105){
    score++
  }
}
}
