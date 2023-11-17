import { Suspense, useState } from 'react';
import Survey from '@/components/Survey';
import landing from './landing.svg';

type SubscriptionResult = {
  message: string;
  status: 'error' | 'SUBSCRIBED';
};

const App = () => {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscriptionResult, setSubscriptionResult] = useState<SubscriptionResult | null>(null);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="flex flex-col gradient">
        <div className="absolute top-0 right-0 left-0 bottom-0 z-0 overflow-hidden mix-blend-lighten lg:mix-blend-normal">
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
            <Survey />
          </section>
        </div>

        <section className="relative bg-neutral-700 flex w-full flex-col items-center mt-20 pt-20 pb-24 px-2 sm:px-5 max-md:mt-10">
          <div className="lg:container mx-auto flex flex-col px-4 lg:flex-row justify-between md:px-20 2xl:px-40">
            <div className="flex-0 text-white text-xl leading-relaxed grow shrink basis-auto md:max-w-xl">
              <p className="font-bold">Plus, want to stay updated with our tech-tastic world?</p>
              <p>Subscribe to our newsletter for the latest in software development, tech trends, and more.</p>
            </div>
            <div className="flex flex-1 flex-col flex-nowrap py-10 lg:py-0 xl:pl-12 2xl:pl-24">
              {subscriptionResult?.status === 'SUBSCRIBED' ? (
                <p className="text-white">Great! Keep an 👀 on your inbox.</p>
              ) : (
                <>
                  <div className="flex flex-row">
                    <input
                      placeholder="Get our news in your inbox!"
                      className="text-neutral-600 font-thin whitespace-nowrap bg-white grow items-center text-sm leading-4 px-4 py-4 sm:text-lg sm:leading-6 sm:px-8 sm:py-4 rounded-l-full self-start"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="button"
                      className="flex justify-center text-white btn-primary-gradient font-thin whitespace-nowrap bg-white grow items-center text-sm leading-4 px-4 py-4 sm:text-lg sm:leading-6 sm:px-8 sm:py-4  rounded-r-full self-start"
                      onClick={() => {
                        setSubscribing(true);
                        setSubscriptionResult(null);
                        fetch(
                          'https://c8rpv7pgxc.execute-api.us-west-2.amazonaws.com/production/newsletter-subscribe',
                          {
                            method: 'POST',
                            body: JSON.stringify({
                              emailAddress: email,
                            }),
                          },
                        )
                          .then((res) => res.json())
                          .then((res) => {
                            if (res.status === 'SUBSCRIBED') {
                              setSubscriptionResult({
                                status: res.status,
                                message: '',
                              });
                              return;
                            }

                            const errors: Record<string, string> = {
                              VALIDATION_ERROR: `Email address ${email} is invalid`,
                              CONFLICT: 'Email already in use, try a new one',
                            };

                            setSubscriptionResult({
                              status: res.status,
                              message: errors[res.category] || 'Oops, something went wrong. Try again later.',
                            });
                          })
                          .catch(() => {
                            setSubscriptionResult({
                              status: 'error',
                              message: 'Oops, something went wrong. Try again later.',
                            });
                          })
                          .finally(() => {
                            setSubscribing(false);
                          });
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-gray-300 p-2 pl-5 min-h-min h-5">
                    {subscribing
                      ? 'Subscribing...'
                      : subscriptionResult?.status === 'error' && subscriptionResult.message}
                  </p>
                </>
              )}
              <div className="self-center max-w-full mt-10 max-md:mt-10 z-10">
                <ul className="flex flex-row gap-2">
                  <li>
                    <a aria-label="github" href="https://github.com/nanlabs" rel="noreferrer noopener" target="_blank">
                      <span>
                        <svg
                          width="2.3em"
                          height="2.3em"
                          viewBox="0 0 35 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 0.420984C7.60856 0.420984 0 8.03592 0 17.421C0 24.936 4.8705 31.3057 11.6206 33.5529C12.4738 33.7134 12.7819 33.1874 12.7819 32.7327C12.7819 32.3289 12.7723 31.2611 12.7659 29.8437C8.03463 30.868 7.038 27.5583 7.038 27.5583C6.26344 25.599 5.14569 25.0731 5.14569 25.0731C3.60719 24.0223 5.26788 24.0446 5.26788 24.0446C6.97213 24.1604 7.86888 25.7924 7.86888 25.7924C9.38506 28.3934 11.8469 27.6412 12.8212 27.2034C12.9699 26.108 13.413 25.3547 13.8954 24.935C10.1214 24.5089 6.15294 23.048 6.15294 16.5338C6.15294 14.6734 6.81169 13.1582 7.90075 11.9682C7.71269 11.5422 7.13681 9.8103 8.05056 7.46855C8.05056 7.46855 9.47325 7.01486 12.7256 9.21211C14.111 8.83531 15.5398 8.64205 16.9756 8.6373C18.4206 8.64686 19.8645 8.83598 21.2256 9.21211C24.4587 7.01486 25.8804 7.46855 25.8804 7.46855C26.7931 9.8103 26.2172 11.5411 26.0514 11.9682C27.1299 13.1582 27.7886 14.6744 27.7886 16.5338C27.7886 23.0629 23.8149 24.5025 20.0366 24.918C20.6274 25.4269 21.1809 26.4735 21.1809 28.0619C21.1809 30.3357 21.1597 32.1674 21.1597 32.721C21.1597 33.163 21.4572 33.6942 22.3327 33.5232C29.1327 31.2994 33.9979 24.9244 33.9979 17.4199C33.9979 8.03486 26.3893 0.419922 16.9979 0.419922L17 0.420984Z"
                            fill="#FFFFFF"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="instagram"
                      href="https://www.instagram.com/nanlabs/"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <span>
                        <svg
                          width="2.3em"
                          height="2.3em"
                          viewBox="0 0 35 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM21.0606 10.0811C20.1637 10.0402 19.8947 10.0316 17.6237 10.0316C15.3527 10.0316 15.0837 10.0402 14.1869 10.0811C13.3576 10.1189 12.9072 10.2574 12.6075 10.3738C12.2106 10.528 11.9272 10.7121 11.6295 11.0096C11.3319 11.3071 11.1476 11.5902 10.9934 11.9869C10.8769 12.2865 10.7383 12.7366 10.7005 13.5653C10.6595 14.4616 10.6509 14.7304 10.6509 17C10.6509 19.2696 10.6595 19.5384 10.7005 20.4347C10.7383 21.2635 10.8769 21.7136 10.9934 22.0131C11.1476 22.4098 11.3319 22.6929 11.6295 22.9904C11.9272 23.2879 12.2106 23.4721 12.6075 23.6262C12.9073 23.7426 13.3576 23.8811 14.1869 23.9189C15.0836 23.9598 15.3526 23.9685 17.6237 23.9685C19.8949 23.9685 20.1639 23.9598 21.0606 23.9189C21.8898 23.8811 22.3402 23.7426 22.64 23.6262C23.0369 23.4721 23.3203 23.2879 23.6179 22.9904C23.9155 22.693 24.0998 22.4098 24.2541 22.0131C24.3706 21.7135 24.5092 21.2635 24.547 20.4347C24.5879 19.5384 24.5965 19.2696 24.5965 17C24.5965 14.7304 24.5879 14.4616 24.547 13.5653C24.5092 12.7366 24.3706 12.2865 24.2541 11.9869C24.0998 11.5902 23.9156 11.3071 23.6179 11.0096C23.3203 10.7122 23.0369 10.528 22.64 10.3738C22.3402 10.2574 21.8898 10.1189 21.0606 10.0811ZM14.117 8.55113C15.0242 8.50976 15.3138 8.5 17.6237 8.5C19.9337 8.5 20.2233 8.50976 21.1305 8.55113C22.0358 8.59244 22.6541 8.73614 23.1951 8.94625C23.7544 9.1634 24.2287 9.45413 24.7015 9.92667C25.1744 10.3992 25.4652 10.8732 25.6826 11.4322C25.8928 11.9728 26.0366 12.5908 26.0779 13.4955C26.1193 14.4021 26.1291 14.6915 26.1291 17C26.1291 19.3085 26.1193 19.5979 26.0779 20.5046C26.0366 21.4093 25.8928 22.0272 25.6826 22.5678C25.4652 23.1268 25.1744 23.6008 24.7015 24.0734C24.2287 24.5459 23.7544 24.8366 23.195 25.0537C22.6541 25.2639 22.0358 25.4076 21.1305 25.4489C20.2233 25.4902 19.9337 25.5 17.6237 25.5C15.3138 25.5 15.0242 25.4902 14.117 25.4489C13.2117 25.4076 12.5934 25.2639 12.0524 25.0537C11.4931 24.8365 11.0188 24.5459 10.5459 24.0734C10.0731 23.6008 9.78222 23.1268 9.56494 22.5678C9.35463 22.0272 9.2109 21.4093 9.16957 20.5045C9.12818 19.5979 9.11841 19.3085 9.11841 17C9.11841 14.6915 9.12818 14.4021 9.16957 13.4955C9.2109 12.5908 9.35463 11.9728 9.56494 11.4322C9.78229 10.8732 10.0731 10.3992 10.5459 9.92667C11.0188 9.45413 11.4931 9.16346 12.0524 8.94625C12.5934 8.73614 13.2117 8.59244 14.117 8.55113ZM13.2561 17C13.2561 14.5895 15.2116 12.6351 17.6237 12.6351C20.0359 12.6351 21.9914 14.5894 21.9914 17C21.9914 19.4107 20.0359 21.3649 17.6237 21.3649C15.2116 21.3649 13.2561 19.4107 13.2561 17ZM14.7886 17C14.7886 18.5648 16.058 19.8334 17.6237 19.8334C19.1895 19.8334 20.4589 18.5648 20.4589 17C20.4589 15.4352 19.1895 14.1666 17.6237 14.1666C16.058 14.1666 14.7886 15.4352 14.7886 17ZM22.1639 13.4827C22.7276 13.4827 23.1845 13.0261 23.1845 12.4627C23.1845 11.8993 22.7276 11.4427 22.1639 11.4427C21.6002 11.4427 21.1432 11.8993 21.1432 12.4627C21.1432 13.0261 21.6002 13.4827 22.1639 13.4827Z"
                            fill="#FFFFFF"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="twitter"
                      href="https://twitter.com/nanlabs"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <span>
                        <svg
                          className="icon"
                          width="2.3em"
                          height="2.3em"
                          viewBox="0 0 32 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 0C7.16429 0 0 7.16429 0 16C0 24.8357 7.16429 32 16 32C24.8357 32 32 24.8357 32 16C32 7.16429 24.8357 0 16 0ZM23.6893 12.0607C23.7 12.2286 23.7 12.4036 23.7 12.575C23.7 17.8179 19.7071 23.8571 12.4107 23.8571C10.1607 23.8571 8.075 23.2036 6.31786 22.0786C6.63929 22.1143 6.94643 22.1286 7.275 22.1286C9.13214 22.1286 10.8393 21.5 12.2 20.4357C10.4571 20.4 8.99286 19.2571 8.49286 17.6857C9.10357 17.775 9.65357 17.775 10.2821 17.6143C9.38474 17.432 8.57812 16.9446 7.99934 16.2349C7.42056 15.5253 7.10531 14.6372 7.10714 13.7214V13.6714C7.63214 13.9679 8.25 14.15 8.89643 14.175C8.35301 13.8128 7.90735 13.3222 7.59897 12.7465C7.29059 12.1709 7.12901 11.528 7.12857 10.875C7.12857 10.1357 7.32143 9.46071 7.66786 8.875C8.66394 10.1012 9.9069 11.1041 11.3159 11.8184C12.725 12.5328 14.2686 12.9427 15.8464 13.0214C15.2857 10.325 17.3 8.14286 19.7214 8.14286C20.8643 8.14286 21.8929 8.62143 22.6179 9.39286C23.5143 9.225 24.3714 8.88929 25.1357 8.43929C24.8393 9.35714 24.2179 10.1321 23.3929 10.6214C24.1929 10.5357 24.9643 10.3143 25.6786 10.0036C25.1393 10.7964 24.4643 11.5 23.6893 12.0607Z"
                            fill="#FFFFFF"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="facebook"
                      href="https://www.facebook.com/nanlabs"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <span>
                        <svg
                          className="icon"
                          width="2.3em"
                          height="2.3em"
                          viewBox="0 0 32 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.6797 0.679688C7.84302 0.679688 0.679688 7.84302 0.679688 16.6797C0.679688 25.5164 7.84302 32.6797 16.6797 32.6797C25.5164 32.6797 32.6797 25.5164 32.6797 16.6797C32.6797 7.84302 25.5164 0.679688 16.6797 0.679688ZM20.4697 11.7364H18.0647C17.7797 11.7364 17.463 12.1114 17.463 12.6097V14.3464H20.4714L20.0164 16.823H17.463V24.258H14.6247V16.823H12.0497V14.3464H14.6247V12.8897C14.6247 10.7997 16.0747 9.10135 18.0647 9.10135H20.4697V11.7364Z"
                            fill="#FFFFFF"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="linkedin"
                      href="https://www.linkedin.com/company/nan-labs/"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <span>
                        <svg
                          className="icon"
                          height="2.3em"
                          viewBox="0 0 34 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.6797 0.679688C7.84302 0.679688 0.679688 7.84302 0.679688 16.6797C0.679688 25.5164 7.84302 32.6797 16.6797 32.6797C25.5164 32.6797 32.6797 25.5164 32.6797 16.6797C32.6797 7.84302 25.5164 0.679688 16.6797 0.679688ZM12.763 23.3114H9.52302V12.8847H12.763V23.3114ZM11.123 11.6047C10.0997 11.6047 9.43802 10.8797 9.43802 9.98302C9.43802 9.06802 10.1197 8.36469 11.1647 8.36469C12.2097 8.36469 12.8497 9.06802 12.8697 9.98302C12.8697 10.8797 12.2097 11.6047 11.123 11.6047ZM24.5964 23.3114H21.3564V17.533C21.3564 16.188 20.8864 15.2747 19.7147 15.2747C18.8197 15.2747 18.288 15.893 18.053 16.488C17.9664 16.6997 17.9447 16.9997 17.9447 17.298V23.3097H14.703V16.2097C14.703 14.908 14.6614 13.8197 14.618 12.883H17.433L17.5814 14.3314H17.6464C18.073 13.6514 19.118 12.648 20.8664 12.648C22.998 12.648 24.5964 14.0764 24.5964 17.1464V23.3114Z"
                            fill="#FFFFFF"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  );
};

export default App;
