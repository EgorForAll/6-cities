import React, {useState, useEffect} from "react";

const PropertyTextArea = ({submitBtnRef, commentRef}) => {

  const [commentValue, setCommentValue] = useState({value: ``});

  useEffect(() => {
    if (commentRef.current.value.length >= 50 && commentRef.current.value.length <= 200) {
      submitBtnRef.current.disabled = false;
      return;
    }
    submitBtnRef.current.disabled = true;
  }, [commentValue])

  return (
    <>
    <textarea ref={commentRef} className="reviews__textarea htmlForm__textarea" value={commentValue.value} onChange={(evt) => setCommentValue(evt.target.value)} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
      <button ref={submitBtnRef} className="reviews__submit htmlForm__submit button" type="submit" >Submit</button>
    </div>
    </>
  );
};

export default PropertyTextArea;
