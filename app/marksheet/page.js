import React from 'react'

const page = () => {
    return (
        <>
            <h1 className='text-3xl text-center my-14 font-bold'>My Marksheet</h1>
            <div className="flex flex-col justify-center items-center text-center w-2/4 mx-auto">
                <h3 className='text-xl font-bold text-yellow-400 text-center'>SEM 1</h3>
                <table className='my-10 w-full'>
                    <tbody>
                        <tr>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>Subjects</th>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>Subject code</th>
                            <th colspan="3" className='border-[1px] border-purple-700 p-2'>Marks</th>
                        </tr>
                        <tr>
                            <th className='border-[1px] border-purple-700 p-2'>Maximum</th>
                            <th className='border-[1px] border-purple-700 p-2'>Minimum</th>
                            <th className='border-[1px] border-purple-700 p-2'>obtained</th>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>Math 1</td>
                            <td className='border-[1px] border-purple-700 p-2'>101</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>61</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>PPA</td>
                            <td className='border-[1px] border-purple-700 p-2'>102</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>75</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>CFOA</td>
                            <td className='border-[1px] border-purple-700 p-2'>103</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>POM</td>
                            <td className='border-[1px] border-purple-700 p-2'>104</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>61</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>BC</td>
                            <td className='border-[1px] border-purple-700 p-2'>106</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>47</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>CFOA LAB</td>
                            <td className='border-[1px] border-purple-700 p-2'>105</td>
                            <td className='border-[1px] border-purple-700 p-2'>50</td>
                            <td className='border-[1px] border-purple-700 p-2'>20</td>
                            <td className='border-[1px] border-purple-700 p-2'>41</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>PPA LAB</td>
                            <td className='border-[1px] border-purple-700 p-2'>107</td>
                            <td className='border-[1px] border-purple-700 p-2'>50</td>
                            <td className='border-[1px] border-purple-700 p-2'>20</td>
                            <td className='border-[1px] border-purple-700 p-2'>42</td>
                        </tr>
                        <tr>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>TOTAL</th>
                            <th className='border-[1px] border-purple-700 p-2'>MAX Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>MIN Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>OBT Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>RESULT</th>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>600</td>
                            <td className='border-[1px] border-purple-700 p-2'>300</td>
                            <td className='border-[1px] border-purple-700 p-2'>367</td>
                            <td className='border-[1px] border-purple-700 p-2'>PASS</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className='text-xl font-bold text-yellow-400 text-center'>SEM 2</h3>
                <table className='my-10 w-full'>
                    <tbody>
                        <tr>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>Subjects</th>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>Subject code</th>
                            <th colspan="3" className='border-[1px] border-purple-700 p-2'>Marks</th>
                        </tr>
                        <tr>
                            <th className='border-[1px] border-purple-700 p-2'>Maximum</th>
                            <th className='border-[1px] border-purple-700 p-2'>Minimum</th>
                            <th className='border-[1px] border-purple-700 p-2'>obtained</th>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>Math 2</td>
                            <td className='border-[1px] border-purple-700 p-2'>201</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>43</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>C PROG</td>
                            <td className='border-[1px] border-purple-700 p-2'>202</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>60</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>OB</td>
                            <td className='border-[1px] border-purple-700 p-2'>203</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>65</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>DECO</td>
                            <td className='border-[1px] border-purple-700 p-2'>204</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>54</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>ACCOUNT</td>
                            <td className='border-[1px] border-purple-700 p-2'>205</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>56</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>C LAB</td>
                            <td className='border-[1px] border-purple-700 p-2'>206</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>90</td>
                        </tr>
                        <tr>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>TOTAL</th>
                            <th className='border-[1px] border-purple-700 p-2'>MAX Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>MIN Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>OBT Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>RESULT</th>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>600</td>
                            <td className='border-[1px] border-purple-700 p-2'>300</td>
                            <td className='border-[1px] border-purple-700 p-2'>368</td>
                            <td rowspan="2" className='border-[1px] border-purple-700 p-2'>PASS</td>
                        </tr>
                        <tr>
                            <th className='border-[1px] border-purple-700 p-2'>G.TOTAL</th>
                            <td className='border-[1px] border-purple-700 p-2'>1200</td>
                            <td className='border-[1px] border-purple-700 p-2'>600</td>
                            <td className='border-[1px] border-purple-700 p-2'>735</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className='text-xl font-bold text-yellow-400 text-center'>SEM 3</h3>
                <table className='my-10 w-full'>
                    <tbody>
                        <tr>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>Subjects</th>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>Subject code</th>
                            <th colspan="3" className='border-[1px] border-purple-700 p-2'>Marks</th>
                        </tr>
                        <tr>
                            <th className='border-[1px] border-purple-700 p-2'>Maximum</th>
                            <th className='border-[1px] border-purple-700 p-2'>Minimum</th>
                            <th className='border-[1px] border-purple-700 p-2'>obtained</th>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>OOPS C++</td>
                            <td className='border-[1px] border-purple-700 p-2'>301</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>68</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>DSA</td>
                            <td className='border-[1px] border-purple-700 p-2'>302</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>61</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>CAAL</td>
                            <td className='border-[1px] border-purple-700 p-2'>303</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>52</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>BE</td>
                            <td className='border-[1px] border-purple-700 p-2'>304</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>63</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>EOS</td>
                            <td className='border-[1px] border-purple-700 p-2'>305</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>52</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>OOPS LAB</td>
                            <td className='border-[1px] border-purple-700 p-2'>306</td>
                            <td className='border-[1px] border-purple-700 p-2'>50</td>
                            <td className='border-[1px] border-purple-700 p-2'>20</td>
                            <td className='border-[1px] border-purple-700 p-2'>45</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>DSA LAB</td>
                            <td className='border-[1px] border-purple-700 p-2'>307</td>
                            <td className='border-[1px] border-purple-700 p-2'>50</td>
                            <td className='border-[1px] border-purple-700 p-2'>20</td>
                            <td className='border-[1px] border-purple-700 p-2'>42</td>
                        </tr>
                        <tr>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>TOTAL</th>
                            <th className='border-[1px] border-purple-700 p-2'>MAX Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>MIN Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>OBT Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>RESULT</th>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>600</td>
                            <td className='border-[1px] border-purple-700 p-2'>383</td>
                            <td className='border-[1px] border-purple-700 p-2'>600</td>
                            <td rowspan="2" className='border-[1px] border-purple-700 p-2'>PASS</td>
                        </tr>
                        <tr>
                            <th className='border-[1px] border-purple-700 p-2'>G.TOTAL</th>
                            <td className='border-[1px] border-purple-700 p-2'>1800</td>
                            <td className='border-[1px] border-purple-700 p-2'>900</td>
                            <td className='border-[1px] border-purple-700 p-2'>1118</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className='text-xl font-bold text-yellow-400 text-center'>SEM 4</h3>
                <table className='my-10 w-full'>
                    <tbody>
                        <tr>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>Subjects</th>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>Subject code</th>
                            <th colspan="3" className='border-[1px] border-purple-700 p-2'>Marks</th>
                        </tr>
                        <tr>
                            <th className='border-[1px] border-purple-700 p-2'>Maximum</th>
                            <th className='border-[1px] border-purple-700 p-2'>Minimum</th>
                            <th className='border-[1px] border-purple-700 p-2'>obtained</th>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>CGMI</td>
                            <td className='border-[1px] border-purple-700 p-2'>401</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>62</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>OS</td>
                            <td className='border-[1px] border-purple-700 p-2'>402</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>60</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>SE</td>
                            <td className='border-[1px] border-purple-700 p-2'>403</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>57</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>OT</td>
                            <td className='border-[1px] border-purple-700 p-2'>404</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>52</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>CGMI LAB</td>
                            <td className='border-[1px] border-purple-700 p-2'>405</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>73</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>MATHS 3</td>
                            <td className='border-[1px] border-purple-700 p-2'>508</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>37*</td>
                        </tr>
                        <tr>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>TOTAL</th>
                            <th className='border-[1px] border-purple-700 p-2'>MAX Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>MIN Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>OBT Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>RESULT</th>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>600</td>
                            <td className='border-[1px] border-purple-700 p-2'>300</td>
                            <td className='border-[1px] border-purple-700 p-2'>341</td>
                            <td rowspan="2" className='border-[1px] border-purple-700 p-2'>PASS<br />G-03</td>
                        </tr>
                        <tr>
                            <th className='border-[1px] border-purple-700 p-2'>G.TOTAL</th>
                            <td className='border-[1px] border-purple-700 p-2'>2400</td>
                            <td className='border-[1px] border-purple-700 p-2'>1200</td>
                            <td className='border-[1px] border-purple-700 p-2'>1459</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className='text-xl font-bold text-yellow-400 text-center'>SEM 5</h3>
                <table className='my-10 w-full'>
                    <tbody>
                        <tr>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>Subjects</th>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>Subject code</th>
                            <th colspan="3" className='border-[1px] border-purple-700 p-2'>Marks</th>
                        </tr>
                        <tr>
                            <th className='border-[1px] border-purple-700 p-2'>Maximum</th>
                            <th className='border-[1px] border-purple-700 p-2'>Minimum</th>
                            <th className='border-[1px] border-purple-700 p-2'>obtained</th>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>DBMS</td>
                            <td className='border-[1px] border-purple-700 p-2'>501</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>64</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>JAVA</td>
                            <td className='border-[1px] border-purple-700 p-2'>502</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>63</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>CN</td>
                            <td className='border-[1px] border-purple-700 p-2'>503</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>71</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>NM</td>
                            <td className='border-[1px] border-purple-700 p-2'>504</td>
                            <td className='border-[1px] border-purple-700 p-2'>100</td>
                            <td className='border-[1px] border-purple-700 p-2'>40</td>
                            <td className='border-[1px] border-purple-700 p-2'>46</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>DBMS LAB</td>
                            <td className='border-[1px] border-purple-700 p-2'>505</td>
                            <td className='border-[1px] border-purple-700 p-2'>50</td>
                            <td className='border-[1px] border-purple-700 p-2'>20</td>
                            <td className='border-[1px] border-purple-700 p-2'>41</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>JAVA LAB</td>
                            <td className='border-[1px] border-purple-700 p-2'>506</td>
                            <td className='border-[1px] border-purple-700 p-2'>50</td>
                            <td className='border-[1px] border-purple-700 p-2'>20</td>
                            <td className='border-[1px] border-purple-700 p-2'>41</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>MINOR PROJECT</td>
                            <td className='border-[1px] border-purple-700 p-2'>507</td>
                            <td className='border-[1px] border-purple-700 p-2'>50</td>
                            <td className='border-[1px] border-purple-700 p-2'>20</td>
                            <td className='border-[1px] border-purple-700 p-2'>42</td>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>SUMMER TRAINING</td>
                            <td className='border-[1px] border-purple-700 p-2'>508</td>
                            <td className='border-[1px] border-purple-700 p-2'>50</td>
                            <td className='border-[1px] border-purple-700 p-2'>20</td>
                            <td className='border-[1px] border-purple-700 p-2'>37</td>
                        </tr>
                        <tr>
                            <th rowspan="2" className='border-[1px] border-purple-700 p-2'>TOTAL</th>
                            <th className='border-[1px] border-purple-700 p-2'>MAX Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>MIN Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>OBT Marks</th>
                            <th className='border-[1px] border-purple-700 p-2'>RESULT</th>
                        </tr>
                        <tr>
                            <td className='border-[1px] border-purple-700 p-2'>600</td>
                            <td className='border-[1px] border-purple-700 p-2'>300</td>
                            <td className='border-[1px] border-purple-700 p-2'>405</td>
                            <td rowspan="2" className='border-[1px] border-purple-700 p-2'>PASS<br /></td>
                        </tr>
                        <tr>
                            <th className='border-[1px] border-purple-700 p-2'>G.TOTAL</th>
                            <td className='border-[1px] border-purple-700 p-2'>3000</td>
                            <td className='border-[1px] border-purple-700 p-2'>1500</td>
                            <td className='border-[1px] border-purple-700 p-2'>1864</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default page