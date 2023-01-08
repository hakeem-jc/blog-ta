import { FC } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import "./PostForm.css";
import Button from "../Button/Button";
import { useAppSelector } from "../../common/hooks";

const PostForm: FC = () => {
  const current_post = useAppSelector(state => state.current_post);

  const onSubmit = (values: any, helpers: FormikHelpers<any>) => {
    console.log(helpers);
   
  };

  return (
    <div className="post-form" aria-autocomplete="none">
      
      <div className="post-form__title-container">
        <h1 className="post-form__title">New</h1>
      </div>

      <Formik initialValues={current_post} onSubmit={onSubmit}>
        <Form className="post-form__form">
          <div className="post-form__text-container">
            <Field id="title" name="title" className="post-form__input" />
            <label className="post-form__label" htmlFor="title">Title</label>
          </div>
          

          <div className="post-form__text-container">
            <Field id="content" name="content" className="post-form__input" />
            <label className="post-form__label" htmlFor="content">Content</label>
          </div>

          <div className="post-form__text-container">
            <Field id="lat" name="lat" className="post-form__input" />
            <label className="post-form__label" htmlFor="lat">Latitude</label>
          </div>

          <div className="post-form__text-container">
            <Field id="long" name="long" className="post-form__input" />
            <label className="post-form__label" htmlFor="long">Longitude</label>
          </div>

          <div className="post-form__text-container">
            <Field id="image_url" name="image_url" className="post-form__input" />
            <label className="post-form__label" htmlFor="image_url">Image URL</label>
          </div>

          <div>
            <Button
                text={"Create"}
                type={"button"}
                shape="square"
            />
          </div>
         
          {/* <Button text={form_type === FormType.NEW ? "Create":"Update"} type="submit" />           */}
        </Form>
      </Formik>
    </div>
  );
};

export default PostForm;