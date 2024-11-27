class parent{
    showBike(){
        console.log("Bike is splender");
        
    }
}

class child extends parent{
    showBike(){
        console.log("Bike is duke");
        
    }
}

const bike=new child()
bike.showBike()