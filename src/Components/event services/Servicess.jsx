

const Servicess = ({ card }) => {
  return (
    <div>
      <h1 className="text-4xl  text-center mt-10 mb-2 font-mono  ">Event Services</h1>
      <p className="border-b-4 w-80 mx-auto border-red-500 mb-8"></p>
      <div className="grid grid-cols-3 gap-4">
        {card.map((data) => (
          <div key={data.id}>
            <div className="card card-compact  bg-base-100 shadow-xl">
              <figure><img className="h-56 w-96" src={data.image} alt="image" /></figure>
              <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>{data.shortDescription}</p>
                <div className="">
                  <button className="btn bg-gray-700 text-white w-full mt-4"> {data.button} </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicess;
