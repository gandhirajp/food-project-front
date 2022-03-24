import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import Error from '../components/Error'
// import Filter from '../components/Filter'
import Loading from '../components/Loading'
import { deletePizza } from '../actions/pizzaActions'
import { Link } from 'react-router-dom'

export default function Pizzaslist() {

    const dispatch = useDispatch()
    const pizzasstate = useSelector((state) => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzasstate;

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (
        <div>
            <h2>Pizzas List</h2>
            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong' />)}

            <table className='table '>
                <thead className='table-dark'>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {pizzas && pizzas.map((pizza,index) => {
                        return <tr>
                            <td>{index +1}</td>
                            <td>{pizza.name}</td>
                            <td>
                                Small : {pizza.prices[0]['small']}<br/>    
                                Medium : {pizza.prices[0]['medium']}<br/>  
                                Large : {pizza.prices[0]['large']}
                            </td>
                            <td>{pizza.category}</td>
                            <td>
                                <i className='fa fa-trash m-1' onClick={()=>{dispatch(deletePizza(pizza._id))}}></i>
                                <Link to={`/admin/editpizza/${pizza._id}`}><i className='fa fa-edit m-1'></i></Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}
