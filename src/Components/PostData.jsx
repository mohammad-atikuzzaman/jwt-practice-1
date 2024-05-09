import axios from "axios";

const PostData = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const details = form.details.value;
    const product = { name, details };
    console.log(product);
    axios
      .post("http://localhost:3000/posts", product)
      .then((res) => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  };
  return (
    <div className="flex items-center justify-center text-center text-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-gray-100">
        <label htmlFor="name" className="self-start text-xs font-semibold">
          Item name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:border-violet-400 focus:ring-violet-400"
        />
        <label htmlFor="email" className="self-start text-xs font-semibold">
          User Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:border-violet-400 focus:ring-violet-400"
        />
        <label
          htmlFor="details"
          className="self-start mt-3 text-xs font-semibold">
          Details
        </label>
        <input
          id="details"
          name="details"
          type="text"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 focus:border-violet-400 focus:ring-violet-400"
        />
        <div className="flex justify-center mt-6 space-x-2 text-xs">
          <input type="submit" value="Add" className="btn btn-outline" />
        </div>
      </form>
    </div>
  );
};

export default PostData;
