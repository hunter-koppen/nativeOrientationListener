import { createElement, useCallback } from "react";

import { OrientationContainer } from "./components/OrientationContainer";

export function NativeOrientationListener({ listenType, onChange }) {
    const onChangeHandler = useCallback(() => {
        if (onChange && onChange.canExecute && !onChange.isExecuting) {
            onChange.execute();
        }
    }, [onChange]);

    return <OrientationContainer listenType={listenType} onChange={onChangeHandler} />;
}
