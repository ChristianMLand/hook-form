import User from "./User"

const UserList = ({ users }) => {
    return <>{ users.map((user, i) => <User user={ user } />) }</>
}

export default UserList