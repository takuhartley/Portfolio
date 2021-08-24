// Dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

// SCSS
import "./ProjectDetailsPage.css";
import { getProjectDetails } from "../../../redux/actions/projectActions";
import Message from "../../../Components/Message/Message";
import Loader from "../../../Components/Loader/Loader";

const ProjectDetailsPage = ({ match }) => {
  const dispatch = useDispatch();
  const projectDetails = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetails;

  useEffect(() => {
    if (!project._id || project._id !== match.params.id) {
      dispatch(getProjectDetails(match.params.id));
    }
  }, [dispatch, match, project._id]);
  const { title, subTitle, published, description, images } = project;

  //<div className="project-thumbnail-image" style={{ backgroundImage: `url(${project.images.thumbnail.image})` }}></div>
  return (
    <>
      <div className="project-details-page-container">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <div className="project-details-page-link">
              <RouterLink to="/projects">Back</RouterLink>
            </div>
            <div className="project-details-page-title">
              <p>
                
              </p>
            </div>
            <div className="project-details-page-title">
              <p>{title}</p>
            </div>
            <div className="project-details-page-subTitle">
              <p>{subTitle}</p>
            </div>
            <div className="project-details-page-description">
              <p>{description}</p>
            </div>
            <div className="project-details-page-published">
              <p>{published}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProjectDetailsPage;
