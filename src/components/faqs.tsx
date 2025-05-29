'use client';

import { useEffect, useState } from 'react';

import { TextComponent } from '@/components/basicComponents/featurefour';
import { cn } from '@/lib/utils';

const data = [
    {
        title: 'Would you build WebApp for me?',
        content: 'Definitely.',
    },
    {
        title: 'Free of charge?',
        content: 'Sorry. However I could make you a free WebApp for 1 year Discord nitro though.',
   },
    {
        title: 'Pricing?',
        content: '$15 for single-paged WebApp, $30 for doubly-paged, $70/90+ for multiple-paged.',
        },
    {
        title: 'Are you guys a team?',
        content: "No, I'm an Indie. Anyways, I gurrantee you a fully functional Urban-Advanced WebApp.",
         }
];

export function FAQS() {
    const [featureOpen, setFeatureOpen] = useState<number>(0);
    const [timer, setTimer] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 10);
        }, 10);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer > 10000) {
            setFeatureOpen((prev) => (prev + 1) % data.length);
            setTimer(0);
        }
    }, [timer]);

    return (
        <div className='container'>
            <div className='mb-20 text-center'>
                <p className='mb-2 text-sm font-medium text-neutral-500 uppercase'>Questions for me?</p>

                <h2 className='mb-4 text-3xl font-semibold tracking-tighter text-neutral-800 dark:text-neutral-300'>
                    Common FAQS
                </h2>
            </div>
            <div className='flex flex-col'>
                <div className='items-center  space-y-10'>
                    {data.map((item, index) => (
                        <button
                            className='w-full'
                            key={item.title}
                            onClick={() => {
                                setFeatureOpen(index);
                                setTimer(0);
                            }}
                            type='button'>
                            <TextComponent
                                content={item.content}
                                isOpen={featureOpen === index}
                                loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                                number={index + 1}
                                title={item.title}
                            />
                        </button>
                    ))}
                </div>
                {/* <div className='h-full'>
                    <div className={cn('relative h-96 w-full overflow-hidden rounded-lg md:h-[500px]')}>
                        {data.map((item, index) => (
                            <img
                                alt={item.title}
                                className={cn(
                                    'absolute h-[500px] w-full transform-gpu rounded-lg object-cover transition-all duration-300',
                                    featureOpen === index ? 'scale-100' : 'scale-70',
                                    featureOpen > index ? 'translate-y-full' : ''
                                )}
                                key={item.title}
                                src={item.srcImage}
                                style={{ zIndex: data.length - index }}
                            />
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    );
}
