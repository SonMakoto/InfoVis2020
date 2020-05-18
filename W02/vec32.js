class Vec3
{
constructor(x,y,z)
{
this.x=x;
this.y=y;
this.z=z;
}
add(v){
this.x +=v.x;
this.y +=v.y;
this.z +=v.z;
return this;
}
sum(){
return this.x+this.y+this.z;
}
min(){
return Math.min(this.x,this.y,this.z);
}
max(){
return Math.max(this.x,this.y,this.z);
}
mid(){
let tx=this.x;
let ty=this.y;
let tz=this.z;
let mid;
if(tx!=Math.max(this.x,this.y,this.z)&&tx!=Math.min(this.x,this.y,this.z))
{mid=tx;
}
if(ty!=Math.max(this.x,this.y,this.z)&&ty!=Math.min(this.x,this.y,this.z))
{
mid=ty;
}
if(tz!=Math.max(this.x,this.y,this.z)&&tz!=Math.min(this.x,this.y,this.z))
{
mid=tz;
}
return mid;
}
}