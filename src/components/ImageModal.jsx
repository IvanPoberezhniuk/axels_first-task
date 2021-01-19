import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Image, Modal, Row, Spinner} from 'react-bootstrap';
import {getImageById} from '../api/httpRequests';
import ImageModel from '../models/image';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import CommentModel from '../models/comment';
import {ImageModalCol, ImageModalDiv} from '../styled/components/ImageModal';
import CloseIcon from './CloseIcon';

const ImageModal = ({onHide, show, imgId}) => {
  const [imgData, setImgData] = useState(new ImageModel());
  const [isLoading, setIsLoading] = useState(false);

  const getImgInfo = async () => {
    try {
      setIsLoading(true);
      await getImageById(imgId).then(data => {
        setImgData(new ImageModel(data));
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onAddComment = (comment) => {
    const newCommentWithDate = new CommentModel({...comment, date: Date.now()});
    setImgData({...imgData, comments: [...imgData.comments, newCommentWithDate]});
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      onShow={getImgInfo}
      centered
    >
      <CloseIcon onIconClick={onHide}/>
      <Modal.Body>
        <Row>
          <ImageModalCol xs={12} md={7}>
            <ImageModalDiv>
              {isLoading ?
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner> :
                <Image src={imgData.url} fluid/>
              }
            </ImageModalDiv>
          </ImageModalCol>
          <ImageModalCol xs={12} md={5}>
            <CommentsList comments={imgData.comments}/>
          </ImageModalCol>
          <ImageModalCol xs={12} md={7}>
            <CommentForm imgId={imgId} onAddComment={onAddComment}/>
          </ImageModalCol>

        </Row>
      </Modal.Body>
    </Modal>
  );
};

ImageModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  imgId: PropTypes.number.isRequired
};

export default ImageModal;
