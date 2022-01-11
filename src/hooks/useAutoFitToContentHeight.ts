import { useEffect, useRef } from 'react';

// テキストエリアの高さを内容に応じて自動調整する
export const useAutoFitToContentHeight = (content: string | undefined) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { borderTopWidth, borderBottomWidth } = getComputedStyle(el);
    el.style.height = 'auto'; // 一度 auto に設定しないと高さが縮まなくなる
    el.style.height = `calc(${borderTopWidth} + ${el.scrollHeight}px + ${borderBottomWidth})`;
  }, [content]);

  return ref;
};
