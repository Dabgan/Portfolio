import { useState, useEffect } from 'react';

const CheckRender = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    });

    if (!hasMounted) {
        return null;
    }

    return children;
};

export default CheckRender;
