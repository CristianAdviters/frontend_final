import React from "react";
import Range from "../Range/Range";

const UserProfile = () => {
  function EditReview() {
    Navigate("/UserEditProfile");
  }

  return (
    <>
      <div>
        <button onClick={EditReview}>Edit Review</button>
        <button>Delete Review</button>
      </div>
      <Range />
    </>
  );
};

export default UserProfile;
