import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import landing from './landing.svg';
import Button from '@/components/Button';

const App = () => {
  const { t } = useTranslation('translations');

  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <main className="flex flex-col gradient">
        <div className="absolute top-0 right-0 left-0 bottom-0 z-0 overflow-hidden mix-blend-lighten sm:mix-blend-normal">
          <img loading="lazy" src={landing} className="aspect-ratio object-fill object-center overflow-hidden w-full" />
        </div>
        <div className="relative lg:container mx-auto flex flex-col px-4 md:px-20 2xl:px-40 bg-transparent z-10">
          <a
            className="justify-center items-center overflow-hidden self-center max-w-full mt-24 max-md:mt-10"
            href="https://nan-labs.com"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c35fd16-a08f-49b4-a03a-1f8371048079?apiKey=b59bae8eb0674da5802edba30bd21eb8&"
              className="aspect-ratio object-contain object-center w-164 overflow-hidden max-w-full"
              alt=""
            />
          </a>
          <h1 className="text-white text-center text-6xl font-semibold leading-tight bg-clip-text bg-gradient self-center w-1084 max-w-1060 mt-24 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Today is <span className="text-gradient">Name Your PC Day</span>
            <br /> and we&apos;re here to make it memorable{' '}
          </h1>
          <section className="self-center max-w-846 mt-11 max-md:max-w-full max-md:mt-10 xl:px-32 lg:px-8 sm:px-2">
            <p className="text-white text-center text-xl font-thin leading-normal">
              Did you know that giving your computer a unique name not only adds a personal touch but also enhances the
              bond between you and your trusty machine? It&apos;s a tradition that celebrates the geeky culture we all
              love, and <span className="font-bold">we&apos;re excited to be a part of it</span>
            </p>
          </section>
          <section className="bg-white container flex flex-col mt-20 px-20 py-16 rounded-3xl max-w-full max-md:mt-10 max-md:px-5">
            <div className="flex flex-col pb-10">
              <h4 className="text-3xl font-semibold text-neutral-600 text-center leading-8 max-w-full">
                If your PC were a person, what would it look like?
              </h4>
            </div>
            <div className="flex flex-row justify-around flex-wrap px-16 gap-4 lg:gap-2 xl:gap-0">
              <Button variant="option" onClick={console.log}>
                Petite and elegant 👛
              </Button>
              <Button variant="option" onClick={console.log}>
                Robust and sturdy 💪
              </Button>
              <Button variant="option" onClick={console.log}>
                Tall and slender 📏
              </Button>
            </div>

            <div className="flex flex-row justify-around px-16 mt-10">
              <Button variant="primary" onClick={console.log}>
                Let’s name yout PC
              </Button>
            </div>
          </section>
        </div>

        <section className="relative bg-neutral-700 flex w-full flex-col items-center mt-20 pt-20 pb-24 px-5 max-md:mt-10">
          <div className="lg:container mx-auto flex flex-col px-4 lg:flex-row justify-between md:px-20 2xl:px-40">
            <div className="text-white text-xl leading-relaxed grow shrink basis-auto md:max-w-xl">
              <p className="font-bold">Plus, want to stay updated with our tech-tastic world?</p>
              <p>Subscribe to our newsletter for the latest in software development, tech trends, and more.</p>
            </div>
            <div className="flex flex-row flex-nowrap py-10 lg:py-0">
              <input
                placeholder="Get our news in your inbox!"
                className="text-neutral-400 text-lg font-thin leading-6 whitespace-nowrap bg-white grow items-center px-8 py-4 rounded-l-full self-start"
              />
              <div className="text-white btn-primary-gradient text-lg font-thin leading-6 whitespace-nowrap bg-white grow items-center px-8 py-4 rounded-r-full self-start">
                <a href="#">Subscribe</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  );
};

export default App;
