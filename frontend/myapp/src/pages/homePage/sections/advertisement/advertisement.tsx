import "./advertisement-style.css"
import Button from '../../../../components/Button/button'
import { FunUnderlineIcon } from '../../../../assets/icons/icons'
import shopIllustationIcon from "../../../../assets/icons/21727022_6505892.svg"
const AdvertisementPage = () => {
  return (
    <div>
      <div className=" min-h-screen relative bg-gray-100">
        <div className="h-full text-black bg-center bg-fixed bg-cover w-full">
          <div className="ads01-contentWrapp py-20 px-24">
            <div className="grid space-x-32 items-center justify-between grid-cols-5">
              <div className="textAdsContenta8a col-span-2 flex  flex-col gap-y-7 ">
                <h3 className='text-5xl font-black tracking-wider font-mono leading-normal'>Shop Online <br />with us</h3>
                <span className='header-description09a  break-all text-xl font-normal my-4 leading-relaxed  max-w-[600px] text-wrap'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae architecto sint totam, dolor obcaecati, accusantium nihil praesentium deleniti necessitatibus accusamus adipisci ex, debitis itaque.
                </span>
                <span className="font-semibold  text-3xl items-baseline gap-x-2">
                  <span className=''>
                    $125.00
                  </span>
                  <sub className=' line-through  font-normal italic text-lg stroke-slate-900'>
                    $ 500.00
                  </sub>
                </span>
                <a href="" className='font-mono'>
                  <Button iconPosition='start' icon={<svg className='w-[1em] h-[1em] text-2xl' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e8eaed"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 6h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1zm15.16 1.8c-.09-.46-.5-.8-.98-.8H4.82c-.48 0-.89.34-.98.8l-1 5c-.12.62.35 1.2.98 1.2H4v5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-5h4v5c0 .55.45 1 1 1s1-.45 1-1v-5h.18c.63 0 1.1-.58.98-1.2l-1-5zM12 18H6v-4h6v4z" /></svg>} baseClassName='min-w-[130px] py-3 text-white text-2xl' color='secondary' variant='filled' >
                    Sell
                  </Button>
                </a>
              </div>
              <div className="flex relative justify-end col-span-3">
                <img style={{ fill: "#" }} src={shopIllustationIcon} className='relative min-w-[100%]    sele' alt="shopping sale illustration" />
              </div>
            </div>
          </div>
        </div>
        <FunUnderlineIcon className='absolute text-9xl opacity-90 bottom-0 right-0' />

        <svg className="absolute top-1/3 left-1/2 bottom-0 " xmlns="http://www.w3.org/2000/svg" width="24.19338" height="24.96688" viewBox="0 0 24.19338 24.96688"><path d="M10.3101,16.65494c2.52209-4.57641,5.04418-9.15282,7.56627-13.72923,.46624-.84601-.82866-1.60363-1.29521-.75708-2.52209,4.57641-5.04418,9.15282-7.56627,13.72923-.46624,.84601,.82866,1.60363,1.29521,.75708h0Z" fill="#eb5e28" origin="undraw" /><path d="M1.39489,14.85628C3.91698,10.27987,6.43907,5.70346,8.96116,1.12705c.46624-.84601-.82866-1.60363-1.29521-.75708C5.14386,4.94638,2.62177,9.52279,.09968,14.0992c-.46624,.84601,.82866,1.60363,1.29521,.75708h0Z" fill="#eb5e28" /><path d="M16.52743,24.59691c2.52209-4.57641,5.04418-9.15282,7.56627-13.72923,.46624-.84601-.82866-1.60363-1.29521-.75708-2.52209,4.57641-5.04418,9.15282-7.56627,13.72923-.46624,.84601,.82866,1.60363,1.29521,.75708h0Z" fill="#eb5e28" /></svg>

        <svg className="absolute top-1/2 opacity-80 size-20 left-4" xmlns="http://www.w3.org/2000/svg" width="43.92987" height="57.85608" viewBox="0 0 43.92987 57.85608" ><path d="M42.8077,.1049C29.26103,7.84455,13.68013,14.30042,4.91338,27.95901c-3.98556,6.20949-6.63374,14.36025-3.59937,21.50763,1.23814,2.91641,3.38107,5.53328,6.23413,6.98769,3.3052,1.6849,7.10578,1.68219,10.65529,.87729,3.6535-.82848,7.2127-2.42224,10.4254-4.33293,2.89549-1.72204,5.57624-3.87117,7.58482-6.59684,3.50227-4.75264,4.2841-11.59063,.71379-16.56363-4.24778-5.91664-11.93223-4.55127-17.23983-.92931-2.89176,1.97337-5.7512,4.5762-7.33643,7.74533-1.48973,2.97822-1.7786,6.82951,.31074,9.61214,4.51894,6.01841,13.17748,2.47517,16.96786-2.39632,1.93301-2.48435,2.88358-5.92832,.95556-8.70621-1.62333-2.3389-4.80992-2.88178-6.82398-.68211-.91138,.99537-1.27927,2.32126-.84531,3.61215,.30601,.91027,1.75523,.51986,1.44642-.39876-.47645-1.4173,.65596-2.82651,2.05511-3.10964,1.62858-.32956,2.95994,1.06467,3.46808,2.46768,1.11184,3.06987-1.2225,6.06925-3.4266,7.95029-2.4559,2.09594-5.75688,3.53305-9.00733,2.67992-3.19692-.83908-5.017-3.61205-4.77021-6.87698,.24922-3.29707,2.42057-6.00057,4.74909-8.16968,2.3149-2.15643,5.04108-4.03752,8.10067-4.94427,2.81194-.83335,5.94102-.687,8.35426,1.12165,1.96646,1.4738,3.13405,3.78427,3.6212,6.15159,1.15697,5.62233-1.77022,10.70059-6,14.20843-2.27536,1.887-4.8927,3.35434-7.57433,4.57873-3.11301,1.42135-6.50787,2.56874-9.96134,2.61696-6.457,.09017-11.25487-4.6848-12.26606-10.89799-1.08641-6.6753,2.00053-13.46707,5.86524-18.73591C16.46685,14.60699,30.90393,8.63365,43.56478,1.40011c.83806-.47881,.08326-1.77532-.75708-1.29521h0Z" fill="#eb5e28" origin="undraw" /></svg>
      </div>
    </div>
  )
}
export default AdvertisementPage
