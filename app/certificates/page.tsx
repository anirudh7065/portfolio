import CertificateCarousel from "@/components/CertificateCarousel";
import { fetchData } from "@/lib/fetchdata";

export const metadata = {
  title: "Certificate",
  description: "Certificate page of my portfolio",
};
type Certificate = {
  id: number;
  src: string;
  alt: string;
}
const Certificate = async() => {
  const certificates =  await fetchData<Certificate[]>("/api/certificates");
  return (
    <div className="flex flex-col items-center md:mx-0 mx-3 pb-10 w-[99vw] overflow-auto scrollbar-none">
      <h1 className="text-4xl text-center dark:text-[#FFF15C] font-bold my-4">
        Certificates
      </h1>
      <CertificateCarousel certificates={certificates}  />
    </div>
  );
};

export default Certificate;
