import "./advertisement-style.css"
import Button from '../../../../components/Button/button'
import image from "../../../../assets/images/thomas-le-pRJhn4MbsMM-unsplash.jpg"
import imageC from "../../../../assets/images/sarah-dorweiler-gUPiTDBdRe4-unsplash.jpg"
import imageD from "../../../../assets/images/tobias-tullius-Fg15LdqpWrs-unsplash.jpg"
import imageE from "../../../../assets/images/filip-mroz-gma1zfS3_6E-unsplash.jpg"
import imageF from "../../../../assets/images/arno-senoner-oCXVxwTFwqE-unsplash.jpg"
import imageG from "../../../../assets/images/firosnv-photography-Z2c6ounF-iE-unsplash.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from "framer-motion"
import { Player } from "@lordicon/react"
import { useRef } from "react"
const ShopIcon = require("../../../../assets/icons/animated/system-solid-64-shopping-bag.json")

const AdvertisementPage = () => {
  const shopRef = useRef<Player>(null)
  return (
    <div>
      <div className="min-h-full items-start flex flex-col relative">
        <div className="max-md:px-1 max-md:py-2 px-1 py-6 h-auto overflow-hidden max-md:mt-12 max-md:flex max-md:flex-col  self-start gap-x-8  grid grid-cols-5  flex-auto w-full items-baseline ">
          <div className="flex  text-pretty flex-col max-md:gap-y-2 gap-y-3 max-md:mt-0  col-span-2 ">
            <h4 className="max-md:text[14px] text-md font-medium">Lorem ipsum dolor sit amet.</h4>
            <h3 className="text-4xl font-black">Explore millions of offerings tailored to your business needs.</h3>
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minus nobis sunt sapiente accusantium optio deleniti dolore odio, illum quidem excepturi soluta nostrum ipsam tenetur? Suscipit.</p>
            <span className="text-xl font-normal">
              <span className="font-medium">₦2900</span>
              <sub className="line-through">₦5700</sub>
            </span>
            <motion.div onHoverStart={() => shopRef.current?.playFromBeginning()}>
              <Button size="small" variant="filled" iconClassName="bg-red-500" baseClassName="text-white mt-3 font-light rounded-none shadow-btn" icon={<Player ref={shopRef} icon={ShopIcon} size={20} colorize="#fff" ></Player>}>Shop
              </Button>
            </motion.div>
          </div>
          <div className="col-span-3 gap-x-6 p-3   grid grid-cols-2">
            <div className="flex flex-col gap-y-5">
              <div className="rounded-lg group min-h-[150px] after:content-[''] after:absolute relative after:top-0 after: left-0 after:h-full after:w-full z-[1] overflow-hidden flex basis-1/3">
                <LazyLoadImage effect="blur" width={"100%"} height={"100%"} threshold={0.4} src={image} loading="eager" style={{ transition: "1s ease-in-out" }} className="size-full group-hover:scale-12 5 group-hover:blur-sm transition-all  bg-white aspect-square absolute top-0 left-0 object-cover" alt="image-card" />
              </div>
              <div className="rounded-lg min-h-[150px] after:content-[''] after:absolute relative after:top-0 after: left-0 after:h-full after:w-full z-[1] overflow-hidden flex basis-1/3">
                <LazyLoadImage effect="blur" width={"100%"} height={"100%"} threshold={0.4} src={imageG} loading="eager" className="size-full bg-white aspect-square absolute top-0 left-0 object-cover" alt="image-card" />
              </div>
              <div className="rounded-lg min-h-[150px] after:content-[''] after:absolute relative after:top-0 after: left-0 after:h-full after:w-full z-[1] overflow-hidden flex basis-1/3">
                <LazyLoadImage effect="blur" width={"100%"} height={"100%"} threshold={0.4} src={imageC} loading="eager" className="size-full bg-white aspect-square absolute top-0 left-0 object-cover" alt="image-card" />
              </div>
            </div>
            <div className=" flex flex-col gap-y-5">
              <div className="rounded-lg relative overflow-hidden  after:content-[''] after:absolute  after:top-0 after: left-0 after:h-full after:w-full z-[1] basis-1/5">
                <LazyLoadImage effect="blur" width={"100%"} height={"100%"} src={imageD} threshold={0.4} loading="eager" className="size-full bg-white aspect-square  absolute top-0 left-0 object-cover " alt="image-card" />
              </div>
              <div className="rounded-lg min-h-[150px] after:content-[''] after:absolute relative after:top-0 after: left-0 after:h-full after:w-full z-[1] overflow-hidden flex basis-1/2">
                <LazyLoadImage effect="blur" width={"100%"} height={"100%"} threshold={0.4} src={imageE} loading="eager" className="size-full bg-white aspect-square absolute top-0 left-0 object-cover" alt="image-card" />
              </div>
              <div className="rounded-lg min-h-[150px] after:content-[''] after:absolute relative after:top-0 after: left-0 after:h-full after:w-full z-[1] overflow-hidden flex basis-1/4">
                <LazyLoadImage effect="blur" width={"100%"} height={"100%"} threshold={0.4} src={imageF} loading="eager" className="size-full  bg-white aspect-square absolute top-0 left-0 object-cover " alt="image-card" />
              </div>
            </div>
          </div>
        </div>
        <svg className="absolute top-1 left-0 bottom-0 " xmlns="http://www.w3.org/2000/svg" width="24.19338" height="24.96688" viewBox="0 0 24.19338 24.96688"><path d="M10.3101,16.65494c2.52209-4.57641,5.04418-9.15282,7.56627-13.72923,.46624-.84601-.82866-1.60363-1.29521-.75708-2.52209,4.57641-5.04418,9.15282-7.56627,13.72923-.46624,.84601,.82866,1.60363,1.29521,.75708h0Z" fill="#eb5e28" origin="undraw" /><path d="M1.39489,14.85628C3.91698,10.27987,6.43907,5.70346,8.96116,1.12705c.46624-.84601-.82866-1.60363-1.29521-.75708C5.14386,4.94638,2.62177,9.52279,.09968,14.0992c-.46624,.84601,.82866,1.60363,1.29521,.75708h0Z" fill="#eb5e28" /><path d="M16.52743,24.59691c2.52209-4.57641,5.04418-9.15282,7.56627-13.72923,.46624-.84601-.82866-1.60363-1.29521-.75708-2.52209,4.57641-5.04418,9.15282-7.56627,13.72923-.46624,.84601,.82866,1.60363,1.29521,.75708h0Z" fill="#eb5e28" /></svg>
        <svg className="absolute top-1/2 opacity-80 size-20  left-4" xmlns="http://www.w3.org/2000/svg" width="43.92987" height="57.85608" viewBox="0 0 43.92987 57.85608" ><path d="M42.8077,.1049C29.26103,7.84455,13.68013,14.30042,4.91338,27.95901c-3.98556,6.20949-6.63374,14.36025-3.59937,21.50763,1.23814,2.91641,3.38107,5.53328,6.23413,6.98769,3.3052,1.6849,7.10578,1.68219,10.65529,.87729,3.6535-.82848,7.2127-2.42224,10.4254-4.33293,2.89549-1.72204,5.57624-3.87117,7.58482-6.59684,3.50227-4.75264,4.2841-11.59063,.71379-16.56363-4.24778-5.91664-11.93223-4.55127-17.23983-.92931-2.89176,1.97337-5.7512,4.5762-7.33643,7.74533-1.48973,2.97822-1.7786,6.82951,.31074,9.61214,4.51894,6.01841,13.17748,2.47517,16.96786-2.39632,1.93301-2.48435,2.88358-5.92832,.95556-8.70621-1.62333-2.3389-4.80992-2.88178-6.82398-.68211-.91138,.99537-1.27927,2.32126-.84531,3.61215,.30601,.91027,1.75523,.51986,1.44642-.39876-.47645-1.4173,.65596-2.82651,2.05511-3.10964,1.62858-.32956,2.95994,1.06467,3.46808,2.46768,1.11184,3.06987-1.2225,6.06925-3.4266,7.95029-2.4559,2.09594-5.75688,3.53305-9.00733,2.67992-3.19692-.83908-5.017-3.61205-4.77021-6.87698,.24922-3.29707,2.42057-6.00057,4.74909-8.16968,2.3149-2.15643,5.04108-4.03752,8.10067-4.94427,2.81194-.83335,5.94102-.687,8.35426,1.12165,1.96646,1.4738,3.13405,3.78427,3.6212,6.15159,1.15697,5.62233-1.77022,10.70059-6,14.20843-2.27536,1.887-4.8927,3.35434-7.57433,4.57873-3.11301,1.42135-6.50787,2.56874-9.96134,2.61696-6.457,.09017-11.25487-4.6848-12.26606-10.89799-1.08641-6.6753,2.00053-13.46707,5.86524-18.73591C16.46685,14.60699,30.90393,8.63365,43.56478,1.40011c.83806-.47881,.08326-1.77532-.75708-1.29521h0Z" fill="#eb5e28" origin="undraw" /></svg>
      </div>
    </div>
  )
}
export default AdvertisementPage