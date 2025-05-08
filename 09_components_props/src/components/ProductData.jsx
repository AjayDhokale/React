import React from 'react'
import data from './Products.json'
import Products from './Products';


const ProductData = () => {

  // console.log(data, typeof(data));

  return (

    <>
    <h1 className='text-4xl text-[transparent] bg-linear-to-t from-sky-500 to-indigo-500  bg-clip-text  font-bold text-center mt-4 font-serif'>All Products List</h1>
      <div className='flex flex-wrap justify-center gap-10 my-4 '>
        {
          data.map((product) => {
            console.log(typeof (data))
            return (
              <Products key={product.id} category={product.category} price={product.price} thumbnail={product.thumbnail} title={product.title} />
            )
          })
        }

      </div>
    </>
  )
}

export default ProductData
