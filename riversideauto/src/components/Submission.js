
const Submission = ({setSubmit}) => {

    return(
        <div className="pagecontainer">
         <h1 className="header">
          Services
         </h1>

        <div className="body">
         <div>
             Thank you !
         </div>
         <br/>
         <div>
             The team over at RAD has been notified
         </div>
         <br/>
         <div>
             We'll get back with you as soon as we can !
             <br/>
             <br/>
             <button class="return" onClick={() => setSubmit(false)}>Return to Homepage</button>
         </div>

        

        </div>
        </div>

    )

}

console.log()

export default Submission;