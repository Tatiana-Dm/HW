import React from "react";

const Users = ({ user }) => (
    <li>
        firstName: {user.firstName} , lastName: {user.lastName}, fullName: {user.firstName + ' ' + user.lastName} , age: {user.age + 5} , job: {user.job} 
    </li>
)

export default Users; 