import React, { SelectHTMLAttributes, useEffect, useRef, useState } from 'react'
import {SearchIcon} from '../../assets/icons/icons'
import {ShoppingCartIcon} from '../../assets/icons/icons'
import EazeSalesLogo from '../../assets/icons/eazeSalesLogo/eazeSalesLogo'
import TextInput from '../Input/input'

const NavbarSearch = () => {
    const [menu, setMenu] = useState(1)
    const filterSelectRef = useRef<null | HTMLSelectElement>(null)
    const [selectedCategory, setSelectCategory] = useState<string | undefined>("")
    useEffect(() => {
        setSelectCategory(filterSelectRef.current?.options[menu - 1].innerHTML)
    }, [menu, filterSelectRef])
    return (
        <div className='grid items-center px-8 py-3 border-b border-gray-400/45 grid-cols-5'>
            <div className="nav-icon justify-start col-span-1">
                <a href="/" className='self-start'>
                    {<EazeSalesLogo className='w-24' />}
                </a>
            </div>
            <div className='col-span-3 '>
                <form className='h-fit rounded-md' method='get'>
                    <div className="flex border border-neutral-400 rounded-lg items-stretch flex-1">
                        <div onClick={() => { filterSelectRef.current?.click() }} className="relative  cursor-pointer overflow-hidden border-neutral-200 border-r h-full m-auto z-[1]  py-3 px-1">
                            <div className="flex w-[110px] justify-start items-center gap-x-1">
                                <span className='text-xs w-[70%] font-semibold truncate text-nowrap text-black'>
                                    {selectedCategory}
                                </span>
                                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 10L13.0606 13.9394C12.4749 14.5251 11.5251 14.5251 10.9393 13.9394L6.99997 10" /></svg>
                            </div>
                            <select aria-label='Select product by category'  value={menu} tabIndex={1} ref={filterSelectRef} className='h-full *:text-[13px] *:text-black *:font-medium w-full absolute text-black font-semibold cursor-pointer block left-0 opacity-0 bg-transparent  outline-none top-0' onChange={(e) => {
                                setMenu(Number(e.target.value))
                            }} name="categories-filter" id="">
                                <option value="1">All categories</option>
                                <option value="2">Electricity</option>
                                <option value="3">Home appliances</option>
                                <option value="4">Food stuffs</option>
                                <option value="5">Electronics</option>
                                <option value="6">Clothing</option>
                                <option value="7">Books</option>
                                <option value="8">Food stuffs</option>
                                <option value="9">Home Appliances</option>
                                <option value="10">Furniture</option>
                                <option value="11">Health & Beauty</option>
                                <option value="12">Toys</option>
                                <option value="13">Sports Equipment</option>
                                <option value="14">Automotive</option>
                                <option value="15">Jewelry</option>
                                <option value="16">Garden Supplies</option>
                                <option value="17">Pet Supplies</option>
                                <option value="18">Office Supplies</option>
                                <option value="19">Footwear</option>
                                <option value="20">Musical Instruments</option>
                                <option value="21">Groceries</option>
                                <option value="22">Baby Products</option>
                                <option value="23">Handmade Crafts</option>
                                <option value="24">Bags & Accessories</option>
                            </select>
                        </div>
                        <div className='relative w-full overflow-hidden !rounded-lg group'>
                            <TextInput type="search" name="" placeholder='Search for anything' baseClassName='w-full !pe-[55px] pl-8 group-hover:!pe-[60px] font-custom outline-none tracking-wide ring-none text-sm !border-b-0 bg-transparent relative py-2 px-1 ' />
                            <button type='submit' className='w-[52px] group-hover:size-[40px] cursor-pointer rounded-l-lg group-hover:right-2 group-hover:rounded-full group-hover:border-2 group-hover:border-white transition-all duration-75 ease-in-out rounded-r-lg flex items-center justify-center absolute top-0 h-full right-0 bg-secondary-dark'><SearchIcon iconStyles={{ strokeWidth: 1 }} className='text-2xl stroke-white' /></button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='col-span-1 ml-auto items-end'>
                <div className='flex ping-wrapper items-center gap-x-2 text-primary cursor-pointer'>
                    <span className='ping-pong after:text-[12px] after:content-["1"]'>
                        <ShoppingCartIcon className='text-2xl' />
                    </span>
                    <span className='font-medium text-[12px]'>
                        Cart
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavbarSearch