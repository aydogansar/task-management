import { MutableRefObject, useEffect } from 'react';

function useEventListener(event: keyof WindowEventMap, handleEvent: (event: Event) => void, element?: MutableRefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = element?.current || window;

    el.addEventListener(event, handleEvent);

    return () => el.removeEventListener(event, handleEvent);
  }, [event, handleEvent, element]);
}
export default useEventListener;
