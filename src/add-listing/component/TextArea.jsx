import { Textarea } from "@/components/ui/textarea"
import React from 'react'
                  //  NOW WE WANT THAT WHEN WE ARE RETURNING FROM EDIT TO AGAIN SUBMIT LISTING 
// SOME DEFAULT DATA THAT IS SELECTED SHOULD ALREADY REMAIN THERE THERE WE ARE ACCEPTING DEFAULT DATA and carinfo 

function TextArea({item , handleInputChange , carInfo}) {
  return (
    <div><Textarea 
    
    onChange={(e)=>handleInputChange(item.name , e.target.value)} required={item.required}
    defaultValue={carInfo?.[item.name]}
    /></div>
  )
}

export default TextArea

