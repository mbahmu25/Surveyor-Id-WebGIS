'use client';
import Image from "next/image";
import { useRef,forwardRef } from "react";
import ReactToPrint from 'react-to-print';
import Map from '../components/Map'
import { TabMenu } from 'primereact/tabmenu';
import { Panel } from 'primereact/panel';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-blue/theme.css"

export default function Home() {
  const componentRef = useRef();
  const items = [
    { label: 'Map', icon: 'pi pi-map', url:'.' },
    { label: 'Dashboard', icon: 'pi pi-database' ,url:'./dashboard'},
  ];
  return (
    <main className="h-[100vh] w-full flex flex-col">
      {/* Header Section */}
      <div className="flex items-center justify-center align-center h-15  border-b-[2pt] border-black">
        <img src="./pertamina.svg" className="object-contain h-8 mr-2" alt="Pertamina" />
        {/* <i className="pi pi-times" style={{fontWeight:"8pt"}}></i>
        <img src={'./surveyor_id.png'} className="object-contain h-8 mr-2 ml-2" alt="Surveyor Indonesia"  /> */}
        <div className="border border-gray-700 h-[60%] rounded-[10pt]"></div>
        <TabMenu model={items} />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 relative">
        {/* Legenda Section */}
        <div className="fixed bottom-0 left-0 m-5 z-50 w-auto h-auto">
          <div className="bg-white text-center font-bold text-xl">
            <div className="border border-black p-2">Legenda</div>
            <img
              src="https://bhumi.atrbpn.go.id/mapproxy/service?format=image%2Fpng&layer=bhumi_persil&sld_version=1.1.0&request=GetLegendGraphic&service=WMS&version=1.1.1&styles="
              alt="legend"
              className="border border-black "
            />
          </div>
        </div>

        {/* Responsive Map */}
        {/* <div className="h-full w-full"> */}
          <Map />
        {/* </div> */}
      </div>

      {/* Hidden Report Component for Printing */}
      <div className="hidden">
        <Report
          ref={componentRef}
          deskrispi={"JL. MUKTI NO. 9 (KOMPLEK PELITA AIR SERVICE) , KELURAHAN BATU AMPAR, KECAMATAN KRAMATJATI, KOTA ADM. JAKARTA TIMUR, PROVINSI DKI JAKARTA"}
          tanggal={"4/20/69"}
        />
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
      <div className=" w-full p-[24px] py-[100px]">
        <div className="border-[4px] border-black">
          {/* Company Logo */}
          <div className="flex justify-end">
            <img src={'./pertamina.svg'}   className="object-contain my-1 mr-1 h-[20%] w-[20%]" alt="Pertamina"  />
          </div>
          {/* controllign n check asset ribbon */}
          <div className="text-[10pt] font-bold text-center bg-[#2e9eb8]">
            CONTROLLING AND CHECK ASSET
          </div>
          {/* Header */}
          <div className="flex flex-row text-[10pt]">
            {/* Header Kiri */}
            <div className="w-full py-2 px-4">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="w-[15%]">
                      Hari
                    </td>
                    <td className="w-[75%]">
                      : Selasa
                    </td>
                  </tr>

                  <tr>
                    <td className="w-[15%]">
                      Tanggal
                    </td>
                    <td className="w-[75%]">
                      : 05 Maret 2024
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[15%]">
                      Wilayah
                    </td>
                    <td className="w-[75%]">
                      : Selasa
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Header kanan */}
            <div className="w-full py-2 px-4">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="w-[25%]">
                      Pemeriksa
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[25%]">
                      - {/* Tanda tangan pemeriksa*/}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Komisi Asset dan Pemeriksaan */}
          <div className="text-[10pt] text-[white] text-center bg-[#d1332e]">
            Komisi Asset dan Pemeriksaan
          </div>
          {/* Kondisi Asset */}
          <p className="text-[10pt] py-2 px-4">
            1. loram <br></br>
            2. aku  <br></br>
            3. suka <br></br>
            4. <br></br>
          </p>
          <div className="m-4">
            <table className="w-[100%] border-collapse border border-black">
              <thead>
                <tr className="border border-black text-[8pt] text-center font-semibold">
                  <td className="border border-black bg-[#87bbe6] p-2 w-[1%] p-1 break-words ">No. Asset Bangunan</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[10%]">Lokasi</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">Quantity (UNIT)</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">Status Asset</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">Asset Class</td>
                  <td className="border border-black bg-[#ebc57a] p-2 w-[1%]">PTH</td>
                  <td className="border border-black bg-[#ebc57a] p-2 w-[5%] break-words">Permasalahan Hukum</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Plang</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Patok</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Pagar</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Penjagaan</td>
                </tr>
              </thead>
              <tbody>
                {/* Add your rows here */}
                <tr className="border border-black text-[8pt] text-center font-semibold">
                  <td className="border border-black bg-[#87bbe6] p-2 w-[1%] p-1 break-words ">500024112</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[10%]">KP-TTELKOM (DH. KP-TOMANG)</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">1</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">Clear</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">5145</td>
                  <td className="border border-black bg-[#ebc57a] p-2 w-[1%]">Tidak Ada</td>
                  <td className="border border-black bg-[#ebc57a] p-2 w-[5%] break-words">Tidak Ada</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Ada (Nomor Aset Tahun 2022)</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Tidak Ada</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Ada</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Ada</td>
                </tr>
                <tr className="border border-black text-[8pt] text-center font-semibold">
                  <td className="border border-black bg-[#87bbe6] p-2 w-[1%] p-1 break-words ">500024112</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[10%]">KP-TTELKOM (DH. KP-TOMANG)</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">1</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">Clear</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">5145</td>
                  <td className="border border-black bg-[#ebc57a] p-2 w-[1%]">Tidak Ada</td>
                  <td className="border border-black bg-[#ebc57a] p-2 w-[5%] break-words">Tidak Ada</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Ada (Nomor Aset Tahun 2022)</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Tidak Ada</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Ada</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Ada</td>
                </tr>
                <tr className="border border-black text-[8pt] text-center font-semibold">
                  <td className="border border-black bg-[#87bbe6] p-2 w-[1%] p-1 break-words ">500024112</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[10%]">KP-TTELKOM (DH. KP-TOMANG)</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">1</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">Clear</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">5145</td>
                  <td className="border border-black bg-[#ebc57a] p-2 w-[1%]">Tidak Ada</td>
                  <td className="border border-black bg-[#ebc57a] p-2 w-[5%] break-words">Tidak Ada</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Ada (Nomor Aset Tahun 2022)</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Tidak Ada</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Ada</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Ada</td>
                </tr>
                <tr className="border border-black text-[8pt] text-center font-semibold">
                  <td className="border border-black bg-[#87bbe6] p-2 w-[1%] p-1 break-words ">500024112</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[10%]">KP-TTELKOM (DH. KP-TOMANG)</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">1</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">Clear</td>
                  <td className="border border-black bg-[#87bbe6] p-2 w-[5%]">5145</td>
                  <td className="border border-black bg-[#ebc57a] p-2 w-[1%]">Tidak Ada</td>
                  <td className="border border-black bg-[#ebc57a] p-2 w-[5%] break-words">Tidak Ada</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Ada (Nomor Aset Tahun 2022)</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Tidak Ada</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Ada</td>
                  <td className="border border-black bg-[#b0eb7a] p-2 w-[5%]">Ada</td>
                </tr>
                
                {/* Repeat above <tr> block for more rows */}
              </tbody>
            </table>
          </div>

        </div>
      </div>
      {/* Ini Page 3 */}
      <div className=" w-full h-[100vh] p-[24px] py-[100px]">
        <div className="border-[4px] border-black h-full">

        </div>
      </div>
      <div className=" w-full h-[100vh] p-[24px] py-[100px]">
        <div className="border-[4px] border-black h-full">

        </div>
      </div>
      <div className=" w-full h-[100vh] p-[24px] py-[100px]">
        <div className="border-[4px] border-black h-full">

        </div>
      </div>
      <div className=" w-full h-[100vh] p-[24px] py-[100px]">
        <div className="border-[4px] border-black h-full">

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