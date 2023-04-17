import React from "react";

const Adress = () => {
  return (
    <div>
      <div className="p-md-4 p-3  pb-2 m-2 text-white">
        <form>
          <h5 className="mb-3 adress-title-text text-red-500 text-2xl">Present Address</h5>
          <div className="row">
            <div className="space-y-4">
            <div className="form-group flex justify-between w-[50%]">
              <label for="FullName">Your Country</label>
              <p>Bangladesh</p>
            </div>
            <div className="col-md-6 form-group flex justify-between w-[50%]">
              <label for="email">District</label>
              <p>Rangpur</p>
            </div>
            <div className="form-group flex justify-between w-[50%]">
              <label for="phone">Street Address</label>
              <p>01,Vogibalapara</p>
            </div>
            </div>


            <h5 className="my-3  mt-4 text-red-500 text-2xl">
              Permanent Address
            </h5>
            <div className="space-y-4">
            <div className="form-group flex justify-between w-[50%]">
              <label for="FullName">Your Country</label>
              <p>Bangladesh</p>
            </div>
            <div className="flex justify-between w-[50%] form-group">
              <label for="email">District</label>
              <p>Rangpur</p>
            </div>
            <div className="form-group flex justify-between w-[50%]">
              <label for="phone">Street Address</label>
              <p>01,Vogibalapara</p>
            </div>
            </div>


          </div>
        </form>
      </div>
    </div>
  );
};

export default Adress;
