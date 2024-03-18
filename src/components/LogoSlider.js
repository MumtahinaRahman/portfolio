import React, { useEffect, useRef } from 'react';
import '../App.css'; // Make sure to import your CSS file

import html from '../assets/img/logos/html.svg'
import css from '../assets/img/logos/css.svg'
import js from '../assets/img/logos/js.svg'
import react from '../assets/img/logos/react.svg'
import ts from '../assets/img/logos/ts.svg'
import node from '../assets/img/logos/node.svg'
import boot from '../assets/img/logos/boot.svg'
import ant from '../assets/img/logos/ant.svg'
import mat from '../assets/img/logos/mat.svg'
import figma from '../assets/img/logos/figma.svg'
import python from '../assets/img/logos/python.svg'


export const LogoSlider = () => {
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const slide = slideRef.current;

    // Calculate total width of all logos
    const logosWidth = slide.offsetWidth;
    const containerWidth = container.offsetWidth;

    // Duplicate logos if necessary to ensure continuous scrolling
    if (containerWidth < logosWidth * 2) {
      const clone = slide.cloneNode(true);
      container.appendChild(clone);
    }

    // Animation
    let animationId;

    const animate = () => {
      const scrollLeft = container.scrollLeft;
      container.scrollLeft += 1; // Change the scroll speed here

      // Reset scroll position when reaching the end
      if (scrollLeft >= logosWidth) {
        container.scrollLeft -= logosWidth;
      }

      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="logos-container" ref={containerRef}>
      <div className="logos-slide" ref={slideRef}>
        
        <img src={html} alt="3M" />
        <img src={css} alt="3M" />
        <img src={js} alt="3M" />
        <img src={react} alt="3M" />
        <img src={ts} alt="3M" />
        <img src={ant} alt="3M" />
        <img src={mat} alt="3M" />
        <img src={boot} alt="3M" />
        <img src={figma} alt="3M" />
        <img src={python} alt="3M" />
        <img src={node} alt="3M" />

      </div>
    </div>
  );
};

  
