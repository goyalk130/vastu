"use client";
import React, { useContext, useEffect, useState } from "react";
import { BULL_FRAME, HORSES, Home_Vastu_Kit } from "@/lib/Constant/constant";
import { productcon } from "../page";

const CartUi = () => {
  const [cartdata, setcartdata] = useState((localStorage && JSON.parse(localStorage?.getItem("cart"))) || [])
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        let arr = [];
        arr = JSON.parse(localStorage.getItem("cart"));
        console.log(arr);
        setcartdata(arr)
      }
    } catch (error) {
      console.error("Error while setting token in localStorage:", error);
    }
  }, []);

  

  useEffect(() => {
    console.log(cartdata);
    console.log("state updated");
    localStorage.setItem("cart",JSON.stringify(cartdata))
  }, [cartdata]);
  console.log(cartdata);
  const [totalvalue, settotalvalue] = useState(0);
  return (
    <div class="h-screen bg-gray-100 pt-20">
      <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div class="rounded-lg md:w-2/3">
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="/kit.jpg"
              alt="product-image"
              class="w-full rounded-lg sm:w-40"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">
                  {Home_Vastu_Kit}
                </h2>
              </div>
              <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100">
                  <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"  onClick={()=>{
                    setcartdata(data=>{
                        let newdata = data.map(item=>{
                            if(item.name == Home_Vastu_Kit){
                                if(item.num==0){
                                    return item
                                }
                                item.num-=1
                            }
                            return item
                        })
                        
                        return newdata
                    })
                  }}>
                    {" "}
                    -{" "}
                  </span>
                  <input
                  
                    class="h-8 w-8 border bg-white text-center text-xs outline-none text-center"
                    type="numeric"
                    value={cartdata[0]?.num}
                    min="0"
                  />
                  <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>{
                    setcartdata(data=>{
                        let newdata = data.map(item=>{
                            if(item.name == Home_Vastu_Kit){
                                item.num+=1
                            }
                            return item
                        })
                        return newdata
                    })
                  }}>
                    {" "}
                    +{" "}
                  </span>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">/- {cartdata && (cartdata[0]?.price * cartdata[0]?.num)}</p>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="/bull.png"
              alt="product-image"
              class="w-full rounded-lg sm:w-40"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">
                  {BULL_FRAME}
                </h2>
              </div>
              <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100">
                  <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"  onClick={()=>{
                    setcartdata(data=>{
                        let newdata = data.map(item=>{
                            if(item.name == BULL_FRAME){
                                if(item.num==0){
                                    return item
                                }
                                item.num-=1
                            }
                            return item
                        })
                        return newdata
                    })
                  }}>
                    {" "}
                    -{" "}
                  </span>
                  <input
                  
                    class="h-8 w-8 border bg-white text-center text-xs outline-none text-center"
                    type="numeric"
                    value={cartdata[1]?.num}
                    min="0"
                  />
                  <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>{
                    setcartdata(data=>{
                        let newdata = data.map(item=>{
                            if(item.name == BULL_FRAME){
                                item.num+=1
                            }
                            return item
                        })
                        return newdata
                    })
                  }}>
                    {" "}
                    +{" "}
                  </span>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">/- {cartdata && (cartdata[1]?.price * cartdata[1]?.num)}</p>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src="/horse.png"
              alt="product-image"
              class="w-full rounded-lg sm:w-40"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">
                  {HORSES}
                </h2>
              </div>
              <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100">
                  <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"  onClick={()=>{
                    setcartdata(data=>{
                        let newdata = data.map(item=>{
                            if(item.name == HORSES){
                                if(item.num==0){
                                    return item
                                }
                                item.num-=1
                            }
                            return item
                        })
                        return newdata
                    })
                  }}>
                    {" "}
                    -{" "}
                  </span>
                  <input
                  
                    class="h-8 w-8 border bg-white text-center text-xs outline-none text-center"
                    type="numeric"
                    value={cartdata[2]?.num}
                    min="0"
                  />
                  <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>{
                    setcartdata(data=>{
                        let newdata = data.map(item=>{
                            if(item.name == HORSES){
                                item.num+=1
                            }
                            return item
                        })
                        return newdata
                    })
                  }}>
                    {" "}
                    +{" "}
                  </span>
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">/- {cartdata && (cartdata[2]?.price * cartdata[2]?.num)}</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">{(cartdata[0]?.price * cartdata[0]?.num) + (cartdata[1]?.price * cartdata[1]?.num) + (cartdata[2]?.price * cartdata[2]?.num)}</p>
          </div>
         
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">{(cartdata[0]?.price * cartdata[0]?.num) + (cartdata[1]?.price * cartdata[1]?.num) + (cartdata[2]?.price * cartdata[2]?.num)}</p>
              <p class="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartUi;
