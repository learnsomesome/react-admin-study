import Dashboard from '../views/dashboard/Index';
/* import Icon from '../views/icon/Index';
import Error404 from '../views/error/Error404';
import Error500 from '../views/error/Error500';
import LineChart from '../views/chart/LineChart';
import Keyboard from '../views/chart/KeyBoard';
import BarChart from '../views/chart/BarChart';
import PieChart from '../views/chart/PieChart';
import MixinChart from '../views/chart/MixinChart';
import Intercept from '../views/permission/Intercept';
import Toggle from '../views/permission/Toggle';
import TableBasic from '../views/table/TableBasic';
import TableEdit from '../views/table/TableEdit';
import TableSearch from '../views/table/TableSearch';
import BasicForm from '../views/form/BasicForm';
import Editor from '../views/form/TextEditor';
import News from '../views/news/News';
import MarkDown from '../views/form/MarkDown';
import BasicTree from '../views/control/BasicTree';
import BasicSelect from '../views/control/BasicSelect';
import Other from '../views/control/Other';
import MenuOne from '../views/levelMenu/MenuOne';
import MenuTwo from '../views/levelMenu/MenuTwo';
import About from '../views/about/About'; */
import Profile from '../views/profile';
import IMap from '../views/library/map';
import IChart from '../views/library/chart';

export const routes = [
	{ path: '/', component: Dashboard, exact: true },
	/* { path: '/icon', component: Icon },
	{ path: '/form/basic', component: BasicForm },
	{ path: '/form/editor', component: Editor },
	{ path: '/form/markdown', component: MarkDown },
	{ path: '/menu/level/submenu-1', component: MenuOne },
	{ path: '/menu/level/submenu-2', component: MenuTwo },
	{ path: '/table/basic', component: TableBasic },
	{ path: '/table/edit', component: TableEdit },
	{ path: '/table/search', component: TableSearch },
	{ path: '/chart/line', component: LineChart },
	{ path: '/chart/keyboard', component: Keyboard },
	{ path: '/chart/bar', component: BarChart },
	{ path: '/chart/pie', component: PieChart },
	{ path: '/chart/mixin', component: MixinChart },
	{ path: '/control/tree', component: BasicTree },
	{ path: '/control/select', component: BasicSelect },
	{ path: '/control/other', component: Other },
	{ path: '/permission/toggle', component: Toggle, permission: 1 },
	{ path: '/permission/intercept', component: Intercept },
	{ path: '/news', component: News },
	{ path: '/error/404', component: Error404 },
	{ path: '/error/500', component: Error500 },
	{ path: '/about', component: About }, */
	{ path: '/profile', component: Profile },
	{ path: '/library/map', component: IMap },
	{ path: '/library/chart', component: IChart }
];
