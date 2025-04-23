import React from 'react';

const Blogs = () => {
    return (
        <div className="space-y-6 md:p-10">
              <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-lg font-semibold">1.What is useState and how does it work in React?</div>
  <div className="collapse-content "> <span className='text-lg font-bold text-blue-600'>Answer : </span>  useState is a React Hook that allows functional components to manage and update local state by returning a state variable and a function to modify it.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-lg font-semibold">2.What is the purpose of useEffect in React?</div>
  <div className="collapse-content "> <span className='text-lg font-bold text-blue-600'>Answer : </span>The useEffect hook in React is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-lg font-semibold">3.What is a custom hook in React and when should you use one?</div>
  <div className="collapse-content "> <span className='text-lg font-bold text-blue-600'>Answer : </span>A custom hook in React is a reusable function that encapsulates logic using built-in hooks, used to share stateful logic across components.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-lg font-semibold">4.Difference between controlled and uncontrolled components? Which one is better?</div>
  <div className="collapse-content "> <span className='text-lg font-bold text-blue-600'>Answer : </span>Controlled components are managed by React state, while uncontrolled components use the DOM directly; controlled components are generally better for consistency and easier debugging.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-lg font-semibold">5.Tell us something about useFormStatus() (explore and explain) ?</div>
  <div className="collapse-content "> <span className='text-lg font-bold text-blue-600'>Answer : </span>useFormStatus() is a React hook from Next.js that provides real-time status info (like pending or success) about a form submission in Server Actions.</div>
</div>
        </div>
    );
};

export default Blogs;
