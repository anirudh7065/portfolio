import CertificateCard from "@/components/CertificateCard";
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
    <div className="flex flex-col items-center md:mx-0 mx-3 pb-10 w-auto overflow-auto scrollbar-none">
      <h1 className="text-4xl text-center dark:text-[#FFF15C] font-bold my-4">
        Certificates
      </h1>
      {certificates.map((item, index) => (
        <CertificateCard src={item.src} alt={item.alt} key={index} />
      ))}
    </div>
  );
};

export default Certificate;
