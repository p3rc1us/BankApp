
function User1(props) {
    // const person1 = {
    //     firstname: "Kervy",
    //     lastname: "Maniego",
    //     balance: "5000",
    // }
    return (
        <div className='userinfo'>
            <h1>{props.user.name}<i class="fa-solid fa-pencil"></i></h1>
            <h2>{props.user.age}</h2>
            <h2>{props.user.position}</h2>
            <h2>{props.user.accountNumber}</h2>
            <h2>{props.address}</h2><button type='add' id='addbtn'>Deposit</button> <button type='add' id='addbtn'>Withdraw</button> <button type='add' id='addbtn'>Edit</button>  
        </div>
        // <fieldset className="user1">
        //     <p>Balance: ${person1.balance}</p>
        //     <p>Client's Name: {person1.firstname} {person1.lastname}</p>
        //     
        // </fieldset>
    )
}

export default User1;