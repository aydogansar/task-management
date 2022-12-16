import { useSelector, useDispatch } from 'hooks';
import { setSidebarOpen } from 'store/global';

type Action = boolean | ((val: boolean) => boolean);

interface ReturnProps {
  open: boolean;
  setOpen: (val: Action) => void;
}

const useSidebar = (): ReturnProps => {
  const open = useSelector(state => state.global.isSidebarOpen);

  const dispatch = useDispatch();

  const setSidebar = (value: boolean) => dispatch(setSidebarOpen(value));

  const setOpen = (action: Action) => {
    switch (typeof action) {
      case 'boolean': {
        setSidebar(action);

        break;
      }

      case 'function': {
        const value = action(open);
        setSidebar(value);

        break;
      }

      default: {
        setSidebar(!open);
      }
    }
  };

  return { open, setOpen };
};
export default useSidebar;
