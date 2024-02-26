import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/undraw_page_not_found_re_e9o6.svg'
import { Image } from "@nextui-org/react";


const Error = () => {
  const error = useRouteError()
  console.log(error);

  if (error.status === 404) {
    return (
      <div className=' flex min-h-screen flex-col text-center justify-center items-center'>
        <Image src={img} alt='not found' className=' mb-6 w-5/6 h-5/6 inline-flex ' />
        <h3 className='mb-2'>Sorry,not found</h3>
        <Link to='/' className='capitalize'>back home</Link>
      </div>
    )

  }

  return (
    <div>Error</div>
  )
}
export default Error