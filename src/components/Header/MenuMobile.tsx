import React, { useRef, ReactNode, useEffect } from "react";
import ReactPortal from "@/components/ReactPortal";
import { CSSTransition } from "react-transition-group";

interface MenuMobileProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}

const MenuMobile = ({ children, isOpen, className }: MenuMobileProps) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    if (!isOpen) document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <ReactPortal wrapperId="modal-menu-mobile-container">
      <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div
          className={`fixed w-screen h-screen bg-blue-300 top-0 left-0 overflow-hidden burger-menu modal z-20 ${
            className ?? ""
          }`}
          ref={nodeRef}
        >
          {children}
        </div>
      </CSSTransition>
    </ReactPortal>
  );
};

export default MenuMobile;
