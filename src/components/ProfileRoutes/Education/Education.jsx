import React from "react";

const Education = () => {
  return (
    <div>
      <div className="p-md-4 p-3  pb-2 m-2 text-white">
        <form>
          <div className="row space-y-5">

            <div className="form-group flex justify-between w-[50%]">
              <label for="FullName">Your Education level </label>
              <p>Bachelor/Honors</p>
            </div>


            <div className="form-group col-md-12 flex justify-between w-[50%]">
              <label for="email">Exam/Degree Title</label>
              <p>Anthropology</p>
            </div>
          </div>


          <div className="form-group">
            <label for="phone">Institution Name </label>
            <p>Comilla University</p>
          </div>


          <div className="row">
            <div className="form-group flex justify-between w-[50%] ">
              <label for="phone" className="d-block">
                Approximate Passing year{" "}
              </label>
              <p>2024</p>
            </div>
            <div className="form-group flex justify-between w-[50%]">
              <label for="phone" className="d-block">
                Current year{" "}
              </label>
              <p>3rd</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Education;
