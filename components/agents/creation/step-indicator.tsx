"use client";

import { Check } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="relative">
      <div className="absolute top-5 left-6 right-6 h-0.5 bg-neutral-700">
        <div 
          className="absolute h-full bg-green-500 transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>

      <div className="relative z-10 flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={step.title} className="flex flex-col items-center">
              <div 
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center border-2
                  ${isCompleted ? 'bg-green-500 border-green-800' :
                    isCurrent ? 'bg-neutral-800 border-green-500' :
                    'bg-neutral-900 border-neutral-800'}
                `}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 text-black" />
                ) : (
                  <span className={isCurrent ? 'text-green-400' : 'text-neutral-300'}>
                    {index + 1}
                  </span>
                )}
              </div>
              <div className="mt-2 text-center">
                <div className={`font-medium ${isCurrent ? 'text-green-400' : 'text-slate-300'}`}>
                  {step.title}
                </div>
                <div className="text-xs text-neutral-300 mt-1">
                  {step.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}