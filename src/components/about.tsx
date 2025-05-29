'use client';

import React, { useEffect, useId, useRef, useState } from 'react';

import { useOutsideClick } from '@/hooks/use-outside-click';

import { AnimatePresence, motion } from 'motion/react';

export function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setActive(false);
            }
        }

        if (active && typeof active === 'object') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === 'object' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 z-10 h-full w-full bg-black/20'
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {active && typeof active === 'object' ? (
                    <div className='fixed inset-0 z-[100] grid place-items-center'>
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className='absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden'
                            onClick={() => setActive(null)}>
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className='flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white sm:rounded-3xl md:h-fit md:max-h-[90%] dark:bg-neutral-900'>
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className='h-80 w-full object-contain object-top  rounded-4xl  lg:h-80'
                                />
                            </motion.div>

                            <div>
                                <div className='flex items-start justify-between p-4'>
                                    <div>
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className='font-bold text-neutral-700 dark:text-neutral-200'>
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className='text-neutral-600 dark:text-neutral-400'>
                                            {active.description}
                                        </motion.p>
                                    </div>
                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        className='rounded-full bg-black px-4 py-3 text-sm font-bold text-white'>
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className='relative px-4 pt-4'>
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className='flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] md:h-fit md:text-sm lg:text-base dark:text-neutral-400'>
                                        {typeof active.content === 'function' ? active.content() : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <ul className='mx-auto w-full max-w-2xl gap-4'>
                {cards.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className='flex cursor-pointer flex-col items-center justify-between rounded-xl p-4 hover:bg-neutral-50 md:flex-row dark:hover:bg-neutral-800'>
                        <div className='flex flex-col gap-4 md:flex-row'>
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <img
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className='h-40 w-40 rounded-lg object-cover object-top md:h-14 md:w-14'
                                />
                            </motion.div>
                            <div>
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className='text-center font-medium text-neutral-800 md:text-left dark:text-neutral-200'>
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className='text-center text-neutral-600 md:text-left dark:text-neutral-400'>
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className='mt-4 rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-black hover:bg-black hover:text-white md:mt-0'>
                            {card.ctaText}
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => (
    <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.05 } }}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-4 w-4 text-black'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M18 6l-12 12' />
        <path d='M6 6l12 12' />
    </motion.svg>
);

const cards = [
    {
        description: 'India',
        title: 'A. Deep Verma',
        src: 'https://i.ibb.co/v6qdXCdq/image-upscaled.png',
        ctaText: 'About me',
        content: () => (
            <p>
                I am Adwitya Deep Verma a 3rd-year B-Tech student in Electronics and Communication Engineering (ECE) with a passion for cybersecurity. I have completed a Cyber Defense diploma from Cybervidyapeeth, demonstrating my commitment to the field. In addition to my academic pursuits, I have also obtained certifications in Open-Source Intelligence (OSInt), Digital Forensics. As an active cybersecurity enthusiast, I am driven to stay up-to-date with the latest trends and advancements in the field.
            </p>
        )
    }
];
