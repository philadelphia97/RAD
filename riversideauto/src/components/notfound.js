import { Link, useParams } from "react-router-dom"




export default function NotFound(){

    const {id} = useParams()

    return (
        <>

    <h1 className="page">so like.. {id} isn't a page..</h1>
        </>
    )

    
}