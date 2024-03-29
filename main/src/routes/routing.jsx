/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
import FirstDashboard from '../views/starter/starter.jsx';
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Cards from '../views/ui-components/cards.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';

var ThemeRoutes = [
  {
    path: '/starter/starter',
    name: 'Dashboard',
    icon: 'mdi mdi-adjust',
    component: FirstDashboard
  },
  {
    path: '/ui-components/alert',
    name: 'Transport',
    icon: 'mdi mdi-bus',
    component: Alerts
  },
  {
    path: '/ui-components/badge',
    name: 'Shopping',
    icon: 'mdi mdi-store',
    component: Badges
  },
  {
    path: '/ui-components/button',
    name: 'Activities',
    icon: 'mdi mdi-run',
    component: Buttons
  },
  {
    path: '/ui-components/card',
    name: 'Sightseeing',
    icon: 'mdi mdi-eye',
    component: Cards
  },
  {
    path: '/ui-components/layout',
    name: 'Living',
    icon: 'mdi mdi-home',
    component: LayoutComponent
  },
  {
    path: '/ui-components/pagination',
    name: 'Pagination',

    icon: 'mdi mdi-priority-high',
    component: PaginationComponent
  },
  {
    path: '/ui-components/popover',
    name: 'Popover',

    icon: 'mdi mdi-pencil-circle',
    component: PopoverComponent
  },
  {
    path: '/ui-components/tooltip',
    name: 'Toltips',

    icon: 'mdi mdi-image-filter-vintage',
    component: TooltipComponent
  },
  {
    path: '/',
    pathTo: '/starter/starter',
    name: 'Dashboard',
    redirect: true
  }
];
export default ThemeRoutes;
