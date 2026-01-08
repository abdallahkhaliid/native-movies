import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const TabIcon = ({ title, icon, focused }: any) => {
  if (focused) {
    return (
      <ImageBackground
        className="flex flex-row flex-1 w-full min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
        source={images.highlight}
      >
        <Image source={icon} className="size-5" tintColor="#151312" />

        <Text className="text-base font-semibold text-secondary">{title}</Text>
      </ImageBackground>
    );
  }

  return (
    <View className="items-center justify-center mt-4 rounded-full size-full">
      <Image source={icon} className="size-5" tintColor="#A8B5DB" />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",

          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon title="Home" icon={icons.home} focused={focused} />
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon title="Search" icon={icons.search} focused={focused} />
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon title="Saved" icon={icons.save} focused={focused} />
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon title="Profile" icon={icons.person} focused={focused} />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
