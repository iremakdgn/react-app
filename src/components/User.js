import PropTypes from 'prop-types';

function User({ name, surname, age, isLoggedIn, friends, address }) {
    return (
    <> 
        <h1> { isLoggedIn ? `${name} ${surname} ${age}`  : "Giriş yapmadınız" } </h1>
        {
            friends.map((friend,index)=> <div key={index}>{index}-{friend}</div>)

            
        }
        {address.title} {address.zip}
    </>
    )
}

User.prototypes={
    name:PropTypes.string.isRequired, //prop tiplerinde zorunlu alanları belirlemek için isrequired
    surname:PropTypes.string,
    age:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    isLoggedIn:PropTypes.bool,
    friends:PropTypes.array,
    address: PropTypes.shape({
        title:PropTypes.string,
        zip:PropTypes.number
    })
}

User.defaultProps={ isLoggedIn:false}
   


export default User;

//oneoftype: bir propda birden fazla veri tipi göndermek için