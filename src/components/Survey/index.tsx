import { useState } from 'react';
import { SurveyStep } from './SurveyStep';
import { getResults, steps } from './steps';
import { LinkedinShareButton } from 'react-share';
import Button from '../Button';

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

  const [questionAnswers, setQuestionAnswers] = useState<string[]>([]);

  const onSelect = (option: string) => {
    if (step?.isQuestion) {
      setQuestionAnswers((prevAnswers) => [...prevAnswers, option]);
    }

    if (currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  if (!step) {
    const { name, poem } = getResults(questionAnswers) || {};

    return (
      <SurveyStep
        label={name}
        secondaryLabel={poem}
        labelVariant="gradient"
        options={['Share on LinkedIn']}
        renderOption={(option) => (
          <LinkedinShareButton url={window.location.href} title="Name Your PC Day">
            <Button variant="primary">{option}</Button>
          </LinkedinShareButton>
        )}
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
