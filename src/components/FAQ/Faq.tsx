import React from "react";
import { arrow } from "../../assets";

const Faq: React.FC = () => {
  return (
    <div>
      <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center font-bold tracking-tight md:text-4xl text-dark">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 py-6 text-lg text-gray md:text-xl text-center">
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> What is Bookmark?</span>
                  <span className="transition group-open:rotate-180">
                    <img src={arrow} alt="" />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Springerdata offers a variety of billing options, including
                  monthly and annual subscription plans, as well as
                  pay-as-you-go pricing for certain services. Payment is
                  typically made through a credit card or other secure online
                  payment method.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> How can I request a new browser?</span>
                  <span className="transition group-open:rotate-180">
                    <img src={arrow} alt="" />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We offer a 30-day money-back guarantee for most of its
                  subscription plans. If you are not satisfied with your
                  subscription within the first 30 days, you can request a full
                  refund. Refunds for subscriptions that have been active for
                  longer than 30 days may be considered on a case-by-case basis.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Is there a mobile app?</span>
                  <span className="transition group-open:rotate-180">
                    <img src={arrow} alt="" />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  To cancel your subscription, you can log in to your account
                  and navigate to the subscription management page. From there,
                  you should be able to cancel your subscription and stop future
                  billing.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>What about other Chromium browsers?</span>
                  <span className="transition group-open:rotate-180">
                    <img src={arrow} alt="" />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We offer a free trial of our software for a limited time.
                  During the trial period, you will have access to a limited set
                  of features and functionality, but you will not be charged.
                </p>
              </details>
            </div>
          </div>
        </div>
        <div className="rounded-md w-40 h-12 flex items-center justify-center m-auto mt-8 shadow-md cursor-pointer bg-blue text-white hove0">
          <p className="text-base font-normal">More Info</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
