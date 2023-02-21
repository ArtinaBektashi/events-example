class Person{
    constructor(emri,mosha,gjinia,email){
        this.emri=emri;
        this.mosha=mosha;
        this.gjinia=gjinia;
        this.email=email;
    }

    getEmri(){
        return this.emri;
    }

    setEmri(newEmri){
        this.emri=newEmri;
    }

    getMosha(){
        return this.mosha;
    }

    setMosha(newMosha){
        this.mosha=newMosha;
    }
    getGjinia(){
        return this.gjinia;
    }
    setGjinia(newGjinia){
        this.gjinia=newGjinia;
    }

    getEmail(){
       return this.email
    }
    setEmail(newEmail){
        this.email=newEmail
    }

    introduce(){
        return [this.emri,this.mosha,this.gjinia,this.email,]
    }
}

module.exports=Person;