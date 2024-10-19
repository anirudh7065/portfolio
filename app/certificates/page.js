import Certificate from '@/components/Certificate';
import { certificates } from '@/constants/constant';

export const metadata = {
  title: "Certificate",
  description: "Certificate page of my portfolio",
};

const page = () => {

  return (
    <div className='flex flex-col items-center my-10 w-auto md:mx-0 mx-3'>
      {
        certificates.map((item, index) => (
          <Certificate src={ item.src } alt={ item.alt } key={ index } />
        ))
      }

    </div>
  )
}

export default page