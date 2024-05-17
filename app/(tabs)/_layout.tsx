import {Tabs} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Entregas',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={'package-variant'} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="explore/index"
                options={{
                    title: 'Conta',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={'account'} color={color}/>
                    ),
                }}
            />
        </Tabs>
    );
}
