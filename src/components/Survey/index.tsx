import { useState } from 'react';
import { SurveyStep } from './SurveyStep';

const steps = [
  {
    label: 'If your PC were a person, what would it look like?',
    options: ['Petite and elegant 👛', 'Robust and sturdy 💪', 'Tall and slender 📏'],
  },
  {
    label: 'Which of these adjectives would best describe your PC?',
    options: ['Slow and noisy but loyal ​😍​', 'Fast and modern 😎', 'Iffy, never know what to expect 😄'],
  },
  {
    label: 'If your PC were a character in a sci-fi movie, which role would it play?',
    options: ['A daring space explorer 👩‍🚀​', 'A brilliant scientist ​🧑‍🔬​', 'A witty AI sidekick 🤖​'],
  },
  {
    label: 'Your PC now has a name worthy of its awesomeness!',
    options: ['Click here to reveal it'],
  },
];

/**
 * Survey is a component that will render a Step component for each step in the steps array.
 * It will render a step at a time, and will pass the step's label and options to the Step component.
 * Will use the component SurveyStep for each step and the variable steps for the steps array.
 * @see SurveyStep
 * @see steps
 */
const Survey = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  const onSelect = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <SurveyStep
      label={step.label}
      options={step.options}
      onSelect={onSelect}
      optionsVariant={currentStep === steps.length - 1 ? 'secondary' : 'option'}
    />
  );
};

export default Survey;