import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { LinkedinShareButton } from 'react-share';
import { SurveyStep } from './SurveyStep';
import { getResults, steps } from './steps';
import Button from '../Button';

const url = 'https://nanlabs.github.io/nameyourpc/';

const summary = `💻 Just named my PC with NaNLABS' PC Name Generator – it's a blast! 🚀

🤖 Give it a go and discover your PC's secret identity. Join the fun for #NameYourPCDay and challenge your network to name their PCs. Click the link to get started! 💡

👉 https://nanlabs.github.io/nameyourpc/

Let's spread the PC-naming love! 💬💻 #NaNLABS #TechFun`;

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

    if (isMobile) {
      return (
        <SurveyStep
          label={name}
          secondaryLabel={poem}
          labelVariant="gradient"
          options={['Share on LinkedIn']}
          renderOption={(option) => (
            <LinkedinShareButton url={url}>
              <Button variant="primary">{option}</Button>
            </LinkedinShareButton>
          )}
        />
      );
    }

    const handleLinkedInShare = () => {
      const w = 600;
      const h = 600;
      const y = window.outerHeight / 2 + window.screenY - h / 2;
      const x = window.outerWidth / 2 + window.screenX - w / 2;
      window.open(
        `https://www.linkedin.com/feed?shareActive=true&text=${encodeURIComponent(summary)}`,
        'popup',
        `width=${w}, height=${h}, top=${y}, left=${x}, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no`,
      );
    };

    return (
      <SurveyStep
        label={name}
        secondaryLabel={poem}
        labelVariant="gradient"
        options={['Share on LinkedIn']}
        renderOption={(option) => (
          <Button variant="primary" onClick={handleLinkedInShare}>
            {option}
          </Button>
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
