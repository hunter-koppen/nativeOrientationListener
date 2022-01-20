import { createElement, useEffect } from "react";

import Orientation from "react-native-orientation-locker";

export function OrientationContainer({ listenType, onChange }) {

    useEffect(() => {
        if (listenType === "device") {
            Orientation.addDeviceOrientationListener(onChange);
        } else {
            Orientation.addOrientationListener(onChange);
        }

        return () => {
            if (listenType === "device") {
                Orientation.removeDeviceOrientationListener(onChange);
            } else {
                Orientation.removeOrientationListener(onChange);
            }
        };
    }, [listenType, onChange]);

    return (
        null
    );
}
