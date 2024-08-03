'use client';
import Image from "next/image";
import { useRef,forwardRef } from "react";
import ReactToPrint from 'react-to-print';

export default function Home() {
  const componentRef = useRef();

  return (
    <main>
      <ReactToPrint
        trigger={() => <button>{'Print'}</button>}
        content={() => componentRef.current}
      />
      <div className="hidden">
        <Report ref={componentRef} deskrispi={"Q Qawa aw aw aw a wdoijd a coajsc oia coia c"} tanggal={"4/20/69"}/>
      </div>
    </main>
  );
}

const Report = forwardRef(({deskrispi,tanggal}, ref) => {
  deskrispi+="aofpdshfaodsij foaidjv ao "
  return(
    <div ref={ref} >
      <div className=" w-full h-[100vh] p-[50pt]">
        <div className="border-[5px] border-black h-full ">
          <div className="flex flex-col w-full">
            <div className="flex flex-row w-full h-[6vh]">
              <div className="flex flex-row justify-center items-center border-[2px] border-black h-full w-1/2 relative p-2">
                <div className="relative w-full h-full">
                  <Image src={'/pertamina.svg'} layout="fill" objectFit="contain" alt="Pertamina" />
                </div>
                <div className="relative ml-1 w-[70%] h-[70%]">
                  <Image src={'/surveyid.png'} layout="fill" objectFit="contain" alt="Survey Id" />
                </div>
                <div className="relative w-[70%] h-[70%]">
                  <Image src={'/surveyor_id.png'} layout="fill" objectFit="contain" alt="Surveyor Indonesia" />
                </div>
              </div>
              <div className="border-[2px] border-black h-full w-1/4">NO Asset</div>
              <div className="border-[2px] border-black h-full w-1/4">Rev</div>
            </div>
            <div className="flex flex-row w-full h-[8vh]">
              <div className="border-[2px] border-black h-full w-1/2">{tanggal}</div>
              <div className="border-[2px] border-black h-full w-1/4">NO Asset</div>
              <div className="border-[2px] border-black h-full w-1/4">Rev</div>
            </div>
            <div className="border-b-2 border-black">
              <div className="flex flex-col justify-center items-center h-[50vh] p-[6%]">
                <div className="text-center text-[14pt]">
                  <span>DESKRIPSI :</span><br/>
                  {/* <span>INI DESKRIPSI ASSET PER PDF YANG AKU GA TAU NULIS APA JAA BIAR PANJANG MISAL ALAMAT JL APA</span> */}
                  <span>{deskrispi}</span>
                </div>
              </div>
              <div className="text-center text-[14pt] pb-[2%]">
                <span>Dipersiapkan untuk :</span><br/>
                <span className="font-bold">PT. PERTAMINA (PERSERO)</span>
              </div>
            </div>
            <table>
              <thead>
                <tr className="border border-black">
                  <th className="border border-black">a</th>
                  <th className="border border-black">b</th>
                  <th className="border border-black">v</th>
                  <th className="border border-black">
                    <div className="flex flex-col text-center">
                      <div>a</div>
                      <div className="flex flex-row text-center">
                        <div className="w-full">a</div>
                        <div className="w-full">a</div>
                      </div>
                    </div>
                  </th>
                  <th className="border border-black">
                    <div className="flex flex-col text-center">
                      <div>a</div>
                      <div>a</div>
                    </div>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <div className=" w-full h-[100vh] p-[24px]">
        <div className="border-[5px] border-black h-full">
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