import React from 'react';

function User(props) {

    console.log(props)

    props.user.sort((a, b) => a.lastname.localeCompare(b.lastname));

    return(

        <>
            <div style={{margin:"20px", color:"green"}}>Users: {props.user.length}</div>

        { props.user.length ? 
           ( Object.keys(props.user).map((x, i) => (
                <ul key={i}>
                    <li>{props.user[x].name} {props.user[x].lastname}</li>    
                </ul>
            ))
           ) 
           : 
           (
               <div>
                   Users: 0
               </div>
           )
        }
        </>
    )
};

export default User;