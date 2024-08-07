import EazeSalesLogo from '../../assets/icons/eazeSalesLogo/eazeSalesLogo'
import "./authentication-style.css"
import { Outlet } from 'react-router-dom'
const AuthenticationWrapper = () => {
    return (
        <div className='authentication-wra8ai p-1'>
            <div className="auth-card gap-x-2 max-md:max-w-full h-fit min-h-[600px] container m-auto grid grid-cols-2 max-lg:flex max-lg:items-center max-lg:justify-center w-full rounded-xl overflow-hidden max-lg:bg-none ">
                <div className="card-part-group-1 rounded-xl max-lg:hidden block col-span-1">
                </div>
                <div className="card-part-group-2 col-span-1 p-8 max-lg:p-3 max-lg:w-full">
                    <div className="web-icon inline-flex justify-end w-full">
                        <a href="/">
                            {<EazeSalesLogo className='w-24' />}
                        </a>
                    </div>
                    <div className="page-greetings">
                        <h3 className='text-lg font-medium text-neutral-500 text-start '>Welcome Back</h3>
                    </div>
                    <div className="authentication-form-group">
                       <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AuthenticationWrapper
