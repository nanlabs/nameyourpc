import Button, { ButtonVariant } from '../Button';

export type SurveyStepProps = {
  label: string;
  options: string[];
  optionsVariant: ButtonVariant;
  onSelect: (option: string) => void;
};
export const SurveyStep = ({ label, options, optionsVariant = 'option', onSelect }: SurveyStepProps) => {
  return (
    <>
      <div className="flex flex-col pb-10">
        <h4 className="text-3xl font-semibold text-neutral-600 text-center leading-8 max-w-full">{label}</h4>
      </div>
      <div className="flex flex-row justify-around flex-wrap px-16 gap-4 lg:gap-2 xl:gap-0">
        {options.map((option) => (
          <Button key={option} variant={optionsVariant} onClick={() => onSelect(option)}>
            {option}
          </Button>
        ))}
      </div>
    </>
  );
};
