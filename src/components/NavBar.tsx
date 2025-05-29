'use client';

import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger
} from '@/registry/new-york-v4/ui/dialog';
import { Input } from '@/registry/new-york-v4/ui/input';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/registry/new-york-v4/ui/sheet';

import HamburgerToggle from './hambruger';
import { TextAnimate } from './bgComponents/text-animate';
import ThemeToggleButton from './ui/theme-toggle-button';
import { VercelCMDK } from './vercelCMDK';
import { AnimatePresence, motion } from 'framer-motion';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const sheetRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Close on resize/orientation
    useEffect(() => {
        const close = () => setIsOpen(false);
        window.addEventListener('resize', close);
        window.addEventListener('orientationchange', close);

        return () => {
            window.removeEventListener('resize', close);
            window.removeEventListener('orientationchange', close);
        };
    }, []);

    return (
        <div className='flex h-auto min-h-12 w-full items-center'>
            <div className='flex h-full min-h-12 w-1/6 items-center justify-center py-2'>
                <Link href={'/'}>
                    <img
                        src={'https://i.ibb.co/v6qdXCdq/image-upscaled.png'}
                        alt='logo'
                        width={100}
                        height={100}
                        className='h-12 w-12 rounded-full transition-all hover:scale-110'
                    />
                </Link>
            </div>

            <div className='flex h-full min-h-12 w-3/6 items-center justify-center'>
                <Dialog>
                    <DialogTrigger>
                        <Input placeholder='Search...' />
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogDescription>
                                <VercelCMDK />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

            <div className='flex h-full min-h-12 w-1/6 items-center justify-center'>
                <ThemeToggleButton start='top-right' />
            </div>

            <div className='relative flex h-full min-h-12 w-1/6 items-center justify-center'>
                <Sheet>
                    <SheetTrigger>
                        <HamburgerToggle isOpen={isOpen} toggle={() => setIsOpen((prev) => !prev)} />
                    </SheetTrigger>
                    <SheetContent side='right'>
                        <SheetHeader>
                            <SheetTitle></SheetTitle>
                            <SheetDescription className=''>
                                <Link href={'/'}>
                                    <TextAnimate className='py-1 text-2xl' animation='slideRight'>
                                        HOME
                                    </TextAnimate>
                                </Link>
                                <Link href={'/about'}>
                                    <TextAnimate className='py-1 text-2xl' animation='slideRight'>
                                        ABOUT
                                    </TextAnimate>
                                </Link>
                                <Link href={'/contact'}>
                                    <TextAnimate className='py-1 text-2xl' animation='slideRight'>
                                        CONTACT
                                    </TextAnimate>
                                </Link>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default NavBar;
