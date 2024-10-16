
       // AFTER THIS JUST CREATING FAKE DATABASE FOR SEARCHED CARS BY USEING FAKER.DEV BECOUSE WE DID NOT HAVE DATABASE .
    //    npm install @faker-js/faker --save-dev

    // we are ALSO CREATING A COMPONENTS CALL AS SEARCH CAR .
    // generally faker have many option to create data of related field .
       import { faker } from "@faker-js/faker";
function createRandomCarList(){
    return{
     name:faker.vehicle.vehicle(),
     fuelType:faker.vehicle.fuel(),
     model:faker.vehicle.model(),
     type:faker.vehicle.type(),
      image:'https://t3.ftcdn.net/jpg/04/35/92/40/360_F_435924070_A2n5ZyQUF7nCRsYZj6SX1SAYOn5sggFh.jpg' ,
      miles:1000 ,
      gearType:'Automatic',
      price:faker.finance.amount({min:4000 , max:20000})
    } ;
}

// generating list random of cars ;
const carList = faker.helpers.multiple(createRandomCarList ,{
   count:7 
} )

export default
{
    carList
}