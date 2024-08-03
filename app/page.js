'use client';
import Image from "next/image";
import { useRef,forwardRef } from "react";
import ReactToPrint from 'react-to-print';
import Map from '../components/Map'

export default function Home() {
  const componentRef = useRef();

  return (
    <main>
      <ReactToPrint
        trigger={() => <button>{'Print'}</button>}
        content={() => componentRef.current}
      />
      <Map />
      <div className="">
        <Report ref={componentRef} deskrispi={"JL. MUKTI NO. 9 (KOMPLEK PELITA AIR SERVICE) , KELURAHAN BATU AMPAR, KECAMATAN KRAMATJATI, KOTA ADM. JAKARTA TIMUR, PROVINSI DKI JAKARTA"} tanggal={"4/20/69"}/>
      </div>
    </main>
  );
}

const Report = forwardRef(({deskrispi,tanggal}, ref) => {
  deskrispi+=""
  return(
    <div ref={ref} >
      {/* Ini Page 1 */}
      <div className=" w-full h-[100vh] p-[50pt]">
        <div className="border-[4px] border-black h-full ">
          <div className="flex flex-col w-full">
            {/* Header Bagian 1 */}
            <div className="flex flex-row w-full h-[8vh]">
              {/* Company Logo */}
              <div className="flex flex-row justify-center items-center border-b-[2px] border-r-[2px] border-black h-full w-[50%] relative p-3">
                  <img src={'./pertamina.svg'}   className="object-contain h-[50%] w-[50%]" alt="Pertamina"  />
                  <img src={'./surveyid.png'}    className="object-contain pl-2 h-[50%] w-[50%]" alt="Survey Id"  />
                  <img src={'./surveyor_id.png'} className="object-contain h-[50%] w-[50%]" alt="Surveyor Indonesia"  />
              </div>
              {/* ini ID Lokasi  */}
              <div className="border-b-[2px] border-r-[2px] border-black h-full w-[30%] text-center">
                <div className="border-b-[2px] border-[black] text-[14pt] font-bold justify-center items-center text-center pt-1 pb-1">
                      LOKASI ID :
                </div>
                <span className="text-[18pt]">31.72.13</span>
              </div>
              {/* ini REV */}
              <div className="border-b-[2px] border-black h-full w-[20%] text-center">
                <div className="border-b-[2px] border-[black] text-[14pt] font-bold justify-center items-center text-center pt-1 pb-1">
                      REV.
                </div>
                <span className="text-[18pt]">00</span>
              </div>
            </div>
            {/* Header Bagian 2 */}
            <div className="flex flex-row w-full h-[8vh]">
              {/* ini Nama Projek */}
              <div className="flex flex-row border-b-[2px] border-r-[2px] border-black h-full w-1/2 align-center items-center justify-center text-[10pt]">
                <span className="w-[30%] text-center">PROJECT :</span>
                <span className="w-[70%]"> JASA SURVEY ASSET TANAH DAN BANGUNAN REGIONAL II - JAWABALINUS</span>
              </div>
              {/* ini Tanggal */}
              <div className="flex border-b-[2px] border-r-[2px] border-black h-full w-1/4 text-center justify-center items-center align-center">
                <div>
                  <span>TANGGAL:<br/>26 Maret 2024</span>
                </div>
              </div>
              {/* ini Page */}
              <div className="flex border-b-[2px] border-black h-full w-1/4 text-center justify-center items-center">PAGE: 1 OF ALL</div>
            </div>
            {/* Ini Bagian Alamat */}
            <div className="border-b-2 border-black">
              <div className="flex flex-col justify-center items-center h-[47vh] p-[6%]">
                <div className="text-center text-[14pt]">
                  <span>ALAMAT:</span><br/>
                  <span>{deskrispi}</span>
                </div>
              </div>
              {/* Ini tulisan dipersembahkan ... */}
              <div className="text-center text-[11pt] pb-[2%]">
                <span>Dipersiapkan untuk :</span><br/>
                <span className="font-bold">PT. PERTAMINA (PERSERO)</span>
              </div>
            </div>
            {/* Ini Table tanda tangan */}
            <table className="h-full">
              {/* HEADER */}
              <thead className="h-[6vh]">
                <tr className="border border-black text-[7pt] w-full h-full">
                  {/* REV */}
                  <th className="border border-black w-[5%]">REV.</th>
                  {/* TANGGAL */}
                  <th className="border border-black w-[15%]">TANGGAL</th>
                  {/* PAGES */}
                  <th className="border border-black w-[10%]">PAGES</th>
                  {/* DESCRIPTION */}
                  <th className="border border-black w-[25%]">DESCRIPTION</th>
                  {/* TTD SURVEYOR ID */}
                  <th className="border border-black w-[20%]">
                    <div className="flex flex-col text-center">
                      <div className="border-b border-black ">SURVEYOR INDONESIA</div>
                      <div className="flex text-center h-full">
                        <div className="w-1/2 border-r border-black p-2">ROMEO SETIAWAN</div>
                        <div className="w-1/2 p-2">JULIET ADRIANA</div>
                      </div>
                    </div>
                  </th>
                  {/* TTD PERTAMINA */} 
                  <th className="flex flex-col text-centerborder border-black w-full ">
                    {/* <div className=""> */}
                      <div className="border-black border-b h-full ">PERTAMINA</div>
                      <div className="flex items-end justify-center h-[30px] text-center">HEHE HEHEHE</div>
                    {/* </div> */}
                  </th>
                </tr>
              </thead>
              <tbody className="text-[10pt]">
                <tr className="h-[3.3vh] text-center ">
                  <td className="border border-black">01</td>
                  <td className="border border-black">05 Maret 2024</td>
                  <td className="border border-black">All</td>
                  <td className="border border-black">Issued for Approval</td>
                  <td className="border border-black">
                    <div className="flex flex-row w-full h-full">
                      <div className="h-full w-1/2 border-black border-r"></div>
                      <div className="h-full w-1/2"></div>
                    </div>
                  </td>
                  <td className="border border-black"></td>
                </tr>
                <tr className="h-[3.3vh] text-center ">
                <td className="border border-black">01</td>
                  <td className="border border-black">05 Maret 2024</td>
                  <td className="border border-black">All</td>
                  <td className="border border-black">Issued for Approval</td>
                  <td className="border border-black">
                    <div className="flex flex-row w-full h-full">
                      <div className="h-full w-1/2 border-black border-r"></div>
                      <div className="h-full w-1/2"></div>
                    </div>
                  </td>
                  <td className="border border-black"></td>
                </tr>
                <tr className="h-[3.3vh] text-center ">
                <td className="border border-black">01</td>
                  <td className="border border-black">05 Maret 2024</td>
                  <td className="border border-black">All</td>
                  <td className="border border-black">Issued for Approval</td>
                  <td className="border border-black">
                    <div className="flex flex-row w-full h-full">
                      <div className="h-full w-1/2 border-black border-r"></div>
                      <div className="h-full w-1/2"></div>
                    </div>
                  </td>
                  <td className="border border-black"></td>
                </tr>
                <tr className="h-[3.3vh] text-center ">
                <td className="border border-black">01</td>
                  <td className="border border-black">05 Maret 2024</td>
                  <td className="border border-black">All</td>
                  <td className="border border-black">Issued for Approval</td>
                  <td className="border border-black">
                    <div className="flex flex-row w-full h-full">
                      <div className="h-full w-1/2 border-black border-r"></div>
                      <div className="h-full w-1/2"></div>
                    </div>
                  </td>
                  <td className="border border-black"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Ini Page 2 */}
      <div className=" w-full h-[100vh] p-[24px] py-[100px]">
        <div className="border-[4px] border-black h-full">
          <p className="text-[24pt] text-red-500">are</p>
          <Oy />
        </div>
      </div>
    </div>
  );
});

Report.displayName = 'Report';

function Oy(){
  return(
    <>
      <div>
        wowowowowowow
      </div>
    </>
  )
}