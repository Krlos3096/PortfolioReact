import React, { Component } from "react";
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
 * @extends {Component}
 */
class ContactSection extends Component {
  /**
   * Creates an instance of ContactSection.
   * @param {*} props
   * @memberof ContactSection
   */
  constructor(props) {
    super(props);
    this.state = {
      isSubmitionCompleted: false,
      open: false,
    };
    this.setOpen = this.setOpen.bind(this);
    this.setSubmitionCompleted = this.setSubmitionCompleted.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  /**
   * Method to set the open property that triggers the change of state
   *
   * @param {*} value
   * @memberof ContactSection
   */
  setOpen = (value) => {
    this.setState({ open: value });
  };

  /**
   * Method to set the submitioncompleted property to show the 'thank you' dialog
   *
   * @param {*} value
   * @memberof ContactSection
   */
  setSubmitionCompleted = (value) => {
    this.setState({ isSubmitionCompleted: value });
  };

  /**
   * Method to set the open property that allows to close the dialog
   *
   * @memberof ContactSection
   */
  handleClose = () => {
    this.setOpen(false);
  };

  /**
   * Method to set the open property that allows to open the dialog
   *
   * @memberof ContactSection
   */
  handleClickOpen = () => {
    this.setSubmitionCompleted(false);
    this.setOpen(true);
  };

  /**
   * Method that renders the component
   *
   * @return {*}
   * @memberof ContactSection
   */
  render() {
    return (
      <React.Fragment>
        <div className={Styles.cornerButtonContainer}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={this.handleClickOpen}
          >
            <MessageRounded className={Styles.MessageIcon}/>
          </IconButton>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          {!this.state.isSubmitionCompleted && (
            <React.Fragment>
              <DialogTitle id="form-dialog-title" style={{ backgroundColor: '#333', color: 'white', margin: '1%', borderRadius: '10px'}}>Contacto</DialogTitle>
              <DialogContent>
                <DialogContentText>¡Gracias por tu interes!</DialogContentText>
                <Formik
                  initialValues={{ email: "", name: "", comment: "" }}
                  onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    this.setSubmitionCompleted(true);
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
                          className={this.props.textField}
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          helperText={
                            errors.name && touched.name && errors.name
                          }
                          margin="normal"
                        />

                        <TextField
                          error={errors.email && touched.email}
                          label="Correo"
                          name="email"
                          className={this.props.textField}
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
                          className={this.props.textField}
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
          {this.state.isSubmitionCompleted && (
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
                    onClick={this.handleClose}
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
}
export default ContactSection;
