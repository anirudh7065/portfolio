import {fetchData} from "@/lib/fetchdata";
type Semester = {
  semester: string;
  subjects: Subject[];
  total_max: number;
  total_min: number;
  total_obtained: number;
  total_result: string;
  grand_total_max: number;
  grand_total_min: number;
  grand_total_obtained: number;
};

type Subject = {
  name: string;
  abbr: string;
  code: string;
  max: number;
  min: number;
  obtained: number | string; // string to handle cases like "37*"
};
const page = async () => {
  const marksheet = await fetchData<Semester[]>("/api/semesters");
  
  return (
    <main>
      <h1 className="text-3xl text-center my-14 font-bold">My Marksheet</h1>
      <h2 className="text-sm text-center">
        &#40; abbrevations of subjects are shown on hover &#41;
      </h2>
      <div className="flex flex-col justify-center items-center text-center md:w-2/4 md:mx-auto">
        {marksheet.map((item) => (
          <table className="my-10 md:w-auto w-11/12 mx-2" key={item.semester}>
            <caption className="text-xl font-bold text-yellow-400 text-center my-4">
              {item.semester}
            </caption>
            <tbody>
              <tr>
                <th
                  rowSpan={2}
                  className="border-[1px] border-purple-700 md:p-2"
                >
                  Subjects
                </th>
                <th
                  rowSpan={2}
                  className="border-[1px] border-purple-700 md:p-2"
                >
                  Subject code
                </th>
                <th
                  colSpan={3}
                  className="border-[1px] border-purple-700 md:p-2"
                >
                  Marks
                </th>
              </tr>
              <tr>
                <th className="border-[1px] border-purple-700 md:p-2">
                  Maximum
                </th>
                <th className="border-[1px] border-purple-700 md:p-2">
                  Minimum
                </th>
                <th className="border-[1px] border-purple-700 md:p-2">
                  obtained
                </th>
              </tr>
              {item.subjects.map((subject) => (
                <tr key={subject.code}>
                  <td
                    className="border-[1px] border-purple-700 md:p-2"
                    title={subject.abbr}
                  >
                    {subject.name}
                  </td>
                  <td className="border-[1px] border-purple-700 md:p-2">
                    {subject.code}
                  </td>
                  <td className="border-[1px] border-purple-700 md:p-2">
                    {subject.max}
                  </td>
                  <td className="border-[1px] border-purple-700 md:p-2">
                    {subject.min}
                  </td>
                  <td className="border-[1px] border-purple-700 md:p-2">
                    {subject.obtained}
                  </td>
                </tr>
              ))}

              <tr>
                <th
                  rowSpan={2}
                  className="border-[1px] border-purple-700 md:p-2"
                >
                  TOTAL
                </th>
                <th className="border-[1px] border-purple-700 md:p-2">
                  MAX Marks
                </th>
                <th className="border-[1px] border-purple-700 md:p-2">
                  MIN Marks
                </th>
                <th className="border-[1px] border-purple-700 md:p-2">
                  OBT Marks
                </th>
                <th className="border-[1px] border-purple-700 md:p-2">
                  RESULT
                </th>
              </tr>
              <tr>
                <td className="border-[1px] border-purple-700 md:p-2">
                  {item.total_max}
                </td>
                <td className="border-[1px] border-purple-700 md:p-2">
                  {item.total_min}
                </td>
                <td className="border-[1px] border-purple-700 md:p-2">
                  {item.total_obtained}
                </td>
                <td
                  className="border-[1px] border-purple-700 md:p-2"
                  rowSpan={2}
                >
                  {item.total_result}
                </td>
              </tr>

              <tr>
                <th className="border-[1px] border-purple-700 md:p-2">
                  GRAND TOTAL
                </th>
                <td className="border-[1px] border-purple-700 md:p-2">
                  {item.grand_total_max}
                </td>
                <td className="border-[1px] border-purple-700 md:p-2">
                  {item.grand_total_min}
                </td>
                <td className="border-[1px] border-purple-700 md:p-2">
                  {item.grand_total_obtained}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </main>
  );
};

export default page;
