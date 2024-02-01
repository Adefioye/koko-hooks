import { useEffect } from "react";

export function useFavicon(href: string) {
  useEffect(() => {
    let link: HTMLLinkElement | null =
      document.querySelector(`link[rel~="icon"]`);

    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "icon");
      link.setAttribute("href", href);
      link.setAttribute("type", "image/x-icon");
      document.head.appendChild(link);
    } else {
      link.setAttribute("href", href);
    }
  }, [href]);
}
