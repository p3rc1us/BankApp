
function User1(props) {

    return (
        <fieldset className='userinfo'>
            <h2>Client's Name:{props.user.name}</h2>
            <h2>{props.user.balance}</h2>
            <h2>{props.user.accountNumber}</h2>
            <button type='add' id='addbtn'>Deposit</button> <button type='add' id='addbtn'>Withdraw</button> <button type='add' id='addbtn'>Edit</button>  
        </fieldset>
    )
}

export default User1;