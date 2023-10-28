import { AuthContext } from "../../providers/AuthProvider";
import CheckOutBanner from "../../components/common/checkOutBanner/CheckOutBanner";
import { Helmet } from "react-helmet-async";
import SectionTitleCenter from "../../components/common/sectionTitleCenter/SectionTitleCenter";
import Swal from "sweetalert2";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

const ServiceBooking = () => {
  const service = useLoaderData();
  console.log("Service:", service);
  const { _id, title, price, img } = service;
  const { user, loading } = useContext(AuthContext);

  const handleBookings = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const price = form.price ? form.price.value : 0;
    const title = form.title.value;
    const image = form.image.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const message = form.message.value;

    const data = {
      customerName: name,
      date: date,
      email: email,
      price: price,
      title: title,
      image: image,
      phone: phone,
      address: address,
      message: message,
      service: _id,
    };
    console.log(data);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Booking is completer!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Booking is not inserted!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="lg:my-10 ">
      <Helmet title="Car doctor || Service booking" />
      <div className="flex justify-center">
        {loading && <span className="loading loading-ring loading-lg"></span>}
      </div>
      <CheckOutBanner />
      <div className="lg:my-4">
        <SectionTitleCenter title={`Service: ${title}`} />
      </div>

      <div className="lg:my-5 bg-base-200 lg:p-16 p-2 rounded-lg">
        <form onSubmit={handleBookings} className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 justify-between">
            <div className="form-control col-span-6">
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Name..."
                className="input input-bordered w-full capitalize"
              />
            </div>
            <div className="form-control col-span-6">
              <input
                type="datetime-local"
                name="date"
                placeholder="Date time..."
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 justify-between">
            <div className="form-control col-span-6">
              <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Title..."
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control col-span-6">
              <input
                type="url"
                name="image"
                defaultValue={img}
                placeholder="Service image..."
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 justify-between">
            <div className="form-control col-span-6">
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Email..."
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control col-span-6">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Due amount..."
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 justify-between">
            <div className="form-control col-span-6">
              <input
                type="text"
                name="phone"
                defaultValue={`+88 01712809279`}
                placeholder="Phone no..."
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control col-span-6">
              <input
                type="text"
                name="address"
                defaultValue={`Noapara, Jashore, Bangladesh`}
                placeholder="Address..."
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control col-span-12">
            <textarea
              type="text"
              name="message"
              className="textarea textarea-bordered h-32"
              placeholder="Message..."
            ></textarea>
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="btn btn-full bg-orange-600 text-white hover:text-black"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceBooking;
