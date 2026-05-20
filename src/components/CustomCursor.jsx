import { useEffect, useState } from "react";

const CustomCursor = () => {

  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0,
    });

  const [isHovering, setIsHovering] =
    useState(false);

  useEffect(() => {

    const mouseMove = (e) => {

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      mouseMove
    );

    const hoverElements =
      document.querySelectorAll(
        "a, button, .product-card, .collection-card"
      );

    hoverElements.forEach((el) => {

      el.addEventListener(
        "mouseenter",
        () => setIsHovering(true)
      );

      el.addEventListener(
        "mouseleave",
        () => setIsHovering(false)
      );
    });

    return () => {

      window.removeEventListener(
        "mousemove",
        mouseMove
      );
    };

  }, []);

  return (
    <>
      {/* RED GLOW */}
      <div
        className={`fixed pointer-events-none z-[9998]
        rounded-full transition-all duration-300 ease-out
        ${
          isHovering
            ? "w-40 h-40 opacity-80"
            : "w-28 h-28 opacity-50"
        }`}
        style={{
          left: mousePosition.x - 70,
          top: mousePosition.y - 70,

          background:
            "radial-gradient(circle, rgba(255,0,80,0.35), rgba(255,0,80,0.08), transparent 70%)",

          filter: "blur(22px)",
        }}
      />

      {/* CURSOR IMAGE */}
      <img
        src={
          isHovering
            ? "/cursors/pointer.png"
            : "/cursors/cursor.png"
        }
        alt="cursor"
        className={`fixed pointer-events-none z-[99999]
        transition-all duration-150 ease-out
        select-none
        ${
          isHovering
            ? "w-24 scale-125 rotate-[-8deg]"
            : "w-16"
        }`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          filter:
            "drop-shadow(0 0 15px rgba(255,0,80,0.8))",
        }}
        draggable="false"
      />
    </>
  );
};

export default CustomCursor;