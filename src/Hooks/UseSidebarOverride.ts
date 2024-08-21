import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type UseSidebarOverrideProps = {
    setSidebarVisible: (visible: boolean) => void;
};

const useSidebarOverride = ({ setSidebarVisible }: UseSidebarOverrideProps) => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/specific-path') {
            setSidebarVisible(false); // Hide the sidebar
        } else {
            setSidebarVisible(true); // Show the sidebar
        }
    }, [location.pathname, setSidebarVisible]);
};

export default useSidebarOverride;