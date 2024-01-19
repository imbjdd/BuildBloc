"use client"

import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleJoinNewsletter = () => {
        // TODO: Implement join newsletter logic
        console.log('Joining newsletter with email:', email);
    };

    return (
        <div className="md:block mb-8 max-w-7xl mx-auto px-4">
            <div className='rounded-lg bg-gradient-to-r from-emerald-500 via-pink-500 to-green-500 p-1'>
                <div className="p-12 flex gap-4 items-center flex-col justify-center w-full rounded-lg border border-neutral-200 text-sm dark:border-neutral-800 dark:[&>svg]:text-neutral-50 bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
                    <h2 className="text-3xl font-bold">Join Our Newsletter</h2>
                    <p className="text-md">Get regular updates about hackathons organized near you!</p>
                    <div className='flex relative bg-neutral-100 dark:bg-neutral-900 px-0 overflow-hidden rounded-xl items-stretch'>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            className="hidden md:block placeholder:text-neutral-600 dark:placeholder:text-neutral-300 grow h-12 w-1/4 px-4 md:px-8 bg-neutral-100 dark:bg-neutral-900"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            className="block md:hidden placeholder:text-neutral-600 dark:placeholder:text-neutral-300 grow h-12 w-1/4 px-4 md:px-8 bg-neutral-100 dark:bg-neutral-900"
                        />
                        <button
                            onClick={handleJoinNewsletter}
                            className="bg-emerald-800 dark:bg-emerald-800 text-white dark:text-white px-2 md:px-6 font-semibold"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}