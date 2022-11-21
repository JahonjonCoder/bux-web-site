import React from 'react';
import { YMaps } from 'react-yandex-maps';

const Map = () => {
    return (
        <YMaps>
            <Map defaultState={{
                center: [55.751574, 37.573856],
                zoom: 5
            }}>
                <Placemark geometry={[55.684758, 37.738521]} />
            </Map>
        </YMaps>
    );
}

export default Map;
