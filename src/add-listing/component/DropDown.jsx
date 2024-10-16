
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
                    //  NOW WE WANT THAT WHEN WE ARE RETURNING FROM EDIT TO AGAIN SUBMIT LISTING 
// SOME DEFAULT DATA THAT IS SELECTED SHOULD ALREADY REMAIN THERE THERE WE ARE ACCEPTING DEFAULT DATA and carinfo 

function DropDown({ item ,handleInputChange , carInfo} ) {
  return (
    <div>
{/* it means we need to fiil the required items */}
      <Select  onValueChange={(value)=>handleInputChange(item.name , value)} required={item.required}
          defaultValue ={carInfo?.[item?.name]}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={carInfo?.[item?.name]?carInfo?.[item?.name]:item.label} />
        </SelectTrigger>
        <SelectContent>
          {
            item?.options?.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))
          }
        </SelectContent>
      </Select>

    </div>
  )
}

export default DropDown
