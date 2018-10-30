import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

const adapFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
  input: { value: onChange, ...inputProps },
  meta: omitMeta,
  ...props
}) => (
  <input onChange={adapFileEventToValue(onChange)} {...inputProps} {...props} />
);

const FieldInput = ({ type, placeholder, input }) => {
  return (
    <FormControl
      type={type}
      placeholder={placeholder}
      value={input.value}
      onChange={input.onChange}
    />
  );
};

let AddProductForm = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            ชื่อสินค้า:
          </Col>
          <Col sm={10}>
            <Field
              name="sheetName"
              type="text"
              component={FieldInput}
              placeholder="กรุณากรอกชื่อสินค้า"
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            ไฟล์:
          </Col>
          <Col sm={10}>
            <Field name="sheetPdf" type="file" component={FileInput} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            รูปภาพ:
          </Col>
          <Col sm={10}>
            <Field name="sheetImage" type="file" component={FileInput} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            ราคา:
          </Col>
          <Col sm={10}>
            <Field
              name="sheetPrice"
              type="text"
              component={FieldInput}
              placeholder="กรุณากรอกราคา"
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            รายละเอียดสินค้าโดยย่อ:
          </Col>
          <Col sm={10}>
            <Field
              name="sheetHiLight"
              type="text"
              component="textarea"
              placeholder="กรุณากรอกรายละเอียดสินค้าโดยย่อ"
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            รายละเอียดสินค้าโดยละเอียด:
          </Col>
          <Col sm={10}>
            <Field
              name="sheetProductDescription"
              type="text"
              component="textarea"
              placeholder="กรุณากรอกรายละเอียดสินค้า"
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            ผู้อัพโหลด:
          </Col>
          <Col sm={10}>
            <Field
              name="sheetProfile"
              type="text"
              component={FieldInput}
              placeholder="กรุณากรอกผู้อัพโหลด"
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <br />
            <Button onclick="" type="submit">
              เพิ่ม
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

AddProductForm = reduxForm({
  form: "addProduct"
})(AddProductForm);

export default AddProductForm;
