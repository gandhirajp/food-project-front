import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'


export default function Userslist() {

  const dispatch = useDispatch()
  const usersstate = useSelector((state) => state.getAllUsersReducer)
  const { users, error, loading } = usersstate;

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <div>
            <h2>Users List</h2>
            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong' />)}

            <table className='table '>
                <thead className='table-dark'>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {users && users.map((user,index) => {
                        return <tr>
                            <td>{index +1}</td>
                            <td>{user.name}</td>
                           
                            <td>{user.email }</td>
                           
                        </tr>
                    })}
                </tbody>
                <thead className='table-dark'>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        
                    </tr>
                </thead>
            </table>

        </div>
  )
}
