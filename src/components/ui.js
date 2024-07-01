import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

export function Card({ className, ...props }) {
  return <div className={`bg-gray-900 rounded-xl ${className}`} {...props} />;
}

export function CardHeader(props) {
  return <div className="p-6" {...props} />;
}

export function CardTitle(props) {
  return <h2 className="text-2xl font-bold" {...props} />;
}

export function CardContent(props) {
  return <div className="p-6 pt-0" {...props} />;
}

export function Input(props) {
  return <input {...props} />;
}

export function Button(props) {
  return <button {...props} />;
}

export const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={`relative flex w-full touch-none select-none items-center ${className}`}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-700">
      <SliderPrimitive.Range className="absolute h-full bg-cyan-500" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-cyan-500 bg-gray-900 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;