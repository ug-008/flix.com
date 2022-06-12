import {mob} from './components/mobile/mob.module';
import {desk} from './components/desktop/desk.module';
import { useMediaPredicate } from "react-media-hook";
import React, { } from "react";

function Layout () {
    const lesserThan800 = useMediaPredicate("(max-width: 768px)");
    const greaterThan800 = useMediaPredicate("(min-width: 768px)");

    return(
        <>
            {lesserThan800 && <mob.layout />}
            {greaterThan800 && <desk.layout />}
        </>
    );

}

export default Layout;