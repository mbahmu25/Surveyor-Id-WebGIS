'use client';
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, WMSTileLayer } from 'react-leaflet'

export default function Map(){
    const [zoom, setZoom] = useState();
    return(
        <>
            
            <MapContainer className="h-[100%] w-full z-0" center={[-7.1, 110.3 ]} zoom={15}>
                
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <WMSTileLayer
                    layers={'bhumi_persil'}
                    url={`https://bhumi.atrbpn.go.id/mapproxy/service`}
                    transparent={true}
                    format='image/png'
                    opacity={0.8}
                />
          
            </MapContainer>
        
        </>
    )
}