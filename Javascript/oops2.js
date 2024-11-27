//products {id,name,price,quantity, function to display details}

class product{
    constructor(id,name,price,quantity){
        this.productid=id
        this.productName=name
        this.productPrice=price
        this.productQuantity=quantity
    }

    displayProduct(){
        console.log(`--------------Poduct Details---------------
            id:${this.productid}
            Name:${this.productName}
            Price:${this.productPrice}
            Quantity:${this.productQuantity}
            `);
        
    }
}

//object

const product1= new product(100,"car",200000,1)
product1.displayProduct()

const product2= new product(101,"dress",5000,3)
product2.displayProduct()