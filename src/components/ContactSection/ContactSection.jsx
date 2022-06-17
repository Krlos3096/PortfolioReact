import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { MessageRounded } from "@mui/icons-material";
import { Formik } from "formik";
import * as Yup from "yup";
import Styles from "./ContactSection.module.css";

/**
 * ContactSection definition
 *
 * @class ContactSection
 */
function ContactSection() {
  /**
   * Method to set the open property that triggers the change of state
   *
   * @param {*} value
   * @memberof ContactSection
   */
  const [open, setOpen] = useState(false);

  /**
   * Method to set the submitioncompleted property to show the 'thank you' dialog
   *
   * @param {*} value
   * @memberof ContactSection
   */
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  /**
   * Method to set the open property that allows to close the dialog
   *
   * @memberof ContactSection
   */
  const handleClose = () => {
    setOpen(false);
  };

  /**
   * Method to set the open property that allows to open the dialog
   *
   * @memberof ContactSection
   */
  const handleClickOpen = () => {
    setSubmitionCompleted(false);
    setOpen(true);
  };

  /**
   * Method that renders the component
   *
   * @return {*}
   * @memberof ContactSection
   */
  return (
    <React.Fragment>
      <div className={Styles.cornerButtonContainer}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={handleClickOpen}
        >
          <MessageRounded className={Styles.MessageIcon} />
        </IconButton>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {!isSubmitionCompleted && (
          <React.Fragment>
            <DialogTitle
              id="form-dialog-title"
              style={{
                backgroundColor: "#333",
                color: "white",
                margin: "1%",
                borderRadius: "10px",
              }}
            >
              Contacto
            </DialogTitle>
            <DialogContent>
              <DialogContentText>¡Gracias por tu interes!</DialogContentText>
              <Formik
                initialValues={{ email: "", name: "", comment: "" }}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  setSubmitionCompleted(true);
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email().required("Required"),
                  name: Yup.string().required("Required"),
                  comment: Yup.string().required("Required"),
                })}
              >
                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        error={errors.name && touched.name}
                        label="Nombre"
                        name="name"
                        className={props.textField}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.name && touched.name && errors.name}
                        margin="normal"
                      />

                      <TextField
                        error={errors.email && touched.email}
                        label="Correo"
                        name="email"
                        className={props.textField}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.email && touched.email && errors.email
                        }
                        margin="normal"
                      />

                      <TextField
                        error={errors.comment && touched.comment}
                        label="Mensaje"
                        name="comment"
                        className={props.textField}
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.comment && touched.comment && errors.comment
                        }
                        margin="normal"
                      />
                      <DialogActions className={Styles.dialogActions}>
                        <Button
                          type="button"
                          className="outline"
                          onClick={handleReset}
                          disabled={!dirty || isSubmitting}
                        >
                          Reiniciar
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                          Enviar
                        </Button>
                      </DialogActions>
                    </form>
                  );
                }}
              </Formik>
            </DialogContent>
          </React.Fragment>
        )}
        {isSubmitionCompleted && (
          <React.Fragment>
            <DialogTitle id="form-dialog-title">Contacto</DialogTitle>
            <DialogContent>
              <DialogContentText>
                ¡Gracias, pronto te contactaremos!
              </DialogContentText>
              <DialogActions>
                <Button
                  type="button"
                  className="outline"
                  onClick={handleClose}
                >
                  Salir
                </Button>
              </DialogActions>
            </DialogContent>
          </React.Fragment>
        )}
      </Dialog>
    </React.Fragment>
  );
}
export default ContactSection;
