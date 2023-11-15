import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation('translations');

  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <main className="pl-80 pr-80 bg-gradient flex flex-col bg-gray-900">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c35fd16-a08f-49b4-a03a-1f8371048079?apiKey=b59bae8eb0674da5802edba30bd21eb8&"
          className="aspect-ratio object-contain object-center w-164 justify-center items-center overflow-hidden self-center max-w-full mt-24 max-md:mt-10"
          alt=""
        />
        <section className="text-white text-center text-6xl font-semibold leading-70 bg-clip-text bg-gradient self-center w-1084 max-w-1060 mt-24 max-md:max-w-full max-md:text-4xl max-md:leading-52 max-md:mt-10">
          <span className="text-white">Today is </span>Name Your PC Day{' '}
          <span className="text-white">
            <br /> and we&apos;re here to make it memorable{' '}
          </span>
        </section>
        <section className="text-white text-center text-xl font-bold leading-8 self-center max-w-846 mt-11 max-md:max-w-full max-md:mt-10">
          <span className="">
            Did you know that giving your computer a unique name not only adds a personal touch but also enhances the
            bond between you and your trusty machine? It&apos;s a tradition that celebrates the geeky culture we all
            love, and{' '}
          </span>
          <span className="font-bold">we&apos;re excited to be a part of it</span>
        </section>
        <section className="bg-white self-center flex w-full max-w-1071 flex-col items-center mt-20 px-20 py-16 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="text-neutral-600 text-center text-xl leading-8 max-w-897 max-md:max-w-full">
            We&apos;ve got a fun way to help you name your PC. Answer these three quirky questions, and we&apos;ll
            suggest the perfect name for your computer. It&apos;s easy, entertaining, and the best part? It&apos;s all
            about embracing your inner geek
          </div>
          <div className="text-white text-xl whitespace-nowrap items-center bg-gradient w-236 max-w-full mt-14 px-5 py-4 rounded-36 max-md:mt-10">
            <a href="#">Let&apos;s name your PC</a>
          </div>
        </section>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f4d083e-5c86-4f7b-96ac-55562af165f6?apiKey=b59bae8eb0674da5802edba30bd21eb8&"
          className="aspect-ratio object-contain object-center w-195 overflow-hidden self-center max-w-full mt-24 max-md:mt-10"
          alt=""
        />
        <section className="bg-neutral-700 self-stretch flex w-full flex-col items-center mt-20 pt-20 pb-24 px-5 max-md:max-w-full max-md:mt-10">
          <div className="flex w-full max-w-1076 items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="text-white text-xl leading-8 grow shrink basis-auto max-md:max-w-full">
              <span className="font-bold">
                Plus, want to stay updated with our tech-tastic world? <br />
              </span>
              <span className="">
                Subscribe to our newsletter for the latest in software development, tech trends, and more.
              </span>
            </div>
            <div className="text-neutral-400 text-xl leading-8 whitespace-nowrap bg-white grow items-center p-5 rounded-l-full self-start">
              <span>Get our news in your inbox!</span>
            </div>
            <div className="text-white text-xl leading-8 whitespace-nowrap bg-gradient items-center mt-2 px-5 py-6 rounded-r-full self-start">
              <a href="#">Subscribe</a>
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  );
};

export default App;
