import ProductCard from '../../../../components/Card/productsCard'
import image from "../../../../assets/images/sarah-dorweiler-gUPiTDBdRe4-unsplash.jpg"
import imageB from "../../../../assets/images/filip-mroz-gma1zfS3_6E-unsplash.jpg"
import imageC from "../../../../assets/images/thomas-le-pRJhn4MbsMM-unsplash.jpg"
import imageD from "../../../../assets/images//tobias-tullius-Fg15LdqpWrs-unsplash.jpg"
import { useRef, useState, useEffect } from 'react'
import { AvailableCardController, handleContainerScroll, handleScrollCardPosition } from "../../../../utils/scrollHorizontal"
import ScrollButton from '../../../../components/Button/ScrollButton'

const TopCategories = () => {
    
    const categoriesWrapperRef = useRef<HTMLDivElement>(null)
    const [availableCardController, setCardDirection] = useState<AvailableCardController>("right")
    const categoriesWrapperRefB = useRef<HTMLDivElement>(null)
    const [availableCardControllerB, setCardDirectionB] = useState<AvailableCardController>("right")
    // useEffect(() => {
    //     console.log(categoriesWrapperRef, categoriesWrapperRef.current?.offsetWidth, categoriesWrapperRef.current?.clientWidth, categoriesWrapperRef.current?.scrollWidth)
    // }, [categoriesWrapperRef.current])
    return (
        <div className="top-categories">
            <div className="mt-1 mb-3 px-0 ">
                <div className="recently-headoai flex items-center justify-between font-medium">
                    <div className="content-name"><h1 className='text-xl font-serif font-medium my-4'>Categorized by Fashion</h1></div>
                    <div className="content-link"><a className='underline text-base underline-offset-2 hover:text-neutral-600' href="" target='_blank'>See all</a></div>
                </div>
                <div className="relative w-full">
                    <div ref={categoriesWrapperRef} onScroll={(e) => handleContainerScroll(e, setCardDirection)} className="flex categorized_by_fashion_ overflow-x-auto scr5a6 modal-scroll relative flex-nowrap w-full shrink-0 gap-x-2.5 flex-row">
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={1} link='a' img={image}  product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={3} link='a' img={image}  product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={4} link='a' img={imageB} product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={5} link='a' img={imageC} product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={2} link='a' img={imageD} product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={4} link='a' img={imageD} product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={4} link='a' img={imageD} product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                    </div>
                    <ScrollButton ref={categoriesWrapperRef} availableCardController={availableCardController} />
                    {/* {(categoriesWrapperRef.current && categoriesWrapperRef.current?.scrollWidth > categoriesWrapperRef.current?.clientWidth) && <div>
                        <span onClick={(e) => handleScrollCardPosition(e, categoriesWrapperRef, availableCardController)} data-direction="left" className={`absolute top-1/3 ${availableCardController == "right" && "opacity-20 backdrop-blur-md"} -left-5 shadow-lg shadow-neutral-500 cursor-pointer  bg-white rounded-full inline-flex items-center justify-center p-2 hover:bg-gray-300 active:scale-[0.99]`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[1em] font-black text-lg">
                                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span onClick={(e) => handleScrollCardPosition(e, categoriesWrapperRef, availableCardController)} data-direction="right" className={`absolute top-1/3 ${availableCardController == "left" && "opacity-20 backdrop-blur-md"} -right-5  shadow-lg shadow-neutral-500 cursor-pointer  bg-white rounded-full inline-flex items-center justify-center p-2 hover:bg-gray-300 active:scale-[0.99] `}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[1em] font-black text-lg">
                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>} */}
                </div>
            </div>
            <div className="mt-4 mb-3 px-0 ">
                <div className="recently-headoai flex items-center font-medium justify-between">
                    <div className="content-name"><h1 className='text-xl font-serif font-medium my-4'>Electronics, Cars and Computer Gadgets</h1></div>
                    <div className="content-link"><a className='underline text-base underline-offset-2 hover:text-neutral-600' href="" target='_blank'>See all</a></div>
                </div>
                <div className="relative w-full">
                    <div ref={categoriesWrapperRefB} onScroll={(e) => handleContainerScroll(e, setCardDirectionB)} className="flex overflow-x-auto scr5a6 modal-scroll relative flex-nowrap w-full shrink-0 gap-x-2.5 flex-row">
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={1} link='a' img={image}  product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={3} link='a' img={image}  product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={4} link='a' img={imageB} product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={5} link='a' img={imageC} product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={2} link='a' img={imageD} product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={4} link='a' img={imageD} product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                        <div className='grow-0 shrink-0 max-md:basis-1/3 basis-1/4'><ProductCard rate={4} link='a' img={imageD} product_name="PUMA Men's Viz Runner Repeat Running Sneakers" price={3000}></ProductCard></div>
                    </div>
                    <span onClick={(e) => handleScrollCardPosition(e, categoriesWrapperRefB, availableCardControllerB)} data-direction="left" className={`absolute top-1/3 ${availableCardControllerB == "right" && "opacity-20 backdrop-blur-md"} -left-5 shadow-lg shadow-neutral-500 cursor-pointer  bg-white rounded-full inline-flex items-center justify-center p-2 hover:bg-gray-300 active:scale-[0.99]`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[1em] font-black text-lg">
                            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <span onClick={(e) => handleScrollCardPosition(e, categoriesWrapperRefB, availableCardControllerB)} data-direction="right" className={`absolute top-1/3  ${availableCardControllerB == "left" && "opacity-20 backdrop-blur-md"}  -right-5  shadow-lg shadow-neutral-500 cursor-pointer  bg-white rounded-full inline-flex items-center justify-center p-2 hover:bg-gray-300 active:scale-[0.99] `}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[1em] font-black text-lg">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TopCategories
