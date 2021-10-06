import React from "react";
import { connect } from "react-redux";

import { getPhotos } from "../actions/photos";

class Photos extends React.Component {
    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        const { isLoading, photos } = this.props;
        return (
            <div>
                {
                    isLoading ? (
                        <h2>Loading.........</h2>
                    ) : (
                        photos.map((item) => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                                <img
                                    src={item.url}
                                    alt={`photo-${item.id}`}
                                    style={{
                                        width: '600px',
                                        height: 600
                                    }}
                                />
                            </div>
                        ))
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.media.loading,
    photos: state.media.photos
});

const mapDispatchToProps = {
    getPhotos: getPhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);