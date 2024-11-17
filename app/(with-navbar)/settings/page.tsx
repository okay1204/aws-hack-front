"use client";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const restaurantName = userInfoStore((state) => state.restaurantName);
  const restaurantType = userInfoStore((state) => state.restaurantType);
  const setRestaurantName = userInfoStore((state) => state.setRestaurantName);
  const setRestaurantType = userInfoStore((state) => state.setRestaurantType);
  const location = userInfoStore((state) => state.location);
  const setLocation = userInfoStore((state) => state.setLocation);
  const [address, setAddress] = useState("");
  const [restaurantDescription, setRestaurantDescription] = useState("");
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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requestBody = {
      location: {
        latitude: location.latitude,
        longitude: location.longitude,
      },
      restaurantName: restaurantName,
      restaurantType: restaurantType,
      restaurantDescription: restaurantDescription,
    };
    try {
      const res = await fetch(
        "https://wt66ikzsbibj2lgnfrmqj2en4i0iczlt.lambda-url.us-east-2.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      // send longitude and latitude to backend lambda function for further processing
      await fetch(
        `https://luxfz5yd3ajcyr7vjqkzzqwb7m0hpkax.lambda-url.us-east-2.on.aws/?latitude=${location.latitude}&longitude=${location.longitude}`
      );
      const fetchedAddress = await res.json();
      setAddress(fetchedAddress);
    } catch (error) {
      console.error(error);
    }
    setRestaurantName("");
    setRestaurantType("");
    setLocation("", "");
    setAddress("");
    setRestaurantDescription("");
    router.push("/" + String(restaurantName));
  };
  const obtainLocation = () => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(
            String(position.coords.longitude),
            String(position.coords.latitude)
          );
          console.log(position);
          setAddress(
            `${position.coords.longitude}, ${position.coords.latitude}`
          );
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available");
    }
  };

  useEffect(() => {
    console.log(restaurantType, restaurantName, location);
    console.log(process.env.AWS_ACCESS_KEY_ID);
  }, [restaurantType, restaurantName, location]);

  // useEffect(() => {
  //   if (restaurantName.length > 0) {
  //     router.push("/" + String(restaurantName));
  //   }
  // }, []);

  return (
    <>
      <hr />
      <section className="p-6">
        <section className="mx-auto max-w-[1000px] grid gap-4">
          <h1>Settings</h1>
          <form
            onSubmit={handleSubmit}
            className="grid gap-3 *:flex *:gap-2 *:flex-col *:sm:flex-row"
          >
            <fieldset>
              <Label className="mt-2 sm:w-1/4">Restaurant Name</Label>
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
            <fieldset>
              <Label className="mt-2 sm:w-1/4">Restaurant Description</Label>
              <div className="flex-1 flex gap-1">
                <Input
                  type="name"
                  required
                  onChange={(e) => setRestaurantDescription(e.target.value)}
                  value={restaurantDescription}
                />
                <span className="text-red-500 -translate-y-0.5">*</span>
              </div>
            </fieldset>
            <fieldset>
              <Label className="mt-2 sm:w-1/4">Restaurant Type</Label>
              <div className="flex-1 flex gap-1">
                <Select onValueChange={(value) => setRestaurantType(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={String(restaurantTypes[0])} />
                  </SelectTrigger>
                  <SelectContent>
                    {restaurantTypes.map((type, i) => (
                      <SelectItem key={i} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="text-red-500 -translate-y-0.5">*</span>
              </div>
            </fieldset>

            <fieldset>
              <Label className="mt-2 sm:w-1/4">Location</Label>
              <div className="flex-1 grid gap-2">
                <div className="flex gap-1">
                  <Input
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <span className="text-red-500 -translate-y-0.5">*</span>
                </div>
                <button
                  type="button"
                  className="text-xs text-left text-blue-700 underline"
                  onClick={obtainLocation}
                >
                  Get my Location
                </button>
              </div>
            </fieldset>

            <Button className="w-fit ml-auto">Save</Button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Settings;
