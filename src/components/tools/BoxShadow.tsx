import React, { useState } from "react";
import {
  generateTailwindBoxShadow,
  generateVanillaBoxShadow,
} from "@/logic/BoxShadowLogic";
import { Snippet } from "@nextui-org/snippet";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/react";
import BoxShadowExample from "./BoxShadowExample";

const BoxShadow: React.FC = () => {
  const [hOffset, setHOffset] = useState(0);
  const [vOffset, setVOffset] = useState(0);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [inset, setInset] = useState(false);

  const tailwindBoxShadow = generateTailwindBoxShadow(
    hOffset,
    vOffset,
    blur,
    spread,
    color,
    inset
  );

  const vanillaBoxShadow = generateVanillaBoxShadow(
    hOffset,
    vOffset,
    blur,
    spread,
    color,
    inset
  );

  return (
    <>
      <div className="container">
        <div className="p-4 flex items-start space-x-8">
          <div className="flex-1">
            <div
              className="p-4 border rounded-xl w-[40rem] h-[17.5rem] flex items-center justify-center bg-white dark:bg-black dark:border-gray-800"
              style={{ boxShadow: vanillaBoxShadow }}
            >
              Box with shadow
            </div>
            <div className="mt-4 space-y-2">
              <Snippet
                className="w-[40rem]"
                color="primary"
                symbol="Vanilla CSS:"
              >
                {vanillaBoxShadow}
              </Snippet>
              <Snippet
                className="w-[40rem]"
                color="secondary"
                symbol="Tailwind:"
              >
                {tailwindBoxShadow}
              </Snippet>
            </div>
          </div>
          <div className="bg-white p-6 rounded-md shadow-lg w-full dark:bg-black dark:text-gray-200 dark:shadow-[1px_0px_10px_1px_#08080891]">
            <h2 className="text-2xl font-semibold mb-4">
              Box Shadow Generator
            </h2>
            <div className="flex flex-col justify-start space-y-4">
              <div className="flex justify-start items-center space-x-4">
                <label className="w-full">Horizontal Offset:</label>
                <Input
                  type="number"
                  placeholder={hOffset.toString()}
                  value={hOffset.toString()}
                  onChange={(e) => setHOffset(Number(e.target.value))}
                  labelPlacement="inside"
                  className="w-full"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">px</span>
                    </div>
                  }
                />
              </div>
              <div className="flex justify-start items-center space-x-4">
                <label className="w-full">Vertical Offset:</label>
                <Input
                  type="number"
                  placeholder={vOffset.toString()}
                  value={vOffset.toString()}
                  onChange={(e) => setVOffset(Number(e.target.value))}
                  labelPlacement="inside"
                  className="w-full"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">px</span>
                    </div>
                  }
                />
              </div>
              <div className="flex justify-start items-center space-x-4">
                <label className="w-full">Blur Radius:</label>
                <Input
                  type="number"
                  placeholder={blur.toString()}
                  value={blur.toString()}
                  onChange={(e) => setBlur(Number(e.target.value))}
                  labelPlacement="inside"
                  className="w-full"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">px</span>
                    </div>
                  }
                />
              </div>
              <div className="flex justify-start items-center space-x-4">
                <label className="w-full">Spread Radius:</label>
                <Input
                  type="number"
                  placeholder={spread.toString()}
                  value={spread.toString()}
                  onChange={(e) => setSpread(Number(e.target.value))}
                  labelPlacement="inside"
                  className="w-full"
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">px</span>
                    </div>
                  }
                />
              </div>
              <div className="flex justify-start items-center space-x-4">
                <label className="w-full">Shadow Color:</label>
                <input
                  type="color"
                  placeholder={color}
                  value={color}
                  color={color.toString()}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-10 border-none"
                  style={{ backgroundColor: color, borderRadius: "0.25rem" }}
                />
              </div>
              <div className="flex justify-start items-center space-x-4">
                <Checkbox
                  checked={inset}
                  onChange={(e) => setInset(e.target.checked)}
                >
                  Inset Shadow
                </Checkbox>
              </div>
            </div>
          </div>
        </div>

        <BoxShadowExample />
      </div>
    </>
  );
};

export default BoxShadow;
