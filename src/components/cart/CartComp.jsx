
import React from 'react'
import { removeFromCart } from '../../redux/cardSlice';
import { useDispatch } from 'react-redux';

const CartComp = ({cart}) => {
  const dispatch=useDispatch();
  return (
    <div className='my-10 p-3 flex items-center justify-between'>
      <img className='h-[150px] object-cover' src={cart?.image} alt="" />
      <div className='w-[500px]'>
        <div className='text-2xl font-bold'>{cart?.title}</div>
        <div>{cart?.description} </div>
      </div>
      <div className='mb-3 text-xl'>{cart?.price}₺({cart?.quantity})</div>
      <div onClick={()=>dispatch(removeFromCart(cart?.id))} className='bg-red-500 text-white w-[150px] text-2xl h-16 flex align-items-center justify-center p-3 rounded-md  cursor-pointer'>Ürünü Sil</div>
    </div>
  )
}

export default CartComp;