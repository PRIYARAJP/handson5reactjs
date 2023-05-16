import React, {useState} from 'react'

const Higher = (Wrapcompo) => {
    function Myhoc(){
        const [Value, setValue] = useState(0);
        const handlesubmit=()=>{
            setValue(Value+1)
        }
        return (
            <div>
                <Wrapcompo Value={Value} submit={handlesubmit}/>
            </div>
        )

    }
    return Myhoc

}

export default Higher