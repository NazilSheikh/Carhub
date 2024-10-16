import React from 'react'
import { Input } from '@/components/ui/input'

 {/* //we had pass the handleinput function to save the data in the form now we had pass same function inputfield and othercomponent also */}

//  NOW WE WANT THAT WHEN WE ARE RETURNING FROM EDIT TO AGAIN SUBMIT LISTING 
// SOME DEFAULT DATA THAT IS SELECTED SHOULD ALREADY REMAIN THERE THERE WE ARE ACCEPTING DEFAULT DATA 

function InputField({item ,handleInputChange ,carInfo} ) {
  return (
    <div>
      {/* to view on console waht we selected           onChange={(e)=>console(item.name , e.target.value)}/>*/}
      <Input type={item?.fieldType} name={item?.name} required={item?.required}

          defaultValue ={carInfo?.[item.name]}
          onChange={(e)=>handleInputChange(item.name , e.target.value)}
 />
      </div>
  )
}

export default InputField