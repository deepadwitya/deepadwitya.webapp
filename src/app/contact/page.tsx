import React from 'react';

import { AuroraText } from '@/components/bgComponents/aurora-text';
import { ScriptCopyBtn } from '@/components/bgComponents/script-copy-btn';
import { TextAnimate } from '@/components/bgComponents/text-animate';
import HoverExpand from '@/components/ui/hover-expand';

function Contact() {
    const customCommandMap = {
        WhatsApp: '+91 6299 567 909',
        Telegram: 'https://t.me/only_adwitya',
        Email: 'mailto:adwitya6202@gmail.com'
    };

    const images = [
        'https://img.freepik.com/free-vector/illustration-india-flag_53876-27130.jpg?semt=ais_hybrid&w=740',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3pcljKh3z5VxiGI3BPnNid1u9RFhhIdjR3g&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8_6_BEmZjPM6P2rwXjLu1rtFj-gPmf431g&s',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/2560px-Flag_of_the_Philippines.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Argentina.png',
        'https://media.istockphoto.com/id/483663073/vector/flag-of-portugal.jpg?s=612x612&w=0&k=20&c=JOAj0sAYKSn9B35gyCyrAEZs0APEhwVENHlCfHnMHhw=',
        'https://media.istockphoto.com/id/967321044/vector/vector-flag-of-brazil-proportion-7-10-brazilian-national-flag.jpg?s=612x612&w=0&k=20&c=lKrHddeZEPnO9yF5lVhZY_j09035BphxRqxnG7JYy7U='
    ];

    return (
        <div className='flex flex-col h-auto min-h-screen items-center justify-center space-y-12 p-12'>
            <TextAnimate className='text-2xl font-bold' animation={'blurInUp'}>
                Get in touch
            </TextAnimate>
            <ScriptCopyBtn
                showMultiplePackageOptions={true}
                codeLanguage='none'
                lightTheme='nord'
                darkTheme='vitesse-dark'
                commandMap={customCommandMap}
            />
            {/* <div>
                <TextAnimate className='text-2xl font-bold' animation={'slideUp'}>
                    Avail Special Discounts
                </TextAnimate>
                <h1 className='text-2xl font-bold'>
                    <AuroraText>for these countries</AuroraText>
                </h1>
            </div> */}
            {/* <HoverExpand
                images={images}
                initialSelectedIndex={0}
                thumbnailHeight={200}
                modalImageSize={400}
                maxThumbnails={11}
            /> */}
        </div>
    );
}

export default Contact;
