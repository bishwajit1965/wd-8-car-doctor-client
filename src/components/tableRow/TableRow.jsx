import { FaCheck, FaTrash } from "react-icons/fa";

import Swal from "sweetalert2";
import moment from "moment";

moment().format();

const TableRow = ({ booking, bookings, setBookings, id }) => {
  const { _id, title, price, image, status, date } = booking || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const remainingBookings = bookings.filter(
              (fBooking) => fBooking._id !== id
            );
            setBookings(remainingBookings);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

  const handleConfirm = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ status: "confirmed" }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              const updated = bookings.find((booking) => booking._id === id);
              updated.status = "confirmed";
              const newBookings = [updated, ...remaining];
              setBookings(newBookings);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Confirmed successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <tr>
      <th>
        <label>{id}</label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Booking image" />
            </div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td> {price}</td>
      <td>
        {status === "confirmed" ? (
          <span className="text-green-500 font-bold capitalize">{status}</span>
        ) : (
          <span className="text-red-500 ">Please confirm</span>
        )}{" "}
      </td>
      <td>{date ? moment(date).format("MMM Do YY") : "---"}</td>
      <th className="space-x-2">
        <div className="tooltip" data-tip="Confirm service">
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-circle btn-sm btn-outline bg-indigo-600 text-white"
          >
            <FaCheck />
          </button>
        </div>
        <div className="tooltip" data-tip="Delete service">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-sm btn-outline bg-red-600 text-white"
          >
            <FaTrash />
          </button>
        </div>
      </th>
    </tr>
  );
};

export default TableRow;
