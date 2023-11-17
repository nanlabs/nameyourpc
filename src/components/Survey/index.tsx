import { useState } from 'react';
import { LabelVariant, SurveyStep } from './SurveyStep';
import { ButtonVariant } from '../Button';

type Step = {
  label: string;
  labelVariant?: LabelVariant;
  options: string[];
  optionsVariant: ButtonVariant;
};

const steps: Step[] = [
  {
    label:
      "We've got a fun way to help you name your PC. Answer these three quirky questions, and we'll suggest the perfect name for your computer. It's easy, entertaining, and the best part? It's all about embracing your inner geek",
    labelVariant: 'text',
    options: ["Let's name your PC"],
    optionsVariant: 'primary',
  },
  {
    label: 'If your PC were a person, what would it look like?',
    labelVariant: 'question',
    options: ['Petite and elegant 👛', 'Robust and sturdy 💪', 'Tall and slender 📏'],
    optionsVariant: 'option',
  },
  {
    label: 'Which of these adjectives would best describe your PC?',
    labelVariant: 'question',
    options: ['Slow and noisy but loyal ​😍​', 'Fast and modern 😎', 'Iffy, never know what to expect 😄'],
    optionsVariant: 'option',
  },
  {
    label: 'If your PC were a character in a sci-fi movie, which role would it play?',
    labelVariant: 'question',
    options: ['A daring space explorer 👩‍🚀​', 'A brilliant scientist ​🧑‍🔬​', 'A witty AI sidekick 🤖​'],
    optionsVariant: 'option',
  },
  {
    label: 'Your PC now has a name worthy of its awesomeness!',
    labelVariant: 'question',
    options: ['Click here to reveal it'],
    optionsVariant: 'secondary',
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
    if (currentStep < steps.length) {
      setCurrentStep((step) => step + 1);
    }
  };

  if (!step) {
    return (
      <SurveyStep
        label="Revealed Name"
        secondaryLabel="Share Your PC Name on LinkedIn and challenge others to try it out!"
        labelVariant="gradient"
      />
    );
  }

  return (
    <SurveyStep
      label={step.label}
      options={step.options}
      onSelect={onSelect}
      optionsVariant={step.optionsVariant}
      labelVariant={step.labelVariant}
    />
  );
};

export default Survey;
