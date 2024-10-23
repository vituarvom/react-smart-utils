import React from "react";
import { useUnmount } from "./useUnmount";

const Component: React.FC<{ callback: () => void }> = ({ callback }) => {
    useUnmount(callback);

    return <div> Component </div>;
};

export default Component;
