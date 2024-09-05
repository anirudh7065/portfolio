import Image from "next/image";

const LangLogo = ({ url, classname, spanClassName }) => {
    let alt = url.split('/')[2];

    return (
      <span className={spanClassName}>
          <Image
              className={classname?classname:''}
              src={url}
              width={30}
              height={30}
              alt={alt}
              priority={true}
          />
      </span>
  )
}

export default LangLogo
