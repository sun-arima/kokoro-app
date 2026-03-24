type Props = {
  currentStep: number;
  totalSteps: number;
};

export default function StepBar({ currentStep, totalSteps }: Props) {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;
        return (
          <div key={step} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : isCompleted
                    ? 'bg-primary/30 text-primary-dark'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {step}
              </div>
              <span
                className={`text-sm mt-1 font-medium ${
                  isActive ? 'text-primary-dark' : 'text-gray-400'
                }`}
              >
                STEP{step}
              </span>
            </div>
            {step < totalSteps && (
              <div
                className={`w-8 h-0.5 mb-5 ${
                  isCompleted ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
