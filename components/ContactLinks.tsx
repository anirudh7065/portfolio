import Link from "next/link"

const ContactLinks = ({link,title}) => {
  return (
      <li className='md:text-[50px] rounded-full md:list-none list-none md:py-2 md:px-3 md:hover:bg-purple-400 md:hover:bg-opacity-10'>
      
          <Link target='_blank' href={link} className='text-purple-600'>{title}</Link>

    </li>
  )
}

export default ContactLinks
