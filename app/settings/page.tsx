"use client";
// import { Card } from '@/components/ui/card';
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
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
    <>
      <hr />
      <section className="p-6">
        <section className="mx-auto max-w-[1000px] grid gap-4">
          <h1>Settings</h1>
          <form onSubmit={handleSubmit} className="grid gap-2">
            <fieldset className="flex gap-6">
              <Label className="text-right pt-2.5 w-1/4">Restaurant Name</Label>
              <div className="flex-1 flex gap-1">
                <Input
                  type="name"
                  required
                  onChange={(e) => setRestaurantName(e.target.value)}
                  value={restaurantName}
                />
                <span className="text-red-500 -translate-y-0.5">*</span>
              </div>
            </fieldset>

            <fieldset className="flex gap-6">
              <Label className="text-right pt-2.5 w-1/4">Restaurant Type</Label>
              <div className="flex gap-1 flex-1">
                <Select onValueChange={(value) => setRestaurantType(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={String(restaurantTypes[0])} />
                  </SelectTrigger>
                  <SelectContent>
                    {restaurantTypes.slice(1).map((type, i) => {
                      return (
                        <SelectItem key={i} value={type}>
                          {type}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <span className="text-red-500 -translate-y-0.5">*</span>
              </div>
            </fieldset>

            <fieldset className="flex gap-6">
              <Label className="text-right pt-2.5 w-1/4">Location</Label>
              <div className="grid gap-1 flex-1">
                <div className="flex gap-1">
                  <Input
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <span className="text-red-500 -translate-y-0.5">*</span>
                </div>
                <button
                  className="text-xs text-blue-700 underline text-left"
                  onClick={obtainLocation}
                >
                  Get my Location
                </button>
              </div>
            </fieldset>

            <Button className="w-fit ml-auto mr-2" type="submit">
              Save
            </Button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Settings;
