import Certificate from '@/components/Certificate';

export const metadata = {
  title: "Certificate",
  description: "Certificate page of my portfolio",
};

const page = () => {

  return (
    <div className='flex flex-col items-center my-10 w-auto md:mx-0 mx-3'>
      <Certificate src={"./certificate/soft-min.png"} alt={'Image of softpro certificate'} />
      <Certificate src={"./certificate/css.png"} alt={'Image of css certificate'} />
      <Certificate src={"./certificate/cpp-info.png"} alt={'Image of cpp certificate'} />
      <Certificate src={"./certificate/html5.png"} alt={'Image of html5 certificate'} />
      <Certificate src={"./certificate/tcs.png"} alt={'Image of tcs certificate'} />
      <Certificate src={"./certificate/postman-letsu.png"} alt={'Image of postman certificate'} />

    </div>
  )
}

export default page