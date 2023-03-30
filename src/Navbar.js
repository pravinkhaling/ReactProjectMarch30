import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  let cart_store = useSelector(store => store.cartStore)
  let len = cart_store.cart_items.length

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
        <div className="container-fluid ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
            </ul>
            <input type={'search'} placeholder="enter your search here" className='form-control me-1' />
            <button className='btn btn-warning'>Search</button>

            <div className=' col-md-3 d-flex justify-content-evenly'>
              <Link to='/signin'><i className='bi bi-box-arrow-in-left fs-5 d-flex'></i></Link>
              <Link to='/register'><i className='bi bi-person-plus fs-5 d-flex'></i></Link>
              <Link to='/cart'><i className='bi bi-cart fs-5 d-flex'></i>
                <span>({len})</span>
              </Link>
            </div>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
