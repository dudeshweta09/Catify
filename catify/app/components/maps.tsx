import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey:process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    });

    if(!isLoaded) return <div>Loading...</div>
    return <Map/>
}

function Map(){
    return <GoogleMap zoom={10}
     center={{lat:28.644800,lng:77.216721}}
      mapContainerStyle={{width:'400px', height:'400px',marginTop:'-30px', marginLeft:'auto', marginRight:'auto'}}>

      </GoogleMap>
}