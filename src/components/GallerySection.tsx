import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";

import ImageSlidePopup from "./ImageSlidePopup";

const Content = styled.section`
    padding: 36px 0;

    margin: 10px;
    box-shadow: 0px 0px 0 1px rgba(32, 71, 84, 0.03), 0px 0px 0 3px rgba(32, 71, 84, 0.02);;
    border-radius: 14px;
    background-color:#fff;
`;

const GridItem = styled.figure`
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin:0;
    box-sizing: border-box;
    background: #fff;
    cursor: pointer;

    & > img{
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-gap: 4px;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows: 150px;

    width: 86%;
    margin: 36px auto;
    @media(min-width: 361px) {
        grid-auto-rows: 200px;
    }
`;

const Title = styled.h2`
    font-size: 22px;
    padding-bottom: 10px;
    text-align: center;
`;

const Button = styled.button`
    padding: 8px 15px;
    border-radius: 30px;
    margin: auto;
    display: block;
    color: #f5f5f5;
    font-size: 15px;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    background: #000;
`;

const initialThumnailList = [
    "img_1",
    "img_2",
    "img_3",
    "img_4",
];

const thumbnailList = [
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
];

export default () => {

    /**
     * 이미지가 가로가 긴 이미지, 세로가 긴 이미지를 구분
     *  가로가 긴 이미지 -> height: 100%; width: auto -> imgWidthLong  rectangleWidthLong
     *  세로가 긴 이미지 -> height: auto; width: 100% -> rectangleHeightLong
     * 
     */

    const imgRef = useRef<HTMLImageElement[] | null[]>([]);

    const [imgList, setImgList] = useState<string[]>(initialThumnailList);
    const [isSlideShow, setIsSlideShow] = useState(false);
    const [currentSlideNum, setCurrentSlideNum] = useState(0);

    useEffect(() => {
        document.documentElement.style.overflow = isSlideShow ? 'hidden' : "auto";

    }, [isSlideShow]);

    const handleGalleryMoreBtn = (event: React.MouseEvent) => {
        setImgList(thumbnailList);

        (event.target as HTMLButtonElement).remove();
    };

    const handleThumbnailClick = (event: React.MouseEvent) => {
        const getValue = (event.target as HTMLElement).getAttribute("data-value") as string;
        setIsSlideShow(true);
        const getNum = Number(getValue.split("img_")[1]);
        setCurrentSlideNum(getNum);
    };

    const ThumbnailList = imgList.map((imgName, idx) => {
        const getImgUrl = () => new URL(`../assets/images/thumbnail/${imgName}.jpeg`, import.meta.url).href;

        return (
            <GridItem key={idx}>
                <img
                    ref={el => imgRef.current[idx] = el}
                    // width={600}
                    src={getImgUrl()}
                    data-value={imgName}
                    onClick={handleThumbnailClick}
                    alt="갤러리 이미지"
                />
            </GridItem>
        )
    });

    return (
        <Content data-scroll>
            <Title>갤러리</Title>
            <GridContainer>
                {ThumbnailList}
            </GridContainer>
            <Button onClick={handleGalleryMoreBtn}>갤러리 더보기</Button>
            <ImageSlidePopup
                isSlideShow={isSlideShow}
                setIsSlideShow={setIsSlideShow}
                currentSlideNum={currentSlideNum}
            />
        </Content>
    )
}