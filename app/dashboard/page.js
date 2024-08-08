'use client';
import Image from "next/image";
import { useRef,forwardRef,useState,useEffect } from "react";
import Map from '../../components/Map'
import { TabMenu } from 'primereact/tabmenu';
import { Panel } from 'primereact/panel';
import { Sidebar } from 'primereact/sidebar';
import {Button} from 'primereact/button'
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css'; 

import "primereact/resources/themes/bootstrap4-light-blue/theme.css"

export default function Home() {
  const [sideBar, setSideBar] = useState(false);
  const [width, setWidth] = useState(0);
  const [initWindows, setWindows]  = useState(false);
  useEffect(() => {
    if (!initWindows){
        setWidth(window.innerWidth);
        setWindows(true)
    }
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const items = [
    { label: 'Map', icon: 'pi pi-map', url:'.' },
    { label: 'Dashboard', icon: 'pi pi-database' ,url:'./dashboard'},
  ];
  let items2 = [
    { label: 'Map', icon: 'pi pi-map', },
    { label: 'Dashboard', icon: 'pi pi-database' ,url:'./dashboard'},


  ];
  console.log(width)
  console.log(initWindows)
  return (
    <main className="h-[100vh] w-full flex flex-col shadow-xl">
      {/* Header Section */}
      <div className="flex items-center justify-center align-center h-16 bg-[white] border-b-[2pt] border-black">
        {width<960&&<Button icon="pi pi-bars" onClick={() => setSideBar(true)} />}
        <img src="./pertamina.svg" className="object-contain h-8 mr-2" alt="Pertamina" />
        {/* <i className="pi pi-times" style={{fontWeight:"8pt"}}></i>
        <img src={'./surveyor_id.png'} className="object-contain h-8 mr-2 ml-2" alt="Surveyor Indonesia"  /> */}
        <div className="border border-gray-700 h-[60%] rounded-[10pt]"></div>
        <TabMenu model={items}/>
      </div>
      <div className="flex flex-row h-full ">
        {
            width<960 ? (<>
                    <Sidebar visible={sideBar} className="custom-panel" onHide={() => setSideBar(false)} style={{backgroundColor:"#0070a3"}} content={<Menu data={items2} />}>
                        {/* <div className="bg-[#0070a3]"> */}
                            {/* <Menu model={items2} className="custom-menu " /> */}
                            {/* Dashboard */}
                            
                        {/* </div> */}
                    </Sidebar>
                </>
            ):(
                <div className="bg-[#0070a3] w-[320px]">
                    {/* <Menu model={items2} className="custom-menu " /> */}
                    {/* Dashboard */}
                    <Menu data={items2} />
                </div>
            )
        }
        <div className="w-full h-full">
            <Map />
        </div>
      </div>
    </main>
  );
}

function Menu(data){
    // console.log(data.data)
    const final = data.data.map((e)=>(
        <button key={e.label} className="flex flex-row py-4 pl-[10%] items-center w-full text-left text-[14pt] bg-[white]">
            <i className={e.icon} style={{fontWeight:"8pt"}}></i>
            <div className="pl-2 w-full">{e.label}</div>
        </button>
    ))
    return(
        <div className="shadow-md bg-[#0070a3]">
            <div className="bg-[#e82532]  py-2 pl-[5%] text-[white] font-bold text-[16pt] shadow-md ">Dashboard Menu</div>
            {final}
        </div>
    )
}