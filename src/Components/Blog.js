import React from 'react';

const Blog = () => {
    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 border-t border-b divide-y">
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">

                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    what is the purpose of react js ?
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.you can use React whether you're building a website, web app, mobile app, or virtual reality applications.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">

                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    How does context api works ?
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">

                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    How does useRef hook work ?
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;