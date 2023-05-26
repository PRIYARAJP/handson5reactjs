import React, {useState} from 'react'

const Higher = (Wrapcompo) => {
    function myop(){
        const [Value, setValue] = useState(0);
        const submiting=()=>{
            setValue(Value+1)
        }
        return (
            <div>
                <Wrapcompo Value={Value} submit={submiting}/>
            </div>
        )

    }
    return myop

}

export default Higher