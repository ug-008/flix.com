import {
    MobStage, 
    MobBottomNav,
    MobWorkspace,
} from './MobLayoutUi';

import MobileUi from "./MobUI";
import MobDrawer from './MobDrawer';
import MobPagerItem from './MobNav';
import MobConfigUi from './MobUiConfig';
import MobPromptUi from './MobPromptUi';

export const mob = {
    stage: MobStage,
    layout: MobileUi,
    bottom: MobBottomNav,
    workspace: MobWorkspace,
    drawer: MobDrawer,
    pager: MobPagerItem,
    config: MobConfigUi,
    prompt: MobPromptUi
}
