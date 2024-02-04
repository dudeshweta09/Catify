import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { NextPage } from 'next'


const Map: NextPage = () => {
    const libraries = useMemo(()=>['places'],[])
    const mapCenter = useMemo(()=>({lat:28.644800,lng:77.216721}),[])

    const mapOptions = useMemo<google.maps.MapOptions>(
        ()=>({
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: false,
        }),
        []
    );
    
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
        libraries: libraries as any,
    });

    if(!isLoaded){
        return <p>Loading....</p>
    }
  return (
    <>
    <div>
        <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{marginTop:'50px', marginLeft:'20px', width:'400px', height:'400px'}}
        onLoad={()=>console.log("Map Component Loaded...")}
        >
            <Marker position={mapCenter}/>
        </GoogleMap>
    </div>
    </>
  )
}

export default Map
