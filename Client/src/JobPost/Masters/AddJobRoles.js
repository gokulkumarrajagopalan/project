import React ,{ useState,useEffect }from 'react';

const AddJobRoles = () => {

    const [JobRole , setJobRole] = useState('');
    const [error ,seterror] = useState(null);

    const handleInputChange = (event) =>{
        setJobRole(event.value.newJobRole);

    }

    const handleSaveJobRole = () =>{
        
        if (newJobRole.trim() === ''){

            seterror("Please Enter Job Role");
            return;
        }
    }


return(
    <>
    <h2> Add Job Roles </h2>

    <h5>Enter the Job Role</h5>
    <input type ="text" value= {newJobRole} onChange={handleInputChange}></input>

    <button text="Save" onClick={handleSaveJobRole}></button>

    {error &&  <p>{error}</p>}
    </>
)

}

export default AddJobRoles;