import React from 'react';
import {useEffect, useState} from 'react';
import { BiUpArrow } from "react-icons/bi";
import { HiArrowCircleUp } from "react-icons/hi";

import '../stylesheets/ScrollToTop.css';

const ScrollToTop = () => {
    const [backToTopButtom, setBackTopButton]= useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackTopButton(true);
            } else {
                setBackTopButton(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div>
            {backToTopButtom && (
                <button className='cm-up' onClick={scrollUp}> 
                    <span className="cm-icon">
                        <HiArrowCircleUp/>
                        {/* <i className="fas fa-chevron-up"></i> */}
                    </span>
                </button>
            )}
    </div>
};

export default React.memo(ScrollToTop);