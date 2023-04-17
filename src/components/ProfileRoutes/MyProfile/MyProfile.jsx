import React from "react";

const MyProfile = () => {
  return (
    <div className="bg-[#260c37] rounded-md">
      <div className="myProfileContainer pt-5 flex  justify-between px-5 text-white">
        <h1 className="text-2xl">My Profile</h1>
        <div className="edit flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>

          <span>Edit</span>
        </div>
      </div>

      <div className="profileInfo px-5 mt-5 space-y-3 pb-10 lg:flex lg:flex-row flex-col lg:gap-10 items-center lg:pl-14 lg:mt-10">
        <div className="edit">
          <img
            className="w-24 h-24 rounded-full"
            src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1672215649089.jpg"
            alt=""
          />
          <button className="py-2 text-black mt-3 font-semibold px-2 rounded-md bg-yellow-400">
            Edit Profile
          </button>
        </div>

        <div className=" pb-5 text-white space-y-5 pt-3">
          <div className="form-group">
            <label className="text-sm" for="FullName">
              Student ID:
            </label>
            <p>WEB7-2338</p>
          </div>
          <div className="form-group">
            <label className="text-sm" for="FullName">
              Full name
            </label>
            <p>Md. Hasib Imam</p>
          </div>
          <div className="form-group">
            <label className="text-sm" for="email">
              Email Address
            </label>
            <p>hasibimamhridoy@gmail.com</p>
          </div>
          <div className="form-group">
            <label className="text-sm" for="phone">
              Phone
            </label>
            <p>+8801706831927</p>
          </div>
        </div>
      </div>

      <div className="deviceContainer text-white lg:px-16 px-3">
      <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="font-medium dark:border-neutral-500">
            <tr className="bg-[#330154]">
              <th scope="col" className="px-6 py-4">Serial</th>
              <th scope="col" className="px-6 py-4">Platform</th>
              <th scope="col" className="px-6 py-4">Date</th>
              <th scope="col" className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Dextop</td>
              <td className="whitespace-nowrap px-6 py-4">Windows</td>
              <td className="whitespace-nowrap px-6 py-4"><button className="py-2 text-black mt-3 font-semibold px-2 rounded-md bg-yellow-400">
            Remove
          </button></td>
            </tr>
            <tr className=" dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Shawmi</td>
              <td className="whitespace-nowrap px-6 py-4">Mobile</td>
              <td className="whitespace-nowrap px-6 py-4"><button className="py-2 text-black mt-3 font-semibold px-2 rounded-md bg-yellow-400">
            Remove
          </button></td>
            </tr>
            <tr className=" dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td className="whitespace-nowrap px-6 py-4">Dextop Application</td>
              <td className="whitespace-nowrap px-6 py-4">Note</td>
              <td className="whitespace-nowrap px-6 py-4"><button className="py-2 text-black mt-3 font-semibold px-2 rounded-md bg-yellow-400">
            Remove
          </button></td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default MyProfile;
