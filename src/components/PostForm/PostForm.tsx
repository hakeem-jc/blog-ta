import { FC } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import "./PostForm.css";
import Button from "../Button/Button";
import { useAppSelector,useAppDispatch } from "../../common/hooks";
import { FormType } from "../../interfaces/form_values";
import { setRefreshPosts } from "../../features/post/postSlice";
import { create } from "../../api/create";
import { setIsOpen } from "../../features/modal/modalSlice";
import * as yup from 'yup';
const isUrl = require("is-valid-http-url");

const PostForm: FC = () => {
  const dispatch = useAppDispatch();
  const { current_post, form_type , refresh_posts} = useAppSelector(state => state);

  const onSubmit = (values: any, helpers: FormikHelpers<any>) => {
    if (form_type === FormType.NEW){
      create(values, helpers,current_post);
      dispatch(setRefreshPosts(refresh_posts + 1));
      dispatch(setIsOpen(false));
    } else {
      // Update
    }
  };

  const ValidationSchema = yup.object().shape({
    title: yup.string()
      .max(50, 'Titles can\'t be longer than 50 characters')
      .required('Required'),
   content: yup.string()
      .max(50, 'Content can\'t be longer than 50 characters')
      .required('Required'),
    lat: yup.number()
      .max(50, 'Latitude coordinates can\'t be longer than 50 characters')
      .required('Required'),
    long: yup.number()
      .max(50, 'Longitude coordinates can\'t be longer than 50 characters')
      .required('Required'),
    image_url: yup.string()
    .test(url=>{
        if (url) {
          return isUrl(url);
        }
      })
      .required('Required'),
  });

  return (
    <div className="post-form" aria-autocomplete="none">
      
      <div className="post-form__title-container">
        <h1 className="post-form__title">New</h1>
      </div>

      <Formik initialValues={current_post} validationSchema={ValidationSchema} onSubmit={onSubmit}>
        {({ errors, touched }) => (
          <Form className="post-form__form">
            <div className="post-form__text-container">
              <Field id="title" name="title" className="post-form__input" data-testid='title_field'/>
              <label className="post-form__label" htmlFor="title">Title</label>
            </div>
            {(errors.title && touched.title) && <p className="post-form__error_text">{errors.title}</p>}

            
            <div className="post-form__text-container">
              <Field id="content" name="content" className="post-form__input" data-testid='content_field' />
              <label className="post-form__label" htmlFor="content">Content</label>
            </div>
            {(errors.content && touched.content) && <p className="post-form__error_text">{errors.content}</p>}


            <div className="post-form__text-container">
              <Field id="lat" name="lat" className="post-form__input" data-testid='lat_field'/>
              <label className="post-form__label" htmlFor="lat">Latitude</label>
            </div>
            {(errors.lat && touched.lat) && <p className="post-form__error_text">{errors.lat}</p>}

            <div className="post-form__text-container">
              <Field id="long" name="long" className="post-form__input" data-testid='long_field'/>
              <label className="post-form__label" htmlFor="long">Longitude</label>
            </div>
            {(errors.long && touched.long) && <p className="post-form__error_text">{errors.long}</p>}

            <div className="post-form__text-container">
              <Field id="image_url" name="image_url" className="post-form__input" data-testid='image_url_field'/>
              <label className="post-form__label" htmlFor="image_url">Image URL</label>
            </div>
            {(errors.image_url && touched.image_url) && <p className="post-form__error_text">{errors.image_url}</p>}

            <div>
              <Button
                  text={form_type === FormType.NEW ? "Create":"Update"}
                  type={"submit"}
                  shape="square"
                  dataTestid='post_form_button'
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostForm;