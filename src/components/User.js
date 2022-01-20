function User({ name, surname, isLoggedIn }) {
    return ( <
        h1 > { isLoggedIn ? `${name}` `${surname}` : "Giriş yapmadınız" } < /h1>
    )
}

export default User;