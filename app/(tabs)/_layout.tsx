import {Tabs, useNavigation} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import Ionicons from "@expo/vector-icons/Ionicons";
import {Feather} from "@expo/vector-icons";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                tabBarStyle: {
                    height: 60,
                },
                tabBarLabelStyle: {
                    marginBottom: 6,
                }
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
                name="profile/index"
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
