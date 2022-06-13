import {
    MobStage, 
    MobBottomNav,
    MobWorkspace,
} from '../styled-components/MobLayoutUi';

import MobLayout from "./MobLayout";
import MobMenuItem from './MobMenuItem';
import {MobDrawer }  from './MobDrawer';

export const mob = {
    layout: MobLayout,
    drawer: MobDrawer,
    menuitem: MobMenuItem,
}

export const styledComponent = {
    bottom: MobBottomNav,
    stage: MobStage,
    workspace: MobWorkspace,
}