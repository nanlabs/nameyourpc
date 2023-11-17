import Button, { ButtonVariant } from '../Button';

export type LabelVariant = 'question' | 'text' | 'gradient';

export type SurveyStepProps = {
  label: string;
  labelVariant?: LabelVariant;
  secondaryLabel?: string;
  options?: string[];
  optionsVariant?: ButtonVariant;
  renderOption?: (option: string) => React.ReactNode;
  onSelect?: (option: string) => void;
};

export const SurveyStep = ({
  label,
  labelVariant = 'text',
  secondaryLabel,
  options = [],
  optionsVariant = 'option',
  renderOption,
  onSelect,
}: SurveyStepProps) => {
  return (
    <>
      <div className="flex flex-col pb-10">
        {labelVariant === 'question' && (
          <h4 className="text-3xl font-semibold text-neutral-600 text-center leading-8 max-w-full">{label}</h4>
        )}
        {labelVariant === 'text' && <p className="text-xl font-thin leading-normal text-center max-w-full">{label}</p>}
        {labelVariant === 'gradient' && (
          <h4 className="text-6xl font-semibold text-center leading-8 max-w-full">
            <span className="text-result-gradient">{label}</span>
          </h4>
        )}
      </div>
      {!!secondaryLabel && (
        <div className="flex flex-col pt-5 pb-10">
          <h4 className="text-xl italic font-thin leading-normal text-center max-w-full text-gray-600">
            {'"'}
            {secondaryLabel}
            {'"'}
          </h4>
        </div>
      )}
      {!!options.length && (
        <div className="flex flex-col justify-center content-center flex-wrap px-4 gap-4 xl:gap-y-5 xl:flex-row xl:justify-around">
          {options.map((option) => {
            if (renderOption) {
              return renderOption(option);
            }

            return (
              <Button key={option} variant={optionsVariant} onClick={() => onSelect && onSelect(option)}>
                {option}
              </Button>
            );
          })}
        </div>
      )}
    </>
  );
};
