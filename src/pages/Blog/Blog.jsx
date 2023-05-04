import React from 'react';
import banner1 from '../../assets/pexels-rodnae-productions-7821577.jpg';
import banner2 from '../../assets/react-prop-types.png';
import banner3 from '../../assets/Screenshot_1.jpg';

const Blog = () => {
    return (
        <div className='my-container py-12 p-2'>
            <h1 className='text-4xl font-bold text center'>Read Our Blogs !!!</h1>
            <img className='w-1/2  mx-auto mt-4' src={banner1} alt="" />
            <h2 className='text-3xl text-gray-600 mt-6 font-bold text center'>
                1. What is the Difference Between a Controlled and Uncontrolled Component in React?
            </h2>
            <p className="text-xl mt-4">
                In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.
                A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value.
                An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value. <br /><br />
                In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.
            </p>


            <h2 className='text-3xl text-gray-600 my-12 font-bold text center'>
                2. How to validate React props using PropTypes ?
            </h2>
            <img className='mt-4 w-1/2 mx-auto' src={banner2} alt="" />
            <p className="text-xl mt-4">
                Props and PropTypes are important mechanisms for passing read-only attributes between React components.
                We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.
                Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes. <br /><br />
                When developing a React application, you’ll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.
            </p>


            <h2 className='text-3xl text-gray-600 my-12 font-bold text center'>
                3. What are the prime differences between Node JS and Express JS
            </h2>
            <img className='mt-4 mx-auto' src={banner3} alt="" />
            <p className="text-xl mt-4">
                An extension of JavaScript, NodeJS is an open-source server-side runtime environment built around the NodeJS language. Using a single-threaded approach for web loading and asynchronous programming, the framework has achieved great success in being highly-performant and scalable. <br /> <br />
                In addition, you may also benefit from using it to improve the backend functionality of your project by implementing Node JS-based frameworks like Express, Socket.io, and Meteor. <br />
                NodeJS imparts numerous advantages and is suitable for developing various applications. Whatever type of application you develop, the development platform will be beneficial. <br /><br />
                ExpressJS is a framework for developing web applications with NodeJS. Among the two options, it is the most significant difference. The ExpressJS development services framework provides several exceptional features that make developing web apps easy and fast. By contrast, using the latter alone makes developing web apps more complex.
            </p>


            <h2 className='text-3xl text-gray-600 my-12 font-bold text center'>
                4. What is a custom hook, and why will you create a custom hook?
            </h2>
            {/* <img className='mt-4 mx-auto' src={banner3} alt="" /> */}
            <p className="text-xl mt-4">
                In React, a custom hook is a reusable function that contains a set of stateful or stateless logic and can be used to share logic between components. Custom hooks allow you to abstract complex logic into a reusable function, which can help you write more maintainable and reusable code. <br />
                Custom hooks are created for a variety of reasons, but the main reasons are: <br /><br />
                Code reuse: If you find yourself writing the same code over and over again in multiple components, you can create a custom hook to abstract that code into a reusable function.

Abstraction of complex logic: Custom hooks can be used to abstract complex logic into a single function. This makes it easier to reason about the code and reduces the amount of code that needs to be written in a component.

Separation of concerns: Custom hooks allow you to separate the logic of a component from the rendering of the component. This can make it easier to test and debug your code.
            </p>


        </div>
    );
};

export default Blog;