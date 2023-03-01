interface Shape{
    name:string,
    color:string
}

class Rectangle implements Shape{
    width:number;
    height:number;
    name:string;
    color:string;
    constructor(name:string,color:string,width:number,height:number){
        this.width=width;
        this.height=height;
        this.name=name;
        this.color=color;
    }
    area():number{
        return this.height*this.width;
    }
}

class Circle implements Shape{
    radius:number;
    color:string;
    name:string;

    constructor(color:string,name:string,radius:number){
        this.radius=radius;
        this.color=color;
        this.name=name;
    }

    area():number{
        return Math.PI*Math.pow(this.radius,2)
    }
}
const rec1=new Rectangle('rec','blue',10,3)
console.log(rec1);
console.log(rec1.area())
const circle1=new Circle('red','circle',1.3);
console.log(circle1);
console.log(circle1.area())

