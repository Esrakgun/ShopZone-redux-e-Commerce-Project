
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../redux/ProductSlice';
import DetailComp from '../components/detail/DetailComp';
import Loading from '../components/Loading';



const Details = () => {
    const {id}=useParams();
    const dispatch =useDispatch();
    const {productDetail,productDetailStatus}=useSelector(state=>state.products);

    useEffect(()=>{
      dispatch(getDetailProduct(id))
    },[dispatch,id])

  //  console.log(productDetail,"productDetail");


  return (
    <div>
         {productDetailStatus == "LOADING" ? <Loading/> :   <DetailComp productDetail={productDetail}/>}
    </div>
  )
}

export default Details;
