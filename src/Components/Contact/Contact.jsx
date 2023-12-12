import Swal from "sweetalert2";
import SectionTitle from "../SectionTitle/SectionTitle";

const Contact = () => {
  const handleSend = (e) => {
    e.preventDefault();
const form = e.target
    console.log(form);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: `Send successfully`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="my-10">
        <SectionTitle heading="Contact me" subHeading="---contact--"></SectionTitle>
      </div>

      <form onSubmit={handleSend} data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"  data-aos-duration="3000">
        <div className="flex w-full   gap-2">
          <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered border-pink-500 w-full"
              required
            />
          </div>

          <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered border-pink-500 w-full"
              required
            />
          </div>
        </div>

        <div className="flex w-full   gap-2">
          <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="description"
              type="text"
              placeholder="Email"
              className="input input-bordered border-pink-500 w-full "
              required
            />
          </div>

          <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              name="description"
              type="text"
              placeholder="Phone"
              className="input input-bordered border-pink-500 w-full "
              required
            />
          </div>
        </div>

        <textarea
          placeholder="Write Your Text.................."
          className="border-2 border-pink-500 w-full mt-6 rounded"
          cols="30"
          rows="10"></textarea>
        <button className="btn w-full mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white">
          send
        </button>
       
      </form>
    </>
  );
};

export default Contact;