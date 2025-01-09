/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MenuView from './Views/MenuView';
import CreateLeadScreen from './Views/CreateLeadScreen'
import SalesPipelineView from './Views/SalesPipelineView'
import AddLeadsDetailScreen from './Views/AddLeadsDetailScreen'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AddLeadsDetailScreen);
