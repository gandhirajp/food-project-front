import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editPizza, getPizzaById } from '../actions/pizzaActions'
import Error from '../components/Error'
import Success from "../components/Success"
import Loading from '../components/Loading'

export default function Editpizza({ match }) {

  const [name, setname] = useState('')
  const [smallprice, setsmallprice] = useState()
  const [mediumprice, setmediumprice] = useState()
  const [largeprice, setlargeprice] = useState()
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState("")
  const dispatch = useDispatch()

  const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer)
  const { pizza, error, loading } = getpizzabyidstate

  const editpizzastate = useSelector((state) => state.editPizzaReducer)
  const { editloading, editerror, editsuccess } = editpizzastate;

  useEffect(() => {

    if (pizza) {
      if (pizza._id == match.params.pizzaid) {
        setname(pizza.name)
        setdescription(pizza.description)
        setcategory(pizza.category)
        setsmallprice(pizza.prices[0]['small'])
        setmediumprice(pizza.prices[0]['medium'])
        setlargeprice(pizza.prices[0]['large'])
        setimage(pizza.image)
      }
      else {
        dispatch(getPizzaById(match.params.pizzaid))
      }

    }
    else {
      dispatch(getPizzaById(match.params.pizzaid))
    }

  }, [pizza, dispatch])


  function formHandler(e) {

    e.preventDefault();

    const editedpizza = {
      _id: match.params.pizzaid,
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice
      }
    };
    dispatch(editPizza(editedpizza))

  }

  return (
    <div>
      <h1>Edit Pizza</h1>
      <h1>Pizza Id ={match.params.pizzaid}</h1>
      <div className='text-left m-3'>

        {loading && (<Loading />)}
        {error && (<Error error='Something went wrong' />)}
        {editsuccess && (<Success success='Food details edited success' />)}
        {editloading && (<Loading />)}

        <form onSubmit={formHandler} >
          <input type="text" className='form-control' placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
          <input type="text" className='form-control' placeholder='small varient price' value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }} />
          <input type="text" className='form-control' placeholder='medium varient price' value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
          <input type="text" className='form-control' placeholder='large varient price' value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }} />
          <input type="text" className='form-control' placeholder='category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
          <input type="text" className='form-control' placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
          <input type="text" className='form-control' placeholder='image URL' value={image} onChange={(e) => { setimage(e.target.value) }} />
          <button className='btn mt-3' type='submit'>Edit Pizza</button>
        </form>
      </div>
    </div>
  )
}
