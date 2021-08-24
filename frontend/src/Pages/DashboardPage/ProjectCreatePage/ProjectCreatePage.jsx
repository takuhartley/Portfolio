// Dependencies
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../../Components/FormContainer";
import { createProject } from "../../../redux/actions/projectActions";
// import { PROJECT_CREATE_RESET } from '../../../redux/constants/projectConstants';
import Loader from "../../../Components/Loader/Loader";
// Material UI
import {
  FormControl,
  Input,
  InputLabel,
  Container,
  Checkbox,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";

const ProjectCreatePage = ({ location, history }) => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(true);
  const [stack, setStack] = useState("");
  const [framework, setFramework] = useState("");
  const [language, setLanguage] = useState([]);
  const [database, setDatabase] = useState("");
  const [stateManagement, setStateManagement] = useState("");
  const [uploading, setUploading] = useState(false);
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });
  const [components, setComponents] = useState([]);

  // Dispatch Redux
  const dispatch = useDispatch();
  const projectCreate = useSelector((state) => state.projectCreate);
  const { loading, error, success } = projectCreate;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProject({
        title,
        subTitle,
        description,
        image,
        published,
        stack,
        language,
        framework,
        database,
        stateManagement,
      })
    );
    if (success) {
      history.push("/admin/dashboard");
    }
  };
  const handleChange = (e) => {
    setPublished({ published: !e.target.checked });
  };

  const handleSwitchChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
  const handleClick = (e) => {
    console.log("clicked bitch");
  };

  return (
    <>
      <Container maxWidth="md">
        <Link to={"/admin/dashboard"} className="edit-project-link">
          Go Back
        </Link>

        <FormContainer>
          <h1>Add Project Data</h1>
          <Form onSubmit={submitHandler}>
            <FormControl required>
              <InputLabel htmlFor="title">title</InputLabel>
              <Input
                id="title"
                placeholder="enter title"
                autoComplete
                color="primary"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputLabel required htmlFor="subTitle">
                sub title
              </InputLabel>
              <Input
                id="subTitle"
                placeholder="enter sub title"
                autoComplete
                color="primary"
                multiline
                rows="5"
                value={subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputLabel required htmlFor="description">
                description
              </InputLabel>
              <Input
                id="description"
                placeholder="enter description"
                autoComplete
                color="primary"
                multiline
                rows="10"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControlLabel
              control={
                <Switch
                  checked={published}
                  onChange={handleChange}
                  name="published"
                />
              }
              label="Publish"
            />
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Standard" />
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </form>
            <button onClick={handleClick()}>+</button>
            <FormControl>
              <InputLabel required htmlFor="language">
                Language Used
              </InputLabel>
            </FormControl>
            <FormControl>
              <InputLabel required htmlFor="framework">
                Framework Used
              </InputLabel>
            </FormControl>
            <FormControl>
              <InputLabel required htmlFor="description">
                Library
              </InputLabel>
            </FormControl>
            <FormControl>
              <InputLabel required htmlFor="description">
                description
              </InputLabel>
            </FormControl>
            <FormControl>
              <InputLabel required htmlFor="description">
                description
              </InputLabel>
            </FormControl>
            <FormControl>
              <InputLabel required htmlFor="description">
                description
              </InputLabel>
            </FormControl>
            <FormControl>
              <InputLabel required htmlFor="description">
                description
              </InputLabel>
            </FormControl>
            <FormControl>
              <InputLabel required htmlFor="description">
                description
              </InputLabel>
            </FormControl>
            <FormControl>
              <InputLabel required htmlFor="description">
                description
              </InputLabel>
            </FormControl>
            <FormControl>
              <InputLabel required htmlFor="description">
                description
              </InputLabel>
            </FormControl>
            <FormControl>
              <InputLabel required htmlFor="description">
                description
              </InputLabel>
            </FormControl>

            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default ProjectCreatePage;
