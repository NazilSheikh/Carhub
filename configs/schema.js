// backup schema creating :

// the file which is not required we are puttin not NULL there ok 
// this is copying from  carDetails.jsx 
// this code was also in docs of drizzle orm :

// import {  pgTable , serial, varchar } from "drizzle-orm/pg-core";

// export const CarListing = pgTable('carListing',{
//     id:serial('id').primaryKey(),  // it is unique ki 
//     listingTitle:varchar('listingTitle'),     // type is char and required = true tho not null see in carDETAILS.JSX
//      tagline:varchar('tagline'),   // no required is given 
//      originalPrice:varchar('originalPrice'),  
//      sellingPrice:varchar('sellingPrice').notNull(),  
//      category:varchar('category').notNull(),  
//      condition:varchar('condition').notNull(),  
//      type:varchar('type').notNull(),  
//         make:varchar('make').notNull(),  
//         model:varchar('model').notNull(),  
//         year:varchar('year').notNull(),  
//         driveType:varchar('driveType').notNull(),  
//         transmission:varchar('transmission').notNull(),  
//         fuelType:varchar('fuelType').notNull(),  
//         mileage:varchar('mileage').notNull(),  
//         engineSize:varchar('engineSize'),  
//         cylinder:varchar('cylinder'),  
//         color:varchar('color').notNull(),  
//         door:varchar('door').notNull(),  
//         vin:varchar('vin'),  
//         offerType:varchar('offerType') ,  
//         listingDescription:varchar('listingDescription').notNULL(),  
      
 

// })

// Import required modules from drizzle-orm/pg-core

import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

// Define the CarListing table schema
export const CarListing = pgTable('carListing', {
    id:serial('id').primaryKey(),  // Primary key with unique id
    listingTitle:varchar('listingTitle').notNull(),  // Optional field
    tagline:varchar('tagline'),  // Optional field
    originalPrice:varchar('originalPrice'),  // Optional field
    sellingPrice:varchar('sellingPrice').notNull(),  // Required field
    category:varchar('category').notNull(),  // Required field
    condition:varchar('condition').notNull(),  // Required field
    type:varchar('type').notNull(),  // Required field
    make:varchar('make').notNull(),  // Required field
    model:varchar('model').notNull(),  // Required field
    year:varchar('year').notNull(),  // Required field
    driveType:varchar('driveType').notNull(),  // Required field
    transmission:varchar('transmission').notNull(),  // Required field
    fuelType:varchar('fuelType').notNull(),  // Required field
    mileage:varchar('mileage').notNull(),  // Required field
    engineSize:varchar('engineSize'),  // Optional field
    cylinder:varchar('cylinder'),  // Optional field
    color:varchar('color').notNull(),  // Required field
    door:varchar('door').notNull(),  // Required field
    vin:varchar('vin'),  // Optional field
    offerType:varchar('offerType'),  // Optional field
    listingDescription:varchar('listingDescription').notNull(),  // Required field
//   adding new column for feature so that data can be saved in our hird part backend drizzle  ::
// here when you run the drizzle orm there at last you will se features section added BOOM |||
features:json('features') ,

// IT IS IMPORTENT THAT WHEN EVER WE CREATE A NEW SCHEMA WE NEED TO PUSH IT IN DB:PUSH
// we will be storing the email or user data who created the listing 
createdBy:varchar('createdBy').notNull(),
// poston is for at which data and time user posted data we are generally installing the npm i moments library which will us to format correct date and time .
postedOn:varchar('postedOn'),

// /creating two more column to show waht is username and its image in cardetail section at last 
userName:varchar('userName').notNull().default('Nazil Sheikh'),
userImageUrl:varchar('userImageUrl').default('https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg')

// userName:varchar('userName').notNull(),
// userImageUrl:varchar('userImageUrl')


})



// WE WOULD AT LAST FIRST GO TO UPLOADIMAGES , INDEX.JS , FIREBASE 
// AT LAST WE ARE MAKING NEW SCHEMAA  NEW TABLE FOR UPLOADING IMAGES TO DRIZZLE ORM : 
export const CarImages=pgTable('carImages',{
    id:serial('id').primaryKey(),
    imageUrl:varchar('imageUrl').notNull(),
    CarListingId:integer('carListingId').notNull().references(()=>CarListing.id)
})

