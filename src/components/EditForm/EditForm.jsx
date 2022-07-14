import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function EditForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams(); // { id: 2 }

  // Grab active cake from redux store
  const editCake = useSelector((store) => store.editCake);

  console.log("editCake is:", editCake);
  // useEffect to dispatch 'FETCH_ACTIVE_CAKE' on page load
  useEffect(() => {
    dispatch({
      type: "FETCH_ACTIVE_CAKE",
      payload: Number(params.id),
    });
  }, [params.id]);

  // On click handler for when submit button pressed
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "SAVE_CAKE",
      payload: {
        id: editCake.id,
        name: editCake.name,
      },
    });

    // Go back to Admin view using useHistory after saving edit
    history.push("/admin");
  };

  return (
    <>
      <h2>Update Cake</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editCake.name}
          onChange={(evt) =>
            dispatch({
              type: "UPDATE_ACTIVE_CAKE",
              payload: { name: evt.target.value },
            })
          }
        />
        <input type="submit" value="Update Cake" />
      </form>
    </>
  );
}

export default EditForm;
