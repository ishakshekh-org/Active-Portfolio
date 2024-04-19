"use client";
import React, { Component } from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

type BtnProps = {
  cont?: React.ReactNode;
  icon?: React.ReactNode;
};

export function AnimeButton(props: BtnProps) {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white max-sm:text-xs flex items-center space-x-2  p-3 gap-2 justify-center"
      >
        {props.cont}
        {props.icon}
      </HoverBorderGradient>
    </div>
  );
}
