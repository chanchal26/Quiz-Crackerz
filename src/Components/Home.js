import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Language from './Language';

const Home = () => {

    const language = useLoaderData();


    return (
        <div>
            <div>
                <div>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                            <div className="flex flex-col justify-center">
                                <div className="max-w-xl mb-6">
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                        What do <span className="inline-block text-purple-400">
                                            Web Developers
                                        </span>
                                        <br className="hidden md:block" />
                                        do?

                                    </h2>
                                    <p className="text-base text-gray-700 md:text-lg">
                                        Web developers create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle.
                                    </p>
                                </div>
                                <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
                                    <div>
                                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                                            <svg
                                                className="w-10 h-10 text-deep-purple-accent-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </div>
                                        <h6 className="mb-2 font-semibold leading-5">
                                            Is web developer a hard career?
                                        </h6>
                                        <p className="text-sm text-gray-900">
                                            As a web developer, you will encounter numerous challenges. Some of them will be easy to fix, while others will be extremely hard.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                                            <svg
                                                className="w-10 h-10 text-deep-purple-accent-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </div>
                                        <h6 className="mb-2 font-semibold leading-5">
                                            Is web developer a good career?
                                        </h6>
                                        <p className="text-sm text-gray-900">
                                            Yes, web development is a good career. Mondo's annual Tech and Digital Marketing Salary guide found “Web Developer” was the most in-demand job title in tech and one of its top-paying jobs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                                    src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="relative mx-auto max-w-7xl">
                    <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                        {
                            (language.data).map(quiz => <Language key={quiz.id} quiz={quiz}></Language>)
                        }
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Home;