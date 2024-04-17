"use client";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { fakeRequest } from "@/util/fakeRequest.ts";

interface CardProps {
    className: string;
    id: string;
}

export default function Card({ className, id }: CardProps) {
    const [timeElapsed, setTimeElapsed] = useState(null);

    useEffect(() => {
        async function run() {
            let resp = await fakeRequest(9);
            setTimeElapsed(resp);
        }

        run();
    }, []);

    return (
        timeElapsed && (
            <div
                className={twMerge(
                    "w-full h-full flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl",
                    className,
                )}
            >
                <div className="m-auto">{timeElapsed}</div>
            </div>
        )
    );
}
