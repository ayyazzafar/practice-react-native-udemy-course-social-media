import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {Routes} from './routes';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export function ProfileTabsNavigation() {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}
      style={{
        backgroundColor: '#000000',
        height: '300%',
      }}>
      <ProfileTabs.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title="Photos" isFocused={focused} />
          ),
        }}
        name="Tab1"
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name="Tab2"
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title="Videos" />
          ),
        }}
      />
      <ProfileTabs.Screen
        name="Tab3"
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title="Saved" />
          ),
        }}
      />
    </ProfileTabs.Navigator>
  );
}

function MainMenuNavigation() {
  return (
    <Drawer.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
}

export default function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
}
