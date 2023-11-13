import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detalhes () {
    
    const params = useParams()
    console.log(params.id)
    return (
        <div>
          Detalhes {params.id}
        </div>
    )
}

export default Detalhes;