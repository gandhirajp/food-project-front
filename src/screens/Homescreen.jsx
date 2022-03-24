import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import Error from '../components/Error'
import Filter from '../components/Filter'
import Loading from '../components/Loading'
import Pizza from '../components/Pizza'


function Homescreen() {

  const dispatch = useDispatch()

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer)

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])


  return (
    <div className='container-fluid '>
      {/* filter component */}
      <Filter /> 

      <div className="row justify-content-center">
     
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error='Something went wrong' />
        ) : ( 
          pizzas.map(pizza => {
            return <div className="col-md-3 m-3" key={pizza._id}>
             
                <Pizza pizza={pizza} />
             
            </div>
          })
        )}


      </div>
    </div>
  )
}

export default Homescreen