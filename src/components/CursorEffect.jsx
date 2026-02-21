"use client";

import { useEffect } from "react";
import { followingDotCursor } from "cursor-effects";

const CursorEffect = () => {
    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth >= 768) {
            const cursor = new followingDotCursor({
                color: ["#2d4fe180"],
            });

            return () => {
                cursor.destroy?.();
            };
        }
    }, []);

    return null;
};

export default CursorEffect;
