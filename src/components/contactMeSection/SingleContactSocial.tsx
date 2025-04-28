import React from 'react';

interface SingleContactSocialProps {
    Icon: React.ElementType;
    link: string;
}

const SingleContactSocial: React.FC<SingleContactSocialProps> = ({ Icon, link }) => {
    return (
        <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center ">
            <a href={link} className="cursor-pointer">
                <Icon />
            </a>
        </div>
    );
};

export default SingleContactSocial;