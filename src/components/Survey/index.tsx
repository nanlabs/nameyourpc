import { useState } from 'react';
import { SurveyStep } from './SurveyStep';
import { getResults, steps } from './steps';
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

    const handleLinkedInShare = () => {
      const url = 'https://nanlabs.github.io/nameyourpc/';
      const text = `:computer: Just named my PC with NaNLABS' PC Name Generator – it's a blast! :cohete:
:cara_de_robot: Give it a go and discover your PC's secret identity. Join the fun for #NameYourPCDay and challenge your network to name their PCs. Click the link to get started! :bombilla:
:apuntando_hacia_la_derecha: https://nanlabs.github.io/nameyourpc/
Let's spread the PC-naming love! :bocadillo_de_diálogo::ordenador: #NaNLABS #TechFun`;

      // URL de la API de LinkedIn para compartir
      const linkedinShareURL = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&summary=${text}&source=https://github.com`;

      // Abrir una nueva ventana para compartir en LinkedIn
      window.open(linkedinShareURL, '_blank');
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
