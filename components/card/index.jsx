import { Card } from 'nextra/components';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

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
    const [link, setLink] = useState();

    useEffect(() => {
        if (member.links) {
            const link_key = Object.keys(member.links)[0];
            setLink(member.links[link_key]);
        }
    }, []);
    
    return (
        <Card
            image
            arrow
            title={member.name}
            href={link ? link : '/about#team'}
        >
            <ImageWithHideOnError
                src={`/images/${member.nickname}.jpg`}
                alt={member.name}
                width={500} height={500}
            ></ImageWithHideOnError>
        </Card>
    );
};