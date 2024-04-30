"use client";

import React, { useEffect, useState, useRef } from "react";

export type TWithScrollActiveProps = {
  activeSection: string;
};

const withScrollActive = (OriginalComponent: any) => {
  const WithScrollActiveHOC = (props: any) => {
    const [activeSection, setActiveSection] = useState<string>("");
    const observer = useRef<any>(null);

    useEffect(() => {
      observer.current = new IntersectionObserver((entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;

        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      });

      const sections = document.querySelectorAll("[data-section]");

      sections.forEach((section) => {
        observer.current.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.current.unobserve(section);
        });
      };
    }, []);

    return <OriginalComponent activeSection={activeSection} {...props} />;
  };

  WithScrollActiveHOC.displayName = "WithScrollActiveHOC";

  return WithScrollActiveHOC;
};

export default withScrollActive;
