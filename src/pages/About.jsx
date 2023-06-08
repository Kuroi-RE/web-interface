const About = () => {
  return (
    <section className="container min-h-screen flex gap-5 flex-col justify-center items-center ">
      <div>
        <h1 className="text-4xl font-extrabold">RAMZy GROUB</h1>
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        <div>
          <h2 className="text-2xl font-semibold">About us</h2>
          <p className="max-w-lg">Small groub with only one human.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">About Website</h2>
          <p className="max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            quasi voluptates deleniti eligendi. Similique, aspernatur, alias
            sapiente ullam tenetur dignissimos ducimus consequatur possimus rem
            architecto eos eveniet, sit eum id?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
