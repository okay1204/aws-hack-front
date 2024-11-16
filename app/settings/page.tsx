"use client";
// import { Card } from '@/components/ui/card';
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";

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
  const dynamoClient = new DynamoDBClient({
    region: "us-east-2",
    credentials: {
      accessKeyId: "AKIAS5M3Y3QQRVVZIWUM",
      secretAccessKey: "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",
    },
  });
  const Geolocation = navigator.geolocation;
  const restaurantName = userInfoStore((state) => state.restaurantName);
  const restaurantType = userInfoStore((state) => state.restaurantType);
  const setRestaurantName = userInfoStore((state) => state.setRestaurantName);
  const setRestaurantType = userInfoStore((state) => state.setRestaurantType);
  const location = userInfoStore((state) => state.location);
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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const input = {
        Item: {
          restaurantId: {
            S: uuidv4(),
          },
          restaurantName: {
            S: restaurantName,
          },
          restaurantType: {
            S: restaurantType,
          },
          restaurantLocation: {
            M: {
              longitude: { S: location.longitude },
              latitude: { S: location.latitude },
            },
          },
        },
        TableName: "Restaurant",
      };
      const command = new PutItemCommand(input);
      await dynamoClient.send(command);
    } catch (error) {
      console.error(error);
    }
    setRestaurantName("");
    setRestaurantType("");
    setLocation("", "");
    setAddress("");
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
    console.log(restaurantType, restaurantName, location);
    console.log(process.env.AWS_ACCESS_KEY_ID);
  }, [restaurantType, restaurantName, location]);

  return (
    <>
      <hr />
      <section className="p-6">
        <section className="mx-auto max-w-[1000px] grid gap-4">
          <h1>Settings</h1>
          <form
            onSubmit={handleSubmit}
            className="grid gap-3 *:flex *:gap-3 *:sm:gap-6 *:flex-col *:sm:flex-row"
          >
            <fieldset>
              <Label className="text-left sm:text-right pt-2.5 sm:w-1/4">
                Restaurant Name
              </Label>
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
              <Label className="text-left sm:text-right pt-2.5 sm:w-1/4">
                Restaurant Type
              </Label>
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
              <Label className="text-left sm:text-right pt-2.5 sm:w-1/4">
                Location
              </Label>
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
                  className="text-xs text-left text-blue-700 underline"
                  onClick={obtainLocation}
                >
                  Get my Location
                </button>
              </div>
            </fieldset>

            <Button className="w-fit ml-auto mr-2.5">Save</Button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Settings;
