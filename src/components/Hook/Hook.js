import { useState } from "react";

const useStateInput = (defaultValue = null) =>{
    const [value, setValue] = useState(defaultValue);

    const onChange = val =>{
        setValue(val.target.value)
    }
    // const handleInputChange = val =>{
    //     setValue(val.target.value)
    // }

    return(
        // [value, handleInputChange]
        {
            value,
            onChange
        }
    )
}

export default useStateInput;