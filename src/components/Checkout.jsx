import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch } from 'react-redux'
import { placeOrder } from '../actions/orderActions'

// order status 

import { useSelector } from 'react-redux'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'

// order status 

export default function Checkout({ subtotal }) {
  // order status

  const orderstate=useSelector((state)=>state.placeOrderReducer)
  const  {loading,error,success}=orderstate

  // order status 
  const dispatch = useDispatch()
  function tokenHander(token) {
    console.log(token)
    dispatch(placeOrder(token, subtotal))
  }
  
  return (
    <div>
      {/* order status */}

        {loading && (<Loading/> )}
        {error && (<Error error='Something went wrong'/>)}
        {success && (<Success success='Your order Placed Successfully'/>)}

      {/* order status  */}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHander}
        stripeKey='pk_test_51KfHPxSIQ6W57U5mh3n5MCuYSiyR6iS62HbHQcpf9grchISuT9w9LT9MySnQo1xNKe1639JHwgv9rl1KRXz5fv9y00JDj1Kkdy'
        currency='INR'
      >
        <button className='btn'>Pay Now</button>
      </StripeCheckout>

    </div>
  )
}
