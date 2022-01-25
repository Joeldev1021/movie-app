import Form from "./Form";

export default function Main () {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex  lg:justify-between flex-col">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-white">Search your favorite movies?</span>
          <span className="block text-white">Start your free .</span>
        </h2>
        <Form />
      </div>
    </div>
  );
}
