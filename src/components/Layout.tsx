import { useRef, useCallback, useState, useEffect } from "react";

import { Footer, Header, Navbar, Sidebar, Nav } from "../components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [x, setX] = useState(0);

  const [leftWidth, setLeftWidth] = useState(0);

  const [isDraggin, setIsDraggin] = useState(false);

  const resizerRef = useRef<HTMLDivElement>(null);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const rightSideRef = useRef<HTMLDivElement>(null);

  const mouseMoveHandler = useCallback(
    (e: React.MouseEvent) => {
      if (sidebarRef.current && resizerRef.current && rightSideRef.current) {
        const dx = e.clientX - x;

        document.body.style.cursor = "ew-resize";

        sidebarRef.current.style.userSelect = "none";
        sidebarRef.current.style.pointerEvents = "none";

        rightSideRef.current.style.userSelect = "none";
        rightSideRef.current.style.pointerEvents = "none";

        if (resizerRef.current.parentNode) {
          const newLeftWidth =
            ((leftWidth + dx) * 100) /
            resizerRef.current.parentNode.getBoundingClientRect().width;

          sidebarRef.current.style.width = `${newLeftWidth}%`;
        }
      }
    },
    [sidebarRef, resizerRef, rightSideRef, leftWidth, x]
  );

  const mouseUpHandler = useCallback(() => {
    document.body.style.removeProperty("cursor");

    if (sidebarRef.current) {
      sidebarRef.current.style.removeProperty("user-select");
      sidebarRef.current.style.removeProperty("pointer-events");
    }

    if (rightSideRef.current) {
      rightSideRef.current.style.removeProperty("user-select");
      rightSideRef.current.style.removeProperty("pointer-events");
    }

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  }, [sidebarRef, rightSideRef, mouseMoveHandler]);

  const mouseDownHandler = useCallback(
    (e: React.MouseEvent) => {
      if (sidebarRef.current && resizerRef.current) {
        setX(e.clientX);

        setLeftWidth(sidebarRef.current.getBoundingClientRect().width);

        setIsDraggin(true);
      }
    },
    [sidebarRef, resizerRef, setIsDraggin]
  );

  useEffect(() => {
    if (isDraggin) {
      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    }
  }, [
    sidebarRef,
    resizerRef,
    rightSideRef,
    isDraggin,
    mouseMoveHandler,
    mouseUpHandler,
  ]);

  return (
    <div className="fixed flex h-screen w-screen flex-col bg-black">
      <Header />
      <main className="flex flex-grow">
        <Navbar />
        <Sidebar ref={sidebarRef} />
        <div
          ref={resizerRef}
          onMouseDown={mouseDownHandler}
          className="relative z-10 h-full w-[1px] flex-shrink-0 cursor-[ew-resize] bg-zinc-600 before:absolute before:-right-2 before:-left-2 before:top-0 before:bottom-0"
        />
        <div
          ref={rightSideRef}
          className="flex flex-grow flex-col border-t border-r border-b border-zinc-600"
        >
          <Nav />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
