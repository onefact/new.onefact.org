import { Card } from 'nextra/components';
import Image from 'next/image';
import React, { useState } from 'react';

const ImageWithHideOnError = (props) => {
    const [hideImage, setHideImage] = useState(false);

    return (
        !hideImage && (
            <Image
               {...props}
               onError={() => {
                   setHideImage(true);
               }}
            />
        )
    );
};

export const CardContents = ({ member }) => {
    return (
        <Card
            image
            arrow
            title={member.name}
            href={`/five-bike/${member.nickname}`}
        >
            <ImageWithHideOnError
                src={`/images/${member.nickname}.jpg`}
                alt={member.name}
                width={500} height={500}
            ></ImageWithHideOnError>
        </Card>
    );
};