import React from 'react';
import Demoicon from '../buoi2/Demoicon'
import Pokemon from '../android/components/Pokemon';
import DemoTheme from '../buoi2/DemoTheme';
import DemoAppBar from '../buoi2/DemoAppbar';
import Login from '../exercise2/Login';
import Register from '../exercise2/Register';
import ForgetPassword from '../exercise2/ForgetPassword';
import Project1 from '../Lab1/Project1';
import Project2 from '../Lab1/Project2';
import Project3 from '../Lab1/Project3';
import Project4 from '../Lab1/Project4';
import Project5 from '../Lab1/Project5';
import Project6 from '../Lab1/Project6';
import Project7 from '../Lab1/Project7';
import Project8 from '../Lab1/Project8';
export default function DetailScreen({ route }) {
  const { componentName } = route.params;

  const componentsMap = {
    Demoicon: <Demoicon />,
    Pokemon: <Pokemon />,
    DemoTheme: <DemoTheme />,
    DemoAppBar: <DemoAppBar />,
    Login: <Login />,
    Register: <Register />,
    ForgetPassword: <ForgetPassword />,
    Project1: <Project1 />,
    Project2: <Project2 />,
    Project3: <Project3 />,
    Project4: <Project4 />,
    Project5: <Project5 />,
    Project6: <Project6/>,
    Project7: <Project7 />,
    Project8: <Project8 />,
  };

  return componentsMap[componentName] || null;
}
