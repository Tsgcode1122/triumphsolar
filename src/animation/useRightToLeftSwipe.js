import { useEffect } from "react";
import "/animation.scss"; // Corrected the import path

const useRightToLeftSwipe = (elementSelector, rootMargin = "100px") => {
  useEffect(() => {
    const element = document.querySelector(elementSelector);

    if (!element) {
      console.error(`Element with selector '${elementSelector}' not found.`);
      return;
    }

    const addAnimation = () => {
      element.classList.add("swipe-left");
    };

    const animationEndHandler = () => {
      element.classList.remove("swipe-left");
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addAnimation();
        } else {
          animationEndHandler();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementSelector, rootMargin]);
};

export default useRightToLeftSwipe;
