'use client';
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, WMSTileLayer } from 'react-leaflet'

export default function Map(){
    const [zoom, setZoom] = useState();
    return(
        <>
            <MapContainer className="h-[50vh] w-full" center={[-7.1, 110.3 ]} zoom={35}>
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
        <img src={"https://bhumi.atrbpn.go.id/mapproxy/service?format=image%2Fpng&layer=bhumi_persil&sld_version=1.1.0&request=GetLegendGraphic&service=WMS&version=1.1.1&styles="} alt="legend" />
        </>
    )
}