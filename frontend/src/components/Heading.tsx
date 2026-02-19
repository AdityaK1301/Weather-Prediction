import React from 'react'
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

function Heading() {
  return (
    <div className='text-center justify-center bg-black relative pt-8 pb-2'>
        <h1 className="text-4xl font-light text-white tracking-wide z-10 ">
            Weather {" "}<span className="text-sky-400 font-normal">Prediction </span>{" "}App
        </h1>
        {/* <DottedGlowBackground
                className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
                opacity={1}
                gap={10}
                radius={1.6}
                colorLightVar="--color-neutral-500"
                glowColorLightVar="--color-neutral-600"
                colorDarkVar="--color-neutral-500"
                glowColorDarkVar="--color-sky-800"
                backgroundOpacity={0}
                speedMin={0.3}
                speedMax={1.6}
                speedScale={1}
              /> */}
    </div>
  )
}

export default Heading