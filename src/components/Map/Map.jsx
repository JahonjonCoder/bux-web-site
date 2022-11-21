import React from 'react';
import { YMaps, Map, Placemark,FullscreenControl} from 'react-yandex-maps';

const Maps = () => {
    return (
        <YMaps>
            <Map defaultState={{
                center: [39.773427, 64.421715],
                zoom: 9,
            }}>
                <Placemark geometry={[39.773427, 64.421715]} />
                <FullscreenControl options={{float:"right"}} />
            </Map>
        </YMaps>
    );
}

export default Maps;
