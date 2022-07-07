const User = ({ user }) => {
    return (
        <div>
            { Object.entries(user).map(([key, val], i) => <p key={i}>{ key }: { val }</p>)}
        </div>
    )
}

export default User