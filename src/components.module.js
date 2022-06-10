/**
 * add all imports
 */
import { 
    BottomSpace, 
    Fragment, 
    Stage, 
    LeftSpace, 
    RightSpace, 
    TopSpace, 
} from './components/LayoutUI';

import Drawer from './components/Drawer';
import NavItem from './components/NavItem';
import Workspace from './components/WorkspaceUI';
import FloatNav from './components/FloatedNavUI';

export const nav = {
    item: NavItem,
    drawer: Drawer,
    floated: FloatNav
};

export const layout = {
    stage: Stage,

    top: TopSpace,
    left: LeftSpace,
    bottom: BottomSpace,
    right: RightSpace,

    fragment: Fragment,
    workspace: Workspace,
}