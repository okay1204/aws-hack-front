"use client";
// import { Card } from '@/components/ui/card';
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { userInfoStore } from "@/store/store";
import { Button } from "@/components/ui/button";

// integrate geolocation api
const Settings = () => {
  const Geolocation = navigator.geolocation;
  const restaurantName = userInfoStore((state) => state.restaurantName);
  const restaurantType = userInfoStore((state) => state.restaurantType);
  const setRestaurantName = userInfoStore((state) => state.setRestaurantName);
  const setRestaurantType = userInfoStore((state) => state.setRestaurantType);
  const setLocation = userInfoStore((state) => state.setLocation);
  const [address, setAddress] = useState("");
  const restaurantTypes = [
    "Fine Dining",
    "Casual Dining",
    "Fast Casual",
    "Fast Food",
    "Cafés",
    "Bistros",
    "Buffets",
    "Food Trucks",
    "Pop-Up Restaurants",
    "Ghost Restaurants",
    "Family Style",
    "Cafeterias",
    "Pubs",
    "Steakhouses",
    "Seafood Restaurants",
    "Ethnic Restaurants",
    "Brasseries",
    "Trattorias",
    "Teppanyaki Grills",
    "Pizzerias",
    "Bakeries",
    "Delis (Delicatessens)",
    "Coffeehouses",
    "Taverns",
    "Gastropubs",
  ];
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const obtainLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(
          String(position.coords.longitude),
          String(position.coords.latitude)
        );
        console.log(position);
        setAddress(`${position.coords.longitude}, ${position.coords.latitude}`);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  };

  useEffect(() => {
    console.log(restaurantType);
  }, [restaurantType]);
  return (
    <div>
      <h1 className="font-bold text-2xl m-2">Settings</h1>
      <form onSubmit={handleSubmit} className="ml-3 my-2 flex flex-col">
        <div className="mb-2">
          <Label className="mb-1">Restaurant Name</Label>
          <div className="flex">
            <Input
              type="name"
              required
              className="w-1/4 mr-1"
              onChange={(e) => setRestaurantName(e.target.value)}
              value={restaurantName}
            />
            <span className="text-red-500 -translate-y-0.5">*</span>
          </div>
        </div>

        <div className="mb-2">
          <Label className="mb-1">Restaurant Type</Label>
          <div className="flex">
            <Select onValueChange={(value) => setRestaurantType(value)}>
              <SelectTrigger className="w-1/4 mr-1">
                <SelectValue placeholder={String(restaurantTypes[0])} />
              </SelectTrigger>
              <SelectContent>
                {restaurantTypes.slice(1).map((type, i) => {
                  return (
                    <SelectItem
                      key={i}
                      value={type}
                      className="cursor-pointer bg-white border-white"
                    >
                      {type}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <span className="text-red-500 -translate-y-0.5">*</span>
          </div>
        </div>
        <div className="mb-2">
          <Label className="mb-1">Location</Label>
          <div className="flex">
            <Input
              required
              className="w-1/4 mr-1"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <span className="text-red-500 -translate-y-0.5">*</span>
          </div>
          <button
            className="text-xs text-blue-700 underline"
            onClick={obtainLocation}
          >
            Get my Location
          </button>
        </div>
        <Button className="w-[100px]">Save</Button>
      </form>
    </div>
  );
};

export default Settings;
