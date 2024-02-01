import { useSyncExternalStore } from "react";

export function usePreferredLanguage() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(cb: any) {
  window.addEventListener("languagechange", cb);
  return () => window.removeEventListener("languagechange", cb);
}

function getSnapshot() {
  return navigator.language;
}

function getServerSnapshot() {
  throw new Error("useSyncExternalStore can only be used on the client");
  return navigator.language;
}
// export function usePreferredLanguage() {
//   const [language, setLanguage] = useState(window.navigator.language);

//   useEffect(() => {
//     document.addEventListener("languageChange", () => {
//       setLanguage(window.navigator.language);
//     });

//     return () => {
//       document.removeEventListener("languageChange", () => {
//         setLanguage(window.navigator.language);
//       });
//     };
//   }, [window.navigator.language]);

//   return language;
// }
