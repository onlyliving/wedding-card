import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";

const imageList = [
    "img_1",
    "img_2",
    "img_3",
    "img_4",
    "img_5",
    "img_6",
    "img_7",
    "img_8",
    "img_9",
    "img_10",
    "img_11",
    "img_12",
    "img_13",
    "img_14",
    "img_15",
    "img_16",
    "img_17",
    "img_18",
    "img_19",
    "img_20",
    "img_21",
    "img_22",
    "img_23",
    "img_24",
    "img_25",
    "img_26",
    "img_27",
    "img_28",
];

const GridItem = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    & > img {
        display: block;
    }
    @media(max-width: 500px) {
        & > img {
            width: 360px;
        }
    }
    @media(min-width: 501px) {
        & > img {
            width: 500px;
        }
    }
    
`;

const Container = styled.div`
    z-index: 9999;
    overflow:hidden;
    position: fixed;
    left: 0;
    top: 0;
    // display: flex;
    width: 100%;
    height: 100%;
`;

const Content = styled.section`
    z-index: 2;
    overflow: hidden;
    display: flex;
    position: relative;
    height: 100%;
    
    @media(max-width: 500px) {
        width: 360px;
    }
    @media(min-width: 501px) {
        width: 500px;
    }
    margin: auto;
`;

const Bg = styled.div`
    position:absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #fff;
    cursor: pointer;
`;

const HideTitle = styled.h2`
    position: absolute;
    left: -9999px;
    top: -9999px;
`;

const ImageWrap = styled.div`
    // z-index: 2;
    position: absolute;
    height: 100%;
    display: flex;
`;

const CloseBtn = styled.button`
    z-index: 999;
    width: 50px;
    height: 50px;
    position:absolute;
    right: 0;
    top: 0;
    text-indent: -9999px;
    padding: 0;
    &:before,
    &:after {
        content: "";
        width: 22px;
        height: 2px;
        background:#000;
        position:absolute;
        left: 50%;
        top: 50%;
    }
    &:before {
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    // @media(min-width: 501px) {
    //     width: 80px;
    //     height: 80px;
    //     position:fixed;
    // }

    @media(min-width: 768px) {
        width: 80px;
        height: 80px;
        position: fixed;
    }

`;

const ArrowBtnWrap = styled.div`
    pointer-events : none;
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    @media(max-width: 500px) {
        max-width: 500px;
        height: 100%;
    }
    @media(min-width: 501px) {
        max-width: 600px;
    }
`;

const PrevBtn = styled.button`
    pointer-events : all;
    z-inxex: 10;
    position: fixed;
    left: 0;
    padding: 0;
    width: 60px;
    height: 100%;
    text-indent: -9999px;
    cursor: pointer;
    box-sizing: border-box;

    &:before {
        content: '';
        width: 16px;
        height: 16px;
        border-bottom: 1px solid #000;
        border-right: 1px solid #000;
        transform: rotate(135deg);
        display: block;
        text-indent: -9999px;
        position: absolute;
        left: 23px;
    }

    @media(max-width: 500px) {
    }
    @media(min-width: 501px) {
    }

    &:hover {
        opacity: 0.5;
    }
`;
const NextBtn = styled.button`
    pointer-events : all;
    z-inxex: 10;
    position: fixed;
    right: 0;
    padding: 0;
    width: 60px;
    height: 100%;
    text-indent: -9999px;
    cursor: pointer;

    &:before {
        content: '';
        width: 16px;
        height: 16px;
        border-bottom: 1px solid #000;
        border-right: 1px solid #000;
        transform: rotate(-45deg);
        display: block;
        text-indent: -9999px;
        position: absolute;
        left: 15px;
    }

    @media(max-width: 500px) {
    }
    @media(min-width: 501px) {
    }
    &:hover {
        opacity: 0.5;
    }
`;

export default ({
    isSlideShow,
    setIsSlideShow,
    currentSlideNum
}: {
    isSlideShow: boolean;
    setIsSlideShow: any;
    currentSlideNum: number;
}) => {

    const imgRef = useRef<HTMLImageElement[] | null[]>([]);
    const imageContainerRef = useRef<HTMLDivElement | null>(null);
    const [imageBoxLeft, setImageBoxLeft] = useState(0);


    const handlePrevMove = () => {
        // console.log("handlePrevMove");

        if (imgRef.current[0] && imageContainerRef.current) {
            const imgWidth = imgRef.current[0].getBoundingClientRect().width;
            const imageContainerWidth = imageContainerRef.current.getBoundingClientRect().width;
            // console.log(imgWidth);
            // console.log(imageContainerWidth);
            // console.log(imageBoxLeft);
            if (imageBoxLeft === 0) {
                const lastPos = (imageContainerWidth * -1) + imgWidth;
                setImageBoxLeft(lastPos);

            } else {
                const newPos = imageBoxLeft + imgWidth;
                setImageBoxLeft(newPos);
            }
        }
    }

    const handleNextMove = () => {
        // console.log("handleNextMove");
        if (imgRef.current[0] && imageContainerRef.current) {
            const imgWidth = imgRef.current[0].getBoundingClientRect().width;
            const imageContainerWidth = imageContainerRef.current.getBoundingClientRect().width;

            if (imageContainerWidth <= Math.abs(imageBoxLeft) + imgWidth) {
                setImageBoxLeft(0);

            } else {
                const newPos = imageBoxLeft - imgWidth;
                setImageBoxLeft(newPos);
            }
        }
    };

    useEffect(() => {
        if (isSlideShow) {
            if (imgRef.current[0]) {
                const imgWidth = imgRef.current[0].getBoundingClientRect().width;
                const initialImgLeftPos = currentSlideNum === 1 ? 0 : imgWidth * (currentSlideNum - 1) * -1;
                setImageBoxLeft(initialImgLeftPos);
            }
        }


    }, [isSlideShow]);

    let startPoint = 0;
    let endPoint = 0;

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        // console.log("handleMouseDown");
        startPoint = event.pageX;
    };

    const slideEvent = (startPoint: number, endPoint: number) => {
        // console.log("slideEvent");
        if (startPoint == endPoint) return;
        if (startPoint < endPoint) {
            // console.log("prev move");
            handlePrevMove();
        } else {
            // console.log("next move");
            handleNextMove();
        }
    }

    const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
        endPoint = event.pageX;
        slideEvent(startPoint, endPoint);
    };

    let isTouchTwoPointsMoreThan = false;
    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        // console.log("handleTouchStart - event.touches.length => ", event.touches.length);
        if (event.touches.length > 1) {
            // 2점 이상 터치할 때 - 슬라이드 되지 않도록 함
            isTouchTwoPointsMoreThan = true;
            event.isPropagationStopped();
            return;
        }

        isTouchTwoPointsMoreThan = false;
        startPoint = event.touches[0].pageX;
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        // console.log("handleTouchEnd - event.touches => ", event.touches);
        if (isTouchTwoPointsMoreThan) return;

        endPoint = event.changedTouches[0].pageX;
        slideEvent(startPoint, endPoint);
    };

    const handleClose = () => setIsSlideShow(false);

    const ImageList = imageList.map((imgName, idx) => {
        const getImgUrl = () => new URL(`../assets/images/${imgName}.jpeg`, import.meta.url).href;

        return (
            <GridItem key={idx}>
                <img
                    ref={el => imgRef.current[idx] = el}
                    src={getImgUrl()}
                    data-value={imgName}
                    alt="갤러리 이미지"
                />
            </GridItem>
        )
    });

    return (
        !isSlideShow ? <></> :
            <Container>
                <Content>
                    <HideTitle>이미지 팝업창</HideTitle>
                    <ImageWrap
                        ref={imageContainerRef}
                        style={{ left: imageBoxLeft }}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}

                    >
                        {ImageList}
                    </ImageWrap>
                    <ArrowBtnWrap>
                        <PrevBtn onClick={handlePrevMove}>이전</PrevBtn>
                        <NextBtn onClick={handleNextMove}>다음</NextBtn>
                    </ArrowBtnWrap>
                    <CloseBtn onClick={handleClose}>팝업창 닫기</CloseBtn>
                </Content>
                <Bg onClick={handleClose} />
            </Container>
    )
};