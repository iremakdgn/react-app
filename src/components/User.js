import PropTypes from 'prop-types';

function User({ name, surname, isLoggedIn, friends }) {
    return (
    <> 
        <h1> { isLoggedIn ? `${name}` `${surname}` : "Giriş yapmadınız" } </h1>
        {
            friends.map((friend,index)=> <div key={index}>{index}-{friend}</div>)
        }
    </>
    )
}

User.prototypes={
    name:PropTypes.string,
    surname:PropTypes.string,
    isLoggedIn:PropTypes.bool,
    friends:PropTypes.array
}

export default User;