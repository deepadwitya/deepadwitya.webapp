'use client';

interface HamburgerToggleProps {
    isOpen: boolean;
    toggle: () => void;
}

export default function HamburgerToggle({ toggle }: HamburgerToggleProps) {
    return (
        <span
            onClick={toggle}
            aria-label='Toggle menu'
            className='relative flex h-8 w-8 flex-col items-center justify-center space-y-[4.5px] md:hidden'>
            <span className='h-[1.5px] w-5 rounded bg-black/80 dark:bg-white/90' />
            <span className='h-[1.5px] w-5 rounded bg-black/80 dark:bg-white/90' />
        </span>
    );
}
