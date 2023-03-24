import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 16px;
`;

const Map = styled.a`
    display: block;
    z-index: 2;
    position: relative;
    cursor: pointer;
`;

const MapItem = styled.div`
    border: 1px solid #cecece;
    border-radius: 8px;
`;

const mapOptions = {
    center: new naver.maps.LatLng(37.34, 127.1067), // x, y 값 설정 
    scaleControl: false, // 우측 하단 scale 표시
    mapDataControl: false, // 좌측 하단 @ NAVER Corp 표시
    zoom: 18, // 지도 줌 레벨
    draggable: false,
    // pinchZoom: false,
    scrollWheel: false,
    // keyboardShortcuts: false,
    // disableDoubleTapZoom: true,
    // disableDoubleClickZoom: true,
    // disableTwoFingerTapZoom: true
};



export default () => {
    const mapRef = useRef(null);

    useEffect(() => {


        if (mapRef.current) {
            // 37.3402, 127.1066
            const map = new naver.maps.Map(mapRef.current, mapOptions);
            const marker = new naver.maps.Marker({
                position: map.getCenter(),
                map: map
            });

            // const listener = naver.maps.Event.addDOMListener(mapRef.current, 'click', function () {
            //     window.open("https://naver.me/xdIkk34F")
            // });
        }

    }, []);

    const mapStyle = {
        width: "100%",
        height: "400px",
    };



    return (
        <Container>
            <Map href="https://naver.me/xdIkk34F" target={"_blank"}>
                <MapItem
                    ref={mapRef}
                    style={mapStyle}
                >지도</MapItem>
            </Map>
        </Container>
    );
};
