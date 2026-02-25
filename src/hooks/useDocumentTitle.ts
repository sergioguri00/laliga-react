import { useEffect } from "react";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title ? `LaLiga | ${title}` : "LaLiga";
  }, [title]);
};

export { useDocumentTitle };
