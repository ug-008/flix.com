import { 
    BottomSpace, 
    Fragment, 
    Stage, 
    LeftSpace, 
    RightSpace, 
    TopSpace, 
} from './LayoutUI';
import Drawer from "./Drawer";
import Layout from "./Layout";
import NavItem from "./NavItem";
import FloatNav from "./FloatedNavUI";
import Workspace from "./WorkspaceUI";

export const desk = {
    stage: Stage,
    drawer: Drawer,
    layout: Layout,
    pager: NavItem,
    shortcut: FloatNav,
    workspace: Workspace,
    bottom: BottomSpace,
    fragment: Fragment,
    right: RightSpace,
    left: LeftSpace,
    top: TopSpace,
}
