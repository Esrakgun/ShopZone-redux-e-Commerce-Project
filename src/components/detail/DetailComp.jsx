
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCard } from '../../redux/cardSlice';

const DetailComp = ({ productDetail }) => {

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1)
  }

  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1)
  }

  const addBasket = () => {
    dispatch(addToCard({
      id: productDetail?.id, title: productDetail?.title, image: productDetail?.image,
      price: productDetail?.price, quantity: quantity
    }))
  }



  return (
    <div className='flex gap-10 my-10'>
      <img className='w-[700px] h-[500px] object-cover' src={productDetail?.image} alt="" />
      <div className=''>
        <div className='text-4xl font-bold'>{productDetail?.title}</div>
        <div className='my-2 text-2xl'>{productDetail?.description}</div>
        <div className='my-2 text-lg text-red-500'>Rating:{productDetail?.rating?.rate}</div>
        <div className='my-2 text-lg text-red-500'>Count:{productDetail?.rating?.count}</div>
        <div className='text-4xl font-bold'>{productDetail?.price} <span className='text-sm'>₺</span></div>
        <div className='flex items-center gap-5 my-4'>
          <div onClick={decrement} className='text-4xl cursor-pointer'>-</div>
          <input className='w-12 text-center text-4xl font-bold' type="text" value={quantity} />
          <div onClick={increment} className='text-4xl cursor-pointer'>+</div>
        </div>
        <div onClick={addBasket} className='border [w-200px] text-2xl rounded-md bg-gray-200 h-16 flex items-center justify-center cursor-pointer my-3'>Sepete Ekle</div>
      </div>
    </div>
  )
}

export default DetailComp;
